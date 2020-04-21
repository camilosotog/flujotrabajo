import { DependenciasService } from '../../services/dependencia/dependencias.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CrearDependenciaComponent } from './crear-dependencia/crear-dependencia.component';
import { EditarDependenciaComponent } from './editar-dependencia/editar-dependencia.component';
import { TreeCargosService } from '../../services/cargo/tree-cargos.service';
import { TreeEmpleadosService } from '../../services/empleado/tree-empleados.service';
import { EliminarDependenciaComponent } from './eliminar-dependencia/eliminar-dependencia.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './dependencia.component.html',
  styleUrls: ['./dependencia.component.css']
})
export class DependenciaComponent implements OnInit {

  elements: any = [];
  modalRef: MDBModalRef;

  constructor(private _serviceDependencias: DependenciasService,
              private _serviceCargos: TreeCargosService,
              private _serviceEmpleados: TreeEmpleadosService,
              public dialog: MatDialog,
              public modalService: MDBModalService) { }
  public dependencias: any[];
  public cargos: any[];
  public empleados: any[];
  panelOpenState = true;
  name: string;
  tipo: string;
  fileNameDialogRef: MatDialogRef<EditarDependenciaComponent>;


  ngOnInit() {
    this.getDependencias();
    this.getEmpleados();
    this.getCargos();
  }
  openDialog() {
    const dialogRef = this.dialog.open(CrearDependenciaComponent, {width: '550px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(dependencia?) {
    this.fileNameDialogRef = this.dialog.open(EditarDependenciaComponent, {
      width: '550px',
      data: {
        id: dependencia ? dependencia.id : '',
        nombre: dependencia ? dependencia.nombre : '',
        codigo: dependencia ? dependencia.codigo : '',
        fk_dependencia: dependencia ? dependencia.fk_dependencia : '',
        fk_empleado: dependencia ? dependencia.fk_empleado : ''

      }
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

  eliminar(id: number) {
    this._serviceDependencias.delete(id)
    .then(response => {
      location.reload();
      console.log(response.dependencia);
    })
    .catch(error => {
      for (let dep of this.dependencias) {
        if (dep.fk_dependencia == id) {
          console.log(dep.nombre);
          this.tipo = 'la dependencia de ';
          this.name = dep.nombre;
        } else {
          for (let car of this.cargos) {
            if (car.fk_dependencia == id) {
              console.log(car.nombre);
              this.tipo = 'el cargo de ';
              this.name = car.nombre;
            }
          }
        }
      }
      this.dialog.open(EliminarDependenciaComponent,
        {width: '550px', data: {name: this.tipo + this.name}});
      console.log(error);
    });
  }
}
