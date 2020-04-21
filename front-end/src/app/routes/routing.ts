import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CargoComponent } from '../components/cargo/cargo.component';
import { DependenciaComponent } from '../components/dependencia/dependencia.component';
import { TreeEmpleadoComponent } from '../components/tree-empleado/tree-empleado.component';
import { CrearEmpleadoComponent } from '../components/home/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from '../components/home/editar-empleado/editar-empleado.component';
import { CrearCargoComponent } from '../components/cargo/crear-cargo/crear-cargo.component';
import { CrearDependenciaComponent } from '../components/dependencia/crear-dependencia/crear-dependencia.component';
import { EditarDependenciaComponent } from '../components/dependencia/editar-dependencia/editar-dependencia.component';
import { EditarCargoComponent } from '../components/cargo/editar-cargo/editar-cargo.component';
import { TreeDependenciaComponent } from '../components/tree-dependencia/tree-dependencia.component';
import { TreeCargoComponent } from '../components/tree-cargo/tree-cargo.component';
import { EliminarCargoComponent } from '../components/cargo/eliminar-cargo/eliminar-cargo.component';

const app_routes: Routes = [

  //--- RUTAS DE EMPLEADO----
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'new', component: CrearEmpleadoComponent
  },
  {
    path: 'edit/:id', component: EditarEmpleadoComponent
  },
  {
    path: 'tree-empleado', component: TreeEmpleadoComponent
  },

  //----RUTAS DE CARGO----
  {
    path: 'cargo', component: CargoComponent
  },
  {
    path: 'new-cargo', component: CrearCargoComponent
  },
  {
    path: 'edit-car/:id', component: EditarCargoComponent
  },
  {
    path: 'delete-car/:id', component: EliminarCargoComponent
  },
  {
    path: 'tree-cargo', component: TreeCargoComponent
  },

  //---RUTAS DE DEPENDENCIA----
  {
    path: 'dependencia', component: DependenciaComponent
  },
  {
    path: 'new-dependencia', component: CrearDependenciaComponent
  },
  {
    path: 'edit-dep/:id', component: EditarDependenciaComponent
  },
  {
    path: 'tree-dependencia', component: TreeDependenciaComponent
  },

  //---FULL ROUTS----
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

export const AppRouting = RouterModule.forRoot(app_routes);
