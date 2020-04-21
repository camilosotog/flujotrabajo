import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TreeDependenciasService {

  private url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getDependencias() {
    return this._http.get(this.url + 'dependencias')
    .toPromise().then(res => res.json());
  }
}
