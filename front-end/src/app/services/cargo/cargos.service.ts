import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargosService {
  private url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getCargos() {
    return this._http.get(this.url + 'cargos')
    .toPromise().then(res => res.json());
  }
  getCargos2() {
    return this._http.get(this.url + 'cargos2')
    .toPromise().then(res => res.json());
  }
  save(cargo: any) {
    return this._http.post(this.url + 'cargo', cargo)
    .toPromise().then(res => res.json());
  }

  getDependenciasById(id: number) {
    return this._http.get(this.url + 'dependencia/' + id)
    .toPromise().then(res => res.json());
  }

  getCargosById(id: number) {
    return this._http.get(this.url + 'cargo/' + id)
    .toPromise().then(res => res.json());
  }

  update(id: number, cargos: any) {
    return this._http.put(this.url + 'cargo/' + id, cargos)
    .toPromise().then(res => res.json());
  }

  delete(id: number) {
    return this._http.delete(this.url + 'cargo/' + id)
    .toPromise().then(res => res.json());
  }
}
