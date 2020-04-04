import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface AppState {
  ruki: any;
}

export const reducers: ActionReducerMap<any> = {
  rukiReducer: (state: any = { ruki: 'Ruki Ruki Rule' }, action: Action) => {
    return state;
  },
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
