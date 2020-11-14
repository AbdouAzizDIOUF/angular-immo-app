import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienComponent} from "./bien/bien.component";

const routes: Routes = [
  {path:"biens", component:BienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
