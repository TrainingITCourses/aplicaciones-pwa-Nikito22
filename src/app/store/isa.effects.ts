import { HttpClient } from '@angular/common/http';
import { IsaActionTypes, CambiarCriterio, TipoCriterioCambiado, CambiarTipoCriterio } from './isa.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { enTipoCriterio, Selopt } from './isa.reducer';


@Injectable()
export class IsaEffects {
  @Effect()
  public cambiarTipoCriterio$ = this.actions$.ofType(IsaActionTypes.CambiarTipoCriterio)
    .pipe(
      mergeMap((action: CambiarTipoCriterio) => {
        switch (action.payload) {
          case enTipoCriterio.Estado:
            const s: Selopt[] = this.http.get('/assets/launchstatus.json')
              .pipe(
                map(r => r.types.r.map(d => ({
                  value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
                })))
              );
            return new TipoCriterioCambiado(s);
        }
      })
    );

  // cache.tiposCriterios = Object.keys(enTipoCriterio).slice(Object.keys(enTipoCriterio).length / 2);
  // cache.agencias = results[1].agencies.map(d => ({
  //   value: d.id, viewValue: d.id + ' - ' + d.name
  // }));
  // cache.tiposMision = results[2].types.map(d => ({
  //   value: d.id, viewValue: d.id + ' - ' + d.name
  // }));
  // cache.lanzamientos = results[3].launches.map(d => ({
  //   name: d.name
  //   , launchDate: d.net
  //   , status: d.status
  //   , agencyId: d.rocket ? d.rocket.agencies ? d.rocket.agencies.length > 0 ? d.rocket.agencies[0].id : 0 : 0 : 0
  //   , missionType: d.missions ? d.missions.length > 0 ? d.missions[0].type : 0 : 0
  // })

  constructor(private actions$: Actions, private http: HttpClient) { }
}
