import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadosService } from '../../services/empleado/empleados.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { TreeCargosService } from '../../services/cargo/tree-cargos.service';
import { DependenciasService } from '../../services/dependencia/dependencias.service';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elements: any = [];
  constructor(private _serviceDependencias: DependenciasService,
              private _serviceCargos: TreeCargosService,
              private _serviceEmpleados: EmpleadosService, public dialog: MatDialog) { }
  public empleados: any[];
  public dependencias: any[];
  public cargos: any[];
  name: string;
  tipo: string;
  panelOpenState = false;
  public emp: any[];
  fileNameDialogRef: MatDialogRef<EditarEmpleadoComponent>;

  ngOnInit() {
    this.getEmpleados();
    this.getDependencias();
    this.getCargos();

  }
  openDialog() {
    const dialogRef = this.dialog.open(CrearEmpleadoComponent, {width: '550px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(empleado?) {
    this.fileNameDialogRef = this.dialog.open(EditarEmpleadoComponent, {
      width: '550px',
      data: {
        id: empleado ? empleado.id : '',
        nombre: empleado ? empleado.nombre : '',
        num_identificacion: empleado ? empleado.num_identificacion : '',
        email: empleado ? empleado.email : ''
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
    })
  }

  eliminar(id: number) {
    this._serviceEmpleados.delete(id)
    .then(response => {
      location.reload();
      console.log(response.empleado);
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
      this.dialog.open(EliminarEmpleadoComponent,
        {width: '550px', data: {name: this.tipo + this.name}});
      console.log(error);
    });
  }

}
