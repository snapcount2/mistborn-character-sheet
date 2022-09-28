import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  public async show<T>(component: ComponentType<any>, data?: any, width?: string|'full'): Promise<T> {
    let dialogConfig: MatDialogConfig<any> = {
      width: width || '350px',
      data
    };
    if (width === 'full') {
      dialogConfig = {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100vh',
        width: '100vw',
        panelClass: 'full-screen-modal',
        autoFocus: false,
        data
      }
    }

    const dialogRef = this.dialog.open(component, dialogConfig);
    return await firstValueFrom(dialogRef.afterClosed())
  }

}
