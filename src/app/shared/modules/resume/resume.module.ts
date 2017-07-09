import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    ResumeComponent
  ],
  declarations: [ResumeComponent]
})
export class ResumeModule { }
