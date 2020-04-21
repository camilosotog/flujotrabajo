import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class TreeCargosService {

  private url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getCargos() {
    return this._http.get(this.url + 'cargos')
    .toPromise().then(res => res.json());
  }
  getCargosTodo() {
    return this._http.get(this.url + 'cargos')
    .toPromise().then(res => res.json());
  }
}
