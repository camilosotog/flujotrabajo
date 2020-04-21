import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private url: string;
  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getEmpleados() {
    return this._http.get(this.url + 'empleados')
    .toPromise().then(res => res.json());
  }

  getEmpleados2() {
    return this._http.get(this.url + 'empleados2')
    .toPromise().then(res => res.json());
  }

  getEmpleadosById(id: number) {
    return this._http.get(this.url + 'empleado/' + id)
    .toPromise().then(res => res.json());
  }

  save(empleado: any) {
    return this._http.post(this.url + 'empleado', empleado)
    .toPromise().then(res => res.json());
  }

  update(id: number, empleados: any) {
    return this._http.put(this.url + 'empleado/' + id, empleados)
    .toPromise().then(res => res.json());
  }

  delete(id: number) {
    return this._http.delete(this.url + 'empleado/' + id)
    .toPromise().then(res => res.json());
  }
}
