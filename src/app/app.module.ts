import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { ColdObeservableComponent } from './cold-obeservable/cold-obeservable.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicObservableComponent,
    ColdObeservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
