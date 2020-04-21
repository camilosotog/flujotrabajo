import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmpleadosService } from '../../../services/empleado/empleados.service';
import { CargosService } from '../../../services/cargo/cargos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DependenciasService } from '../../../services/dependencia/dependencias.service';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.css']
})
export class EditarCargoComponent implements OnInit {

  public cargos: any = {};
  public cargo: any = {};
  public cargos2: any[];
  public empleados: any[];
  public dependencias: any[];
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
              private dialogRef: MatDialogRef<EditarCargoComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: this.data.id ? this.data.id : '',
      nombre: this.data.nombre ? this.data.nombre : '',
      codigo: this.data.codigo ? this.data.codigo : '',
      descripcion: this.data.descripcion ? this.data.descripcion : '',
      extension: this.data.extension ? this.data.extension : '',
      fk_cargo: this.data.fk_cargo ? this.data.fk_cargo : '',
      fk_dependencia: this.data.fk_dependencia ? this.data.fk_dependencia : '',
      fk_empleado: this.data.fk_empleado ? this.data.fk_empleado : ''

    });
    // this.getEmpleado();
    this.getCargos2();
    this.getDependencias();
    this.getEmpleados();
  }

  getEmpleado() {
    console.log(this.cargo.id);
    this._route.params.forEach((params: Params) => {
      this._serviceCargos.getCargosById(params['id'])
      .then(response => {
        this.cargo = response.cargo;
      })
      .catch(error => {
        console.log(error);
      });
    });

  }

  editar(form) {
    // tslint:disable-next-line:no-unused-expression
    this.dialogRef.close(`${
      // tslint:disable-next-line:no-unused-expression
      form.value.id,
      form.value.nombre,
      form.value.codigo,
      form.value.descripcion,
      form.value.extension,
      form.value.fk_cargo,
      form.value.fk_dependencia,
      form.value.fk_empleado
    }`);

    this._router.navigate(['/cargo']);
    this.cargo = form.value;
    this._serviceCargos.update(form.value.id, this.cargo)
    .then(response => {
      location.reload();
      console.log(response.cargo);
    })
    .catch(error => {
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
}
