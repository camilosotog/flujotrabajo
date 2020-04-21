import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CrearEmpleadoComponent } from '../home/crear-empleado/crear-empleado.component';
import { TreeEmpleadosService } from '../../services/empleado/tree-empleados.service';
import { NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import * as jQuery from 'jquery';

declare var $: any;
@Component({
  selector: 'app-tree-empleado',
  templateUrl: './tree-empleado.component.html',
  styleUrls: ['./tree-empleado.component.css']
})
export class TreeEmpleadoComponent implements OnInit {

  // tslint:disable-next-line:member-ordering
  public empleados: any[];
  public empleado: any = {};

  constructor(private _serviceEmpleados: TreeEmpleadosService, public dialog: MatDialog) {

  }

  panelOpenState = true;

  ngOnInit() {
    this.getEmpleados();

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
    const dialogRef = this.dialog.open(CrearEmpleadoComponent, {width: '550px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
  // tslint:disable-next-line:member-ordering

}
