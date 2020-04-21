import { Component, OnInit, Inject } from '@angular/core';
import { DependenciasService } from '../../../services/dependencia/dependencias.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DependenciaComponent } from '../dependencia.component';
import { EmpleadosService } from '../../../services/empleado/empleados.service';
import { CargosService } from '../../../services/cargo/cargos.service';

@Component({
  selector: 'app-crear-dependencia',
  templateUrl: './crear-dependencia.component.html',
  styleUrls: ['./crear-dependencia.component.css']
})
export class CrearDependenciaComponent implements OnInit {

  public dependencias: any = {};
  public cargos: any[];
  public empleados: any[];
  public dependencias2: any[];
  selected = 'option2';
  selected2 = 'option2';
  selected3 = 'option2';

  constructor(
    private _serviceCargos: CargosService,
    private _serviceEmpleados: EmpleadosService,
    private _serviceDependencias: DependenciasService,
    private _router: Router,
    public dialogRef: MatDialogRef<DependenciaComponent>,
    @Inject(MAT_DIALOG_DATA)public data: CrearDependenciaComponent
  ) { }

  ngOnInit(): void {
    this.getCargos();
    this.getDependencias2();
    this.getEmpleados();
  }

  agregar() {
    this._serviceDependencias.save(this.dependencias)
    .then(response => {
      location.reload();
      console.log(this.dependencias);
      this._router.navigate(['/dependencia']);
    })
    .catch(error => {
      this._router.navigate(['/dependencia']);
      console.log(error);
    });
  }

  getCargos() {
    this._serviceCargos.getCargos()
    .then(response => {
      this.cargos = response.cargos;
      console.log(this.cargos);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getEmpleados() {
    this._serviceEmpleados.getEmpleados()
    .then(response => {
      this.empleados = response.empleados;
      console.log(this.empleados);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getDependencias2() {
    this._serviceDependencias.getDependencias2()
    .then(response => {
      this.dependencias2 = response.dependencias2;
      console.log(this.dependencias2);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
