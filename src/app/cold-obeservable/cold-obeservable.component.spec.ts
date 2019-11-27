import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObeservableComponent } from './cold-obeservable.component';

describe('ColdObeservableComponent', () => {
  let component: ColdObeservableComponent;
  let fixture: ComponentFixture<ColdObeservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdObeservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdObeservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
