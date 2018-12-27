import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocheOMnieComponent } from './troche-o-mnie.component';

describe('TrocheOMnieComponent', () => {
  let component: TrocheOMnieComponent;
  let fixture: ComponentFixture<TrocheOMnieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocheOMnieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocheOMnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
