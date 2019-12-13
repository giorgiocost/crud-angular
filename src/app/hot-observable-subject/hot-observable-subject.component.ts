import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-hot-observable-subject',
  templateUrl: './hot-observable-subject.component.html',
  styleUrls: ['./hot-observable-subject.component.css']
})
export class HotObservableSubjectComponent implements OnInit {

  myObservable: Observable< number>;

  constructor() { }

  ngOnInit() {
    this.myObservable = new Observable(
      (observe: Observer< number>) => {
        let qtd = 0;
        console.log('%c Obervable Created', 'background: yellow; color: red');
        setInterval(() => {
          qtd++;
          (qtd === 100 ) ? observe.complete() : observe.next(qtd);
        }, 1000);
      }
    );
    this.usingSubject();
  }

  usingSubject() {
      const subject = new Subject< number>();
      this.myObservable.subscribe(subject);
      
      setTimeout(() => {
        console.log('%c subject 1 Created', 'background: yellow; color: blue');
        subject.subscribe((_n) => {
          console.log('_n1', _n);
        });
      }, 1000);

      setTimeout(() => {
        subject.subscribe((_n) => {
          console.log('%c subject 2 Created', 'background: black; color: white; font-size:'+ _n+ 'px');
        });
      }, 8000);
  }

}
