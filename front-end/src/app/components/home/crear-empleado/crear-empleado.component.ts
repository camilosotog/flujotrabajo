import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmpleadosService } from '../../../services/empleado/empleados.service';
import { HomeComponent } from '../home.component';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  public empleados: any = {};
  public empleados2: any[];
  form: Promise<void>;
  Form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  // tslint:disable-next-line:variable-name
  num_identificacion = new FormControl('', [Validators.minLength(7), Validators.maxLength(10)]);


  constructor(private _serviceEmpleados: EmpleadosService,
              private _router: Router,
              public dialogRef: MatDialogRef<HomeComponent>,
              public fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA)public data: CrearEmpleadoComponent) {}

  ngOnInit(): void  {
    this.getEmpleados2();
  }

  agregar() {
    this._serviceEmpleados.save(this.empleados)
    .then(response => {
      console.log(this.empleados);
      location.reload();
    })
    .catch(error => {
      this._router.navigate(['/home']);
      console.log(error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getEmpleados2() {
    this._serviceEmpleados.getEmpleados2()
    .then(response => {
      this.empleados2 = response.empleados2;
      console.log(this.empleados2);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar una dirección de correo electronico';
    }

    return this.email.hasError('email') ? 'el correo no es valido' : '';
  }

  getErrorMessageDoc() {
    if (this.num_identificacion.hasError('minLength')) {
      return 'El documento no es valido';
    } else if (this.num_identificacion.hasError('maxLength')) {
      return 'El documento no es valido';
    }
  }
}
