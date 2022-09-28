import { Equipment } from './../../character.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-equipent-dialog',
  templateUrl: './edit-equipent-dialog.component.html',
  styleUrls: ['./edit-equipent-dialog.component.scss']
})
export class EditEquipentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditEquipentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public equipment: Equipment
  ) { }

  public save(): void {
    this.dialogRef.close(this.equipment);
  }

}
