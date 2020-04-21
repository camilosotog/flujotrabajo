import { Component, OnInit, ViewChild } from '@angular/core';
import { CargosService } from '../../services/cargo/cargos.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CrearCargoComponent } from './crear-cargo/crear-cargo.component';
import { EditarCargoComponent } from './editar-cargo/editar-cargo.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeEmpleadosService } from '../../services/empleado/tree-empleados.service';
import { TreeDependenciasService } from '../../services/dependencia/tree-dependencias.service';
import { EliminarCargoComponent } from './eliminar-cargo/eliminar-cargo.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  elements: any = [];
  constructor(private _serviceCargos: CargosService,
              private _serviceEmpleados: TreeEmpleadosService,
              private _serviceDependencias: TreeDependenciasService,
              public dialog: MatDialog,
              private _route: ActivatedRoute,
              private _router: Router,) { }
  public cargos: any[];
  public cargo: any = {};
  public empleados: any[];
  public dependencias: any[];
  panelOpenState = false;
  name: string;
  tipo: string;
  fileNameDialogRef: MatDialogRef<EditarCargoComponent>;

  ngOnInit() {
    this.getCargos();
    this.getEmpleados();
    this.getDependencias();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CrearCargoComponent, {width: '550px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(cargo?) {
    this.fileNameDialogRef = this.dialog.open(EditarCargoComponent, {
      width: '550px',
      data: {
        id: cargo ? cargo.id : '',
        nombre: cargo ? cargo.nombre : '',
        codigo: cargo ? cargo.codigo : '',
        descripcion: cargo ? cargo.descripcion : '',
        extension: cargo ? cargo.extension : '',
        fk_cargo: cargo ? cargo.fk_cargo : '',
        fk_dependencia: cargo ? cargo.fk_dependencia : '',
        fk_empleado: cargo ? cargo.fk_empleado : ''

      }
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

  eliminar(id: number) {
    this._serviceCargos.delete(id)
    .then(response => {
      console.log(response.cargo);
      location.reload();
    })
    .catch(error => {
      for (let car of this.cargos) {
        if (car.fk_cargo == id) {
          console.log(car.nombre);
          this.tipo = 'el/la ';
          this.name = car.nombre;
        }
      }
      this.dialog.open(EliminarCargoComponent,
        {width: '550px', data: {name: this.tipo + this.name}});
      console.log(error);
    });
  }
}
