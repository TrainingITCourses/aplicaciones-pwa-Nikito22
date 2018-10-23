import { HttpClient } from '@angular/common/http';
import {
  IsaActionTypes, TipoCriterioCambiado, CambiarTipoCriterio,
  CargarLanzamientos, LanzamientosCargados
} from './isa.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { enTipoCriterio, Selopt, Lanzamiento } from './isa.models';
import { ApiService } from './api.service';

@Injectable()
export class IsaEffects {

  constructor(private actions$: Actions, private http: HttpClient, public api: ApiService) { }

  @Effect()
  public cargarLanzamientos$ = this.actions$.ofType(IsaActionTypes.CargarLanzamientos)
    .pipe(
      mergeMap((action: CargarLanzamientos) =>
        this.api.getLaunches$().pipe(
          map(res => res = this.transformaLanzamientos(res)),
          map(res => new LanzamientosCargados(res))
        )
      )
    );

  @Effect()
  public cambiarTipoCriterio$ = this.actions$.ofType(IsaActionTypes.CambiarTipoCriterio)
    .pipe(
      mergeMap((action: CambiarTipoCriterio) => {
        switch (action.payload) {
          case enTipoCriterio.Agencia:
            return this.api.getAgencies$().pipe(
              map(res => new TipoCriterioCambiado(res)
              ));
          case enTipoCriterio.Estado:
            return this.api.getStatus$().pipe(
              map(res => new TipoCriterioCambiado(res))
            );
          case enTipoCriterio.TipoMision:
            return this.api.getMissions$().pipe(
              map(res => new TipoCriterioCambiado(res))
            );
        }
      })
    );

  transformaLanzamientos(res): Lanzamiento[] {
    return res.map((l: any) => ({
      name: l.name,
      launchDate: l.windowstart,
      status: l.status,
      agencyId: this.agencia(l),
      missionType: this.tipoMision(l),
      urlFoto: this.urlFoto(l)
    }));
  }

  agencia(l: any): number {
    return l.rocket ? l.rocket.agencies ? l.rocket.agencies.length > 0 ? l.rocket.agencies[0].id : 0 : 0 : 0;
  }

  urlFoto(l: any): string {
    return l.rocket ? l.rocket.imageURL : '';
  }

  tipoMision(d: any): number {
    return d.missions ? d.missions.length > 0 ? d.missions[0].type : 0 : 0;
  }
}
