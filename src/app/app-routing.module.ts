import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConexionComponent} from "./conexion/conexion.component";
import { LoginComponent} from "./login/login.component";

const routes: Routes = [
 {path: "", component: ConexionComponent},
 {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
