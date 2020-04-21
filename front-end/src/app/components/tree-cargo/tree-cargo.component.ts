import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditarCargoComponent } from '../cargo/editar-cargo/editar-cargo.component';
import { TreeEmpleadosService } from '../../services/empleado/tree-empleados.service';
import { NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { TreeDependenciasService } from '../../services/dependencia/tree-dependencias.service';
import { TreeCargosService } from 'src/app/services/cargo/tree-cargos.service';
import { CrearCargoComponent } from '../cargo/crear-cargo/crear-cargo.component';

declare var $: any;
@Component({
  selector: 'app-tree-cargo',
  templateUrl: './tree-cargo.component.html',
  styleUrls: ['./tree-cargo.component.css']
})
export class TreeCargoComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<EditarCargoComponent>;

  constructor(private _serviceCargos: TreeCargosService,
              private _serviceEmpleados: TreeEmpleadosService,
              private _serviceDependencias: TreeDependenciasService,
              public dialog: MatDialog) {
   }

  public cargos: any[];
  public cargo: any = {};
  public empleados: any[];
  public dependencias: any[];

  panelOpenState = true;

  ngOnInit(){
    this.getCargos();
    this.getEmpleados();
    this.getDependencias();

    $(function () {
      // 6 create an instance when the DOM is ready
      $('#jstree').jstree();
      // 7 bind to events triggered on the tree
      $('#jstree').on("changed.jstree", function (e, data) {
        console.log(data.selected);
      });
      // 8 interact with the tree - either way is OK
      $('button').on('click', function () {
        $('#jstree').jstree(true).select_node('child_node_1');
        $('#jstree').jstree('select_node', 'child_node_1');
        $.jstree.reference('#jstree').select_node('child_node_1');
      });
      $('#jstree').jstree({
        'core': {
            'themes': {
                'name': 'proton',
                'responsive': true
            }
        },
        'plugins': ["wholerow"],
    });

      $('#jstree').on('open_node.jstree', function(e, data) {
        var icon = $('#' + data.node.id).find('i.jstree-icon.jstree-themeicon').first();
        icon.removeClass('fa-folder').addClass('fa-folder-open');
    });

    // bind customize icon change function in jsTree close_node event.
      $('#jstree').on('close_node.jstree', function(e, data) {
        var icon = $('#' + data.node.id).find('i.jstree-icon.jstree-themeicon').first();
        icon.removeClass('fa-folder-open').addClass('fa-folder');
    });
    });

  }

  openDialog() {
    const dialogRef = this.dialog.open(CrearCargoComponent, {width: '550px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

  getDependencias() {
    this._serviceDependencias.getDependencias()
    .then(response => {
      this.dependencias = response.dependencias;
      console.log(this.dependencias);
    })
    .catch(error => {
      console.log(error);
    })
  }

}
