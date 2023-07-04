import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from '../account/shared/securityguard.service';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsContainerComponent,
    canActivate: [SecurityGuard],
  },
  {
    path: 'projects/:id',
    component: ProjectDetailContainerComponent,
    canActivate: [SecurityGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
