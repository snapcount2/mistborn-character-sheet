import { ApplicationModeService } from './../application-mode.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, forwardRef, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map, Subscription, take } from 'rxjs';

export const APP_TEXT_AREA_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaComponent),
  multi: true
};


@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [APP_TEXT_AREA_CONTROL_VALUE_ACCESSOR],
})
export class TextAreaComponent  implements ControlValueAccessor, OnDestroy{
  @Input() public label: string = '';
  @ViewChild('autosize') autosize?: CdkTextareaAutosize;
  public innerModel: string = '';
  public disabled = false;

  private onChangeCallback: (newValue: string) => any = () => {};
  private onTouchedCallback: () => any = () => {};

  private sub: Subscription|undefined;

  constructor(
    private _ngZone: NgZone
  ) { }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  triggerResize() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    // Wait for changes to be applied, then trigger textarea resize.
    this.sub = this._ngZone.onStable.pipe(
      take(1)
    ).subscribe(() => this.autosize?.resizeToFitContent(true));
  }

  get value(): any {
    return this.innerModel;
  }

  set value(value: any) {
    if (value !== this.innerModel) {
      this.innerModel = value;
      this.onChangeCallback(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(newValue: any): void {
    this.value = newValue;
  }

}
