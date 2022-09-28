import { Trait } from './../../character.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-trait-dialog',
  templateUrl: './edit-trait-dialog.component.html',
  styleUrls: ['./edit-trait-dialog.component.scss']
})
export class EditTraitDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTraitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public trait: Trait
  ) { }

  public save(): void {
    this.dialogRef.close(this.trait);
  }


}
