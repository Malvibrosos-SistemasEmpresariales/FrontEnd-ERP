import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioListSingleComponent } from './inventario-list-single.component';

describe('InventarioListSingleComponent', () => {
  let component: InventarioListSingleComponent;
  let fixture: ComponentFixture<InventarioListSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioListSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioListSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
