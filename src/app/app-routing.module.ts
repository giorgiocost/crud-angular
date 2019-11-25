import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';

const routes: Routes = [
  { path: '', component: BasicObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
