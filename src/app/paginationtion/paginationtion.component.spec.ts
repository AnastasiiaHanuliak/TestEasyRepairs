import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationtionComponent } from './paginationtion.component';

describe('PaginationtionComponent', () => {
  let component: PaginationtionComponent;
  let fixture: ComponentFixture<PaginationtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
