import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  projectReducer,
  ProjectState,
} from '../projects/shared/state/project.reducer';

export interface State {
  projectState: ProjectState;
}

export const reducers: ActionReducerMap<State> = {
  projectState: projectReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
