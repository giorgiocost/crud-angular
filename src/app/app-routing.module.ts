import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { ColdObeservableComponent } from './cold-obeservable/cold-obeservable.component';

const routes: Routes = [
  { path: '', component: BasicObservableComponent },
  { path: 'cold', component: ColdObeservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
