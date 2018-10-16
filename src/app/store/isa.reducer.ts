import { IsaActionTypes, IsaActions } from './isa.actions';

/// ISA is an acronim of International Space Agency (Dedicater to my dear aunt Isabel)
export interface ICache {
  tiposCriterios: string[];
  estados: Selopt[];
  agencias: Selopt[];
  tiposMision: Selopt[];
  lanzamientos: Lanzamiento[];
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

export enum enTipoCriterio {
  Estado,
  Agencia,
  TipoMision
}
export interface State {
  cargado: boolean;
  // Valores expuestos por el store
  tipoCriterio: enTipoCriterio;
  criterio: number;
  criterios: Selopt[];
  lanzamientos: Lanzamiento[];
}

export const initialState: State = {
  cargado: false,
  tipoCriterio: -1,
  criterio: -1,
  criterios: [],
  lanzamientos: [],
};

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
      state.criterio = action.payload;
      return state;

    case IsaActionTypes.CriterioCambiado:
      let ls: any;
      switch (state.tipoCriterio) {
        case enTipoCriterio.Estado:
          ls = action.payload.filter(l => l.status === Number(state.criterio));
          break;
        case enTipoCriterio.Agencia:
          ls = action.payload.filter(l => l.rocket.agencies[0].id === Number(state.criterio));
          break;
        case enTipoCriterio.TipoMision:
          ls = action.payload.filter(l => l.missionType === state.criterio);
          break;
      }
      // console.log(ls.length);
      state.lanzamientos = ls.map((d: any) => ({
        value: d.id, viewValue: d.id + ' - ' + d.name
      }));
      console.log(state.lanzamientos.length);
      return { ...state };
  }
}
