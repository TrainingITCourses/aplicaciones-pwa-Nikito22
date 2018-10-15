import { Action } from '@ngrx/store';
import { IsaActionTypes, IsaActions } from './isa.actions';


export interface State {
  cargado: boolean;
  // Valores expuestos por el store
  tipoCriterio: enTipoCriterio;
  criterios: Selopt[];
  lanzamientos: Lanzamiento[];
}

export const initialState: State = {
  cargado: false,
  tipoCriterio: -1,
  criterios: [],
  lanzamientos: [],
};

export function reducer(state = initialState, action: IsaActions): State {
  // switch (action.type) {
  //   case IsaActionTypes.CargarCache:
  //     return state;
  //     break;

  //   case IsaActionTypes.CacheCargado:
  //     state.cache = action.payload;
  //     state.cargado = true;
  //     return { ...state };
  //     break;

  //   case IsaActionTypes.CacheNoCargado:
  //     return state;
  //     break;

  //   case IsaActionTypes.CambiarTipoCriterio:
  //     state.tipoCriterio = action.payload;
  //     switch (action.payload) {
  //       case enTipoCriterio.Estado:
  //         state.criterios = state.cache.estados;
  //         break;
  //       case enTipoCriterio.Agencia:
  //         state.criterios = state.cache.agencias;
  //         break;
  //       case enTipoCriterio.TipoMision:
  //         state.criterios = state.cache.tiposMision;
  //         break;
  //     }
  //     return { ...state };
  //     break;

  //   case IsaActionTypes.CambiarCriterio:
  //     switch (state.tipoCriterio) {
  //       case enTipoCriterio.Estado:
  //         state.lanzamientos = [...state.cache.lanzamientos.filter(l => l.status === Number(action.payload))];
  //         break;
  //       case enTipoCriterio.Agencia:
  //         state.lanzamientos = [...state.cache.lanzamientos.filter(l => l.agencyId === Number(action.payload))];
  //         break;
  //       case enTipoCriterio.TipoMision:
  //         state.lanzamientos = [...state.cache.lanzamientos.filter(l => l.missionType === Number(action.payload))];
  //         break;
  //     }
  return { ...state };
  //   break;
  // }

}

/// ISA is an acronim of International Space Agency (Dedicater to my dear aunt Isabel)
export interface ICache {
  tiposCriterios: string[];
  estados: Selopt[];
  agencias: Selopt[];
  tiposMision: Selopt[];
  lanzamientos: Lanzamiento[];
}


export enum enTipoCriterio {
  Estado,
  Agencia,
  TipoMision
}

export interface Selopt {
  value: string;
  viewValue: string;
}

export interface Lanzamiento {
  name: string;
  launchDate: string;
  status: number;
  agencyId: number;
  missionType: number;
}

