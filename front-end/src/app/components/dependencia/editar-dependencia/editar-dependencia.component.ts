import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DependenciasService } from '../../../services/dependencia/dependencias.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargosService } from '../../../services/cargo/cargos.service';
import { EmpleadosService } from '../../../services/empleado/empleados.service';

@Component({
  selector: 'app-editar-dependencia',
  templateUrl: './editar-dependencia.component.html',
  styleUrls: ['./editar-dependencia.component.css']
})
export class EditarDependenciaComponent implements OnInit {

  public dependencias: any = {};
  public dependencia: any = {};
  public cargos: any[];
  public empleados: any[];
  public dependencias2: any[];
  selected = 'option2';
  selected2 = 'option2';
  selected3 = 'option2';
  form: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _serviceCargos: CargosService,
              private _serviceEmpleados: EmpleadosService,
              private _serviceDependencias: DependenciasService,
              private _router: Router,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditarDependenciaComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: this.data.id ? this.data.id : '',
      nombre: this.data.nombre ? this.data.nombre : '',
      codigo: this.data.codigo ? this.data.codigo : '',
      fk_dependencia: this.data.fk_dependencia ? this.data.fk_dependencia : '',
      fk_empleado: this.data.fk_empleado ? this.data.fk_empleado : ''

    });
    this.getCargos();
    this.getDependencias2();
    this.getEmpleados();

    // this.getDependencia();
  }

  getDependencia() {
    this._route.params.forEach((params: Params) => {
      this._serviceDependencias.getDependenciasById(params['id'])
      .then(response => {
        this.dependencia = response.dependencia;
      })
      .catch(error => {
        console.log(error);
      });
    });

  }

  editar(form) {
    this.dialogRef.close(`${
      // tslint:disable-next-line:no-unused-expression
      form.value.id,
      form.value.nombre,
      form.value.codigo,
      form.value.fk_dependencia,
      form.value.fk_empleado
    }`);

    this._router.navigate(['/dependencia']);
    this.dependencia = form.value;
    this._serviceDependencias.update(form.value.id, this.dependencia)
    .then(response => {
      location.reload();
      console.log(response.dependencia);
    })
    .catch(error => {
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
