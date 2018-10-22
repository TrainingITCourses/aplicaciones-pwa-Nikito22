import { IsaActionTypes, IsaActions } from './isa.actions';
import { initialState, State, enTipoCriterio, Lanzamiento } from './isa.models';
import { formattedError } from '@angular/compiler';

export function reducer(state = initialState, action: IsaActions): State {
  switch (action.type) {

    case IsaActionTypes.CambiarTipoCriterio:
      state.tipoCriterio = action.payload;
      return state;

    case IsaActionTypes.TipoCriterioCambiado:
      state.criterios = action.payload.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      return { ...state };

    case IsaActionTypes.CambiarCriterio:
      state.cargado = false;
      state.criterio = action.payload;
      return state;

    case IsaActionTypes.CriterioCambiado:
      let ls: any;
      switch (state.tipoCriterio) {
        case enTipoCriterio.Estado:
          ls = action.payload.filter(l => l.status === Number(state.criterio));
          break;
        case enTipoCriterio.Agencia:
          ls = action.payload.filter(l => agencia(l) === Number(state.criterio));
          break;
        case enTipoCriterio.TipoMision:
          ls = action.payload.filter(l => tipoMision(l) === Number(state.criterio));
          break;
      }
      // console.log(ls.length);
      state.lanzamientos = ls.map((l: any) => ({
        name: l.name,
        launchDate: l.windowstart,
        status: l.status,
        agencyId: agencia(l),
        missionType: tipoMision(l),
        urlFoto: foto(l)
      }));
      state.cargado = true;
      console.log(state.lanzamientos.length);
      return { ...state };
  }

  function agencia(l: any): number {
    return l.rocket ? l.rocket.agencies ? l.rocket.agencies.length > 0 ? l.rocket.agencies[0].id : 0 : 0 : 0;
  }

  function foto(l: any): string {
    return l.rocket ? l.rocket.imageURL : '';
  }

  function tipoMision(d: any): number {
    return d.missions ? d.missions.length > 0 ? d.missions[0].type : 0 : 0;
  }
}
