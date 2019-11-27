import { Component, OnInit } from '@angular/core';
import { Observer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-obeservable',
  templateUrl: './cold-obeservable.component.html',
  styleUrls: ['./cold-obeservable.component.css']
})
export class ColdObeservableComponent implements OnInit {
  subscription1: Subscription;
  subscription2: Subscription;
  constructor() { }

  ngOnInit() {
    // consome mesma fonte de dados.
    const coldObservable = new Observable(
      (observer: Observer < number>) => {
        let numero = 0;
        setInterval(() => {
          numero++;
          observer.next(numero);
        }, 1000);
      }
    );

    this.subscription1 = coldObservable.subscribe(
      (data) => console.log('subscription1', data),
    );

    this.subscription2 = coldObservable.subscribe(
      (data) => console.log('subscription2', data),
    );
  }

}
