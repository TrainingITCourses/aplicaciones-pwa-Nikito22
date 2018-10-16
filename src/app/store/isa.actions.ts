import { Action } from '@ngrx/store';
import { enTipoCriterio, Selopt, Lanzamiento } from './isa.reducer';

export enum IsaActionTypes {
  CambiarTipoCriterio = '[Isa] CambiarTipoCriterio',
  TipoCriterioCambiado = '[Isa] TipoCriterioCambiado',
  CambiarCriterio = '[Isa] CambiarCriterio',
  CriterioCambiado = '[Isa] CriterioCambiado'
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

export type IsaActions = CambiarTipoCriterio | TipoCriterioCambiado | CambiarCriterio | CriterioCambiado;

