import { createAction, props } from '@ngrx/store';
import { Project } from '../project.model';

export const load = createAction('[Project] Load', props<{ name: string }>());
export const loadSuccess = createAction(
  '[Project] Load Success',
  props<{ projects: Project[] }>()
);
export const loadFail = createAction(
  '[Project] Load Fail',
  props<{ error: any }>()
);

export const save = createAction(
  '[Project] Save',
  props<{ project: Project }>()
);
export const saveSuccess = createAction(
  '[Project] Save Success',
  props<{ project: Project }>()
);
export const saveFail = createAction(
  '[Project] Save Fail',
  props<{ error: any }>()
);
