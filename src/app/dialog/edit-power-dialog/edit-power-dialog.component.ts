import { Power } from './../../character.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-power-dialog',
  templateUrl: './edit-power-dialog.component.html',
  styleUrls: ['./edit-power-dialog.component.scss']
})
export class EditPowerDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditPowerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public power: Power
  ) { }

  public save(): void {
    this.dialogRef.close(this.power);
  }

}
