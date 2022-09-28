import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraitDialogComponent } from './edit-trait-dialog.component';

describe('EditTraitDialogComponent', () => {
  let component: EditTraitDialogComponent;
  let fixture: ComponentFixture<EditTraitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTraitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTraitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
