import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpRestWpService} from "../../services/http-rest-wp/http-rest-wp.service";
import {HeaderComponent} from "./header.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent
  ],
  providers: [
    HttpRestWpService
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule {
}
