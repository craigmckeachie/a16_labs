import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import {
  load,
  loadSuccess,
  loadFail,
  save,
  saveSuccess,
  saveFail,
} from './project.actions';

@Injectable()
export class ProjectEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(load),
      switchMap(({ name }) => {
        return this.projectService.listByName(name).pipe(
          map((data) => loadSuccess({ projects: data })),
          catchError((error) => of(loadFail({ error: error })))
        );
      })
    );
  });

  save$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(save),
      mergeMap(({ project }) => {
        return this.projectService.put(project).pipe(
          map(() => saveSuccess({ project })),
          catchError((error) => of(saveFail({ error: error })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
