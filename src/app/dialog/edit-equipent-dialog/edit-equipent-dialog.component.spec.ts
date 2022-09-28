import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipentDialogComponent } from './edit-equipent-dialog.component';

describe('EditEquipentDialogComponent', () => {
  let component: EditEquipentDialogComponent;
  let fixture: ComponentFixture<EditEquipentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
