import { Action } from '@ngrx/store';
import { enTipoCriterio, Selopt, Lanzamiento } from './isa.models';

export enum IsaActionTypes {
  CargarLanzamientos = '[Isa] CargarLanzamientos',
  LanzamientosCargados = '[Isa] LanzamientosCargados',
  CambiarTipoCriterio = '[Isa] CambiarTipoCriterio',
  TipoCriterioCambiado = '[Isa] TipoCriterioCambiado',
  CambiarCriterio = '[Isa] CambiarCriterio',
  CriterioCambiado = '[Isa] CriterioCambiado'
}

export class CargarLanzamientos implements Action {
  public readonly type = IsaActionTypes.CargarLanzamientos;
}
export class LanzamientosCargados implements Action {
  public readonly type = IsaActionTypes.LanzamientosCargados;
  constructor(public readonly payload: any) { }
}
export class CambiarTipoCriterio implements Action {
  public readonly type = IsaActionTypes.CambiarTipoCriterio;
  constructor(public readonly payload: enTipoCriterio) { }
}
export class TipoCriterioCambiado implements Action {
  public readonly type = IsaActionTypes.TipoCriterioCambiado;
  constructor(public readonly payload: any) { }
}

export class CambiarCriterio implements Action {
  public readonly type = IsaActionTypes.CambiarCriterio;
  constructor(public readonly payload: number) { }
}
export class CriterioCambiado implements Action {
  public readonly type = IsaActionTypes.CriterioCambiado;
  constructor(public readonly payload: Lanzamiento[]) { }
}

export type IsaActions = CargarLanzamientos | LanzamientosCargados | CambiarTipoCriterio
                      | TipoCriterioCambiado | CambiarCriterio | CriterioCambiado;

