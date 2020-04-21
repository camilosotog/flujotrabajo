import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmpleadosService } from '../../../services/empleado/empleados.service';
import { HomeComponent } from '../home.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  public empleados: any = {};
  public empleado: any = {};
  form: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _serviceEmpleados: EmpleadosService,
              private _router: Router,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditarEmpleadoComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: this.data.id ? this.data.id : '',
      nombre: this.data.nombre ? this.data.nombre : '',
      num_identificacion: this.data.num_identificacion ? this.data.num_identificacion : '',
      email: this.data.email ? this.data.email : '',
      fk_cargo: this.data.fk_cargo ? this.data.fk_cargo : ''
    });
    //this.getEmpleado();
  }
  submit(form) {
    this.dialogRef.close(`${form.value.filename}`);
  }
  getEmpleado() {
    this._route.params.forEach((params: Params) => {
      this._serviceEmpleados.getEmpleadosById(params['id'])
      .then(response => {
        this.empleado = response.empleado;
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
      form.value.num_identificacion,
      form.value.email,
      form.value.fk_cargo
    }`);

    this._router.navigate(['/home']);
    this.empleado = form.value;
    this._serviceEmpleados.update(form.value.id, this.empleado)
    .then(response => {
      location.reload();
      console.log(response.empleado);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
