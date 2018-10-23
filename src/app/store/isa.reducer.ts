import { IsaActionTypes, IsaActions } from './isa.actions';
import { initialState, State, enTipoCriterio } from './isa.models';
import { formattedError } from '@angular/compiler';

export function reducer(state = initialState, action: IsaActions): State {
  switch (action.type) {

    case IsaActionTypes.CargarLanzamientos:
      state.cargado = false;
      return state;

    case IsaActionTypes.LanzamientosCargados:
      state.cargado = true;
      state._lanzamientos = action.payload;
      return { ...state};

    case IsaActionTypes.CambiarTipoCriterio:
      state.tipoCriterio = action.payload;
      return state;

    case IsaActionTypes.TipoCriterioCambiado:
      state.criterios = action.payload.map(d => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      return { ...state };

    case IsaActionTypes.CambiarCriterio:
      state.criterio = action.payload;
      switch (state.tipoCriterio) {
        case enTipoCriterio.Estado:
          state.lanzamientos = state._lanzamientos.filter(l => l.status === Number(state.criterio));
          break;
        case enTipoCriterio.Agencia:
          state.lanzamientos = state._lanzamientos.filter(l => l.agencyId === Number(state.criterio));
          break;
        case enTipoCriterio.TipoMision:
          state.lanzamientos = state._lanzamientos.filter(l => l.missionType === Number(state.criterio));
          break;
      }
      console.log(state.lanzamientos.length);
      return { ...state } ;
  }

}
