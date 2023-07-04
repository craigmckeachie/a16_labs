import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [ProjectsContainerComponent, ProjectListComponent, ProjectCardComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [ProjectsContainerComponent],
})
export class ProjectsModule {}
