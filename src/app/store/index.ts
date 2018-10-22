import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromIsa from '../store/isa.reducer';
import * as fromIsaM from '../store/isa.models';
import { environment } from '../../environments/environment';


export interface State {
  isa: fromIsaM.State;
}

export const reducers: ActionReducerMap<State> = {
  isa: fromIsa.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
