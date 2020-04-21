import { Component, OnInit, Inject } from '@angular/core';
import { DependenciasService } from '../../../services/dependencia/dependencias.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DependenciaComponent, DialogData } from '../dependencia.component';

@Component({
  selector: 'app-eliminar-dependencia',
  templateUrl: './eliminar-dependencia.component.html',
  styleUrls: ['./eliminar-dependencia.component.scss']
})
export class EliminarDependenciaComponent implements OnInit {

  public dependencias2: any[];

  constructor(private _serviceDependencias: DependenciasService,
              public dialogRef: MatDialogRef<DependenciaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
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
