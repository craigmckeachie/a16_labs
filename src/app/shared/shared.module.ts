import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateStringPipe } from './truncate-string.pipe';



@NgModule({
  declarations: [
    TruncateStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncateStringPipe
  ]
})
export class SharedModule { }
