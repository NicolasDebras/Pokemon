import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageFightComponent } from './page-fight/page-fight.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'fight/:id_1/:id_2', component:PageFightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
