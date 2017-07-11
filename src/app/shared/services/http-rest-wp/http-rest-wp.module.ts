import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpRestWpService} from "./http-rest-wp.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule
  ],
  declarations: [HttpRestWpService]
})
export class HttpRestWpModule { }
