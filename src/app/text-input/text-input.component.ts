import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map } from 'rxjs';
import { ApplicationModeService } from '../application-mode.service';



export const APP_TEXT_INNPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [APP_TEXT_INNPUT_CONTROL_VALUE_ACCESSOR],
})
export class TextInputComponent implements ControlValueAccessor{
  @Input() public label: string = '';
  @Input() public type: 'number'|'text' = 'text';

  public innerModel: string = '';
  public disabled = false;


  private onChangeCallback: (newValue: string) => any = () => {};
  private onTouchedCallback: () => any = () => {};

  constructor() { }

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
