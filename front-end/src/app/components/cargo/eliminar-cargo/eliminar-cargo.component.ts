import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CargosService } from '../../../services/cargo/cargos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoComponent, DialogData } from '../cargo.component';

@Component({
  selector: 'app-eliminar-cargo',
  templateUrl: './eliminar-cargo.component.html',
  styleUrls: ['./eliminar-cargo.component.css']
})
export class EliminarCargoComponent implements OnInit {

  public cargos: any = {};
  public cargo: any = {};
  form: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _serviceCargos: CargosService,
              private _router: Router,
              public dialogRef: MatDialogRef<CargoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  getDependencia() {
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

  eliminar(id: number) {
    this._serviceCargos.delete(id)
    .then(response => {
      console.log(response.cargo);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
