import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import {AppRouting} from './routes/routing';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { CrearEmpleadoComponent } from './components/home/crear-empleado/crear-empleado.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { DependenciaComponent } from './components/dependencia/dependencia.component';
import { TreeEmpleadoComponent } from './components/tree-empleado/tree-empleado.component';
import { EditarEmpleadoComponent } from './components/home/editar-empleado/editar-empleado.component';
import { CrearCargoComponent } from './components/cargo/crear-cargo/crear-cargo.component';
import { CrearDependenciaComponent } from './components/dependencia/crear-dependencia/crear-dependencia.component';
import { EditarDependenciaComponent } from './components/dependencia/editar-dependencia/editar-dependencia.component';
import { EditarCargoComponent } from './components/cargo/editar-cargo/editar-cargo.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TreeDependenciaComponent } from './components/tree-dependencia/tree-dependencia.component';
import { TreeCargoComponent } from './components/tree-cargo/tree-cargo.component';
import { EliminarCargoComponent } from './components/cargo/eliminar-cargo/eliminar-cargo.component';
import { EliminarDependenciaComponent } from './components/dependencia/eliminar-dependencia/eliminar-dependencia.component';
import { EliminarEmpleadoComponent } from './components/home/eliminar-empleado/eliminar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearEmpleadoComponent,
    CargoComponent,
    DependenciaComponent,
    TreeEmpleadoComponent,
    EditarEmpleadoComponent,
    CrearCargoComponent,
    CrearDependenciaComponent,
    EditarDependenciaComponent,
    EditarCargoComponent,
    TreeDependenciaComponent,
    TreeCargoComponent,
    EliminarCargoComponent,
    EliminarDependenciaComponent,
    EliminarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    AppRouting,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent, TreeCargoComponent, TreeEmpleadoComponent, TreeDependenciaComponent]
})
export class AppModule { }
