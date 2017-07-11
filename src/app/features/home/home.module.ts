import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HeaderModule} from "../../shared/modules/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
