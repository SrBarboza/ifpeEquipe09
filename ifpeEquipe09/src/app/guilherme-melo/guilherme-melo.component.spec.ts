import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuilhermeMeloComponent } from './guilherme-melo.component';

describe('GuilhermeMeloComponent', () => {
  let component: GuilhermeMeloComponent;
  let fixture: ComponentFixture<GuilhermeMeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuilhermeMeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuilhermeMeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
