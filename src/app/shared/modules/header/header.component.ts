import { Component, OnInit } from '@angular/core';
import {HttpRestWpService} from "../../services/http-rest-wp/http-rest-wp.service";


@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public header: string;

  constructor(private httpRest: HttpRestWpService) { }

  ngOnInit() {
   /* this.httpRest.getHeader()
        .subscribe(
          (response) => {
            const res  = response.json();
            if (res.slug === 'header') {
              console.log('res : ' , res.content.rendered);
              this.header = res.content.rendered;
              this.header.replace('"<header','<header').replace('header>"','header>');
            }});*/
  }

}
