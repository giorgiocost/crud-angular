import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { ColdObeservableComponent } from './cold-obeservable/cold-obeservable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';
import { HotObservableSubjectComponent } from './hot-observable-subject/hot-observable-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicObservableComponent,
    ColdObeservableComponent,
    HotObservableComponent,
    HotObservableSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
