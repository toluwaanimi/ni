import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoeventComponent } from './noevent.component';

describe('NoeventComponent', () => {
  let component: NoeventComponent;
  let fixture: ComponentFixture<NoeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
