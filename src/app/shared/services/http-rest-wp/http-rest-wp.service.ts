import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpRestWpService {

  constructor(private http: Http) {}

  getHeader(): Observable<Response> {
    return this.http.get('http://blog.linktogo.fr/wp-json/wp/v2/posts/19')
      .map(res => res as Response);
  }


}
