import { HttpClient } from '@angular/common/http';
import { IsaActionTypes, CambiarCriterio, TipoCriterioCambiado, CambiarTipoCriterio, CriterioCambiado } from './isa.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { enTipoCriterio, Selopt } from './isa.models';
import { ApiService } from './api.service';

@Injectable()
export class IsaEffects {

  constructor(private actions$: Actions, private http: HttpClient, public api: ApiService) { }

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

  @Effect()
  public cambiarCriterio$ = this.actions$.ofType(IsaActionTypes.CambiarCriterio)
    .pipe(
      mergeMap((action: CambiarCriterio) =>
        this.api.getLaunches$().pipe(
          map(res => new CriterioCambiado(res))
        )
      )
    );
}
