import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { CreateComponent } from '../create/'
// import { ReadComponent }

const routes: Routes = [{
  //define rules
  //http://localhost:8000
  path:'',
  pathMatch:'full',
  component: AppComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
