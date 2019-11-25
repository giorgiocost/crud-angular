import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.css']
})
export class BasicObservableComponent implements OnInit {
  subscription1: Subscription;
  constructor() { }

  ngOnInit() {

    // exemplo 1
    const myObservale = new Observable(
      (observer: Observer < number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.error('6');
        observer.complete();
      }
    );

    myObservale.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('Error: valor do tipo string', error);
      },
      () => {
        console.log('completado');
      }
    );

    // exemplo 2
    // const timeCount = interval(500);

    // timeCount.subscribe(
    //   data => { console.log(data); });

    // console.log('teste assíncrona');

    const myIntervalObservable = new Observable(
      (observe: Observer <any >) => {
        let i = 0;
        const id = setInterval(() => {
          i++;
          console.log('dentro do Observable', i);
          if (i === 10) {
            observe.complete();
          } else if ( i % 2 === 0) {
            observe.next(i);
          }
        }, 1000);
        return () => {
          clearInterval(id);
        };
      }
    );

    this.subscription1 = myIntervalObservable.subscribe(data => console.log(data));

    // setTimeout(() => {
    //   console.log('unsubscribe()');
    //   this.subscription1.unsubscribe();
    // }, 4000);

  }

}
