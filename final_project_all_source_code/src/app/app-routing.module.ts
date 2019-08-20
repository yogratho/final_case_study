import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemandManagerComponent } from './demand-manager/demand-manager.component';
import { SuperComponent } from './super/super.component';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
{
  path: 'demand',
  component: DemandManagerComponent
},
{
  path: 'super',
  component:SuperComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
