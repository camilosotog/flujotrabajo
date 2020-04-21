import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CargosService } from '../../../services/cargo/cargos.service';
import { EmpleadosService } from '../../../services/empleado/empleados.service';
import { DependenciasService } from '../../../services/dependencia/dependencias.service';

interface Descripcion {
  value: string;
}

@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css']
})
export class CrearCargoComponent implements OnInit {

  public cargos: any = {};
  public cargos2: any[];
  public empleados: any[];
  public dependencias: any[];
  selected = 'option2';
  selected2 = 'option2';
  selected3 = 'option2';
  desc: Descripcion[] = [
    {value: 'Administrativo'},
    {value: 'Jefe de area'}
  ];

  constructor(
    private _serviceCargos: CargosService,
    private _serviceEmpleados: EmpleadosService,
    private _serviceDependencias: DependenciasService,
    private _router: Router,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA)public data: CrearCargoComponent) { }

  ngOnInit(): void {
    this.getCargos2();
    this.getDependencias();
    this.getEmpleados();
  }

  agregar() {
    this._serviceCargos.save(this.cargos)
    .then(response => {
      location.reload();
      console.log(this.cargos);
    })
    .catch(error => {
      this._router.navigate(['/cargo']);
      console.log(error);
    });
  }

  getCargos2() {
    this._serviceCargos.getCargos2()
    .then(response => {
      this.cargos2 = response.cargos2;
      console.log(this.cargos2);
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

  getDependencias() {
    this._serviceDependencias.getDependencias()
    .then(response => {
      this.dependencias = response.dependencias;
      console.log(this.dependencias);
    })
    .catch(error => {
      console.log(error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
