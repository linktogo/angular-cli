import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyComponent } from './study.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    StudyComponent
  ],
  declarations: [StudyComponent]
})
export class StudyModule { }
