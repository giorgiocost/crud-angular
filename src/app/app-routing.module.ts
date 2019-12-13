import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { ColdObeservableComponent } from './cold-obeservable/cold-obeservable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';
import { HotObservableSubjectComponent } from './hot-observable-subject/hot-observable-subject.component';

const routes: Routes = [
  { path: '', component: BasicObservableComponent },
  { path: 'cold', component: ColdObeservableComponent },
  { path: 'hot', component: HotObservableComponent },
  { path: 'hot-subject', component: HotObservableSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
