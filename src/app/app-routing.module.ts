import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConexionComponent} from "./conexion/conexion.component";
import { LoginComponent} from "./login/login.component";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UbicacionesComponent } from './ubicaciones/ubicaciones.component';

const routes: Routes = [
 {path: "", component: ConexionComponent},
 {path: "back", component: ConexionComponent},
 {path: "login", component: LoginComponent},
 {path: "usu", component: UsuariosComponent},
 {path: "ubi", component: UbicacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
