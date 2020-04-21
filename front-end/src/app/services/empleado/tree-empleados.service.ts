import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeEmpleadosService {
  private url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getEmpleados() {
    return this._http.get(this.url + 'empleados')
    .toPromise().then(res => res.json());
  }
  getFotografiasById(id: number) {
    return this._http.get(this.url + 'empleados/' + id)
    .toPromise().then(res => res.json());
  }
}
