/// ISA is an acronim of International Space Agency (Dedicater to my dear aunt Isabel)
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
  urlFoto: string;
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
