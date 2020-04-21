import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {
  private url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getDependencias() {
    return this._http.get(this.url + 'dependencias')
    .toPromise().then(res => res.json());
  }

  getDependencias2() {
    return this._http.get(this.url + 'dependencias2')
    .toPromise().then(res => res.json());
  }

  save(dependencia: any) {
    return this._http.post(this.url + 'dependencia', dependencia)
    .toPromise().then(res => res.json());
  }

  getDependenciasById(id: number) {
    return this._http.get(this.url + 'dependencia/' + id)
    .toPromise().then(res => res.json());
  }

  update(id: number, dependencias: any) {
    return this._http.put(this.url + 'dependencia/' + id, dependencias)
    .toPromise().then(res => res.json());
  }

  delete(id: number) {
    return this._http.delete(this.url + 'dependencia/' + id)
    .toPromise().then(res => res.json());
  }
}
