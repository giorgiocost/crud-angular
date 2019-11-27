import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { ColdObeservableComponent } from './cold-obeservable/cold-obeservable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';

const routes: Routes = [
  { path: '', component: BasicObservableComponent },
  { path: 'cold', component: ColdObeservableComponent },
  { path: 'hot', component: HotObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
