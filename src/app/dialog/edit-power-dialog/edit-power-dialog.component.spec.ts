import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPowerDialogComponent } from './edit-power-dialog.component';

describe('EditPowerDialogComponent', () => {
  let component: EditPowerDialogComponent;
  let fixture: ComponentFixture<EditPowerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPowerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPowerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
