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
  _lanzamientos: Lanzamiento[];
  lanzamientos: Lanzamiento[];
}
export const initialState: State = {
  cargado: false,
  tipoCriterio: -1,
  criterio: -1,
  criterios: [],
  _lanzamientos: [],
  lanzamientos: [],
};
export function agencia(l: any): number {
  return l.rocket ? l.rocket.agencies ? l.rocket.agencies.length > 0 ? l.rocket.agencies[0].id : 0 : 0 : 0;
}

export function urlFoto(l: any): string {
  return l.rocket ? l.rocket.imageURL : '';
}

export function tipoMision(d: any): number {
  return d.missions ? d.missions.length > 0 ? d.missions[0].type : 0 : 0;
}
