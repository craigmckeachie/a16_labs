import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsContainerComponent },
  { path: 'projects/:id', component: ProjectDetailContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
