import { Component, OnInit } from '@angular/core';
import { Observer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hot-obeservable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.css']
})
export class HotObservableComponent implements OnInit {
  subscription1: Subscription;
  subscription2: Subscription;
  constructor() { }

  ngOnInit() {
    let numero = 0;
    const coldObservable = new Observable(
      (observer: Observer < number>) => {
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
