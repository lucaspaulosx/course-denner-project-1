import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
//Cada objeto é uma pagina que vai ser carregada
const routes: Routes = [{
  path: "", component: HomeComponent
}];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    RouterOutlet
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
