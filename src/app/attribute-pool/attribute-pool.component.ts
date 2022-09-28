import { AttributePool } from './../character.service';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const APP_ATTRIBUTE_POOL_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AttributePoolComponent),
  multi: true
};

@Component({
  selector: 'app-attribute-pool',
  templateUrl: './attribute-pool.component.html',
  styleUrls: ['./attribute-pool.component.scss'],
  providers: [APP_ATTRIBUTE_POOL_CONTROL_VALUE_ACCESSOR],

})
export class AttributePoolComponent implements ControlValueAccessor {

  public innerModel: AttributePool = {} as any;
  public disabled = false;


  private onChangeCallback: (newValue: string) => any = () => {};
  private onTouchedCallback: () => any = () => {};


  constructor() { }

  get value(): any {
    return this.innerModel;
  }

  set value(value: any) {
    if (JSON.stringify(value) !== JSON.stringify(this.innerModel) && !!value) {
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


  public updateDice(newVal: number): void {
    const x = JSON.parse(JSON.stringify(this.value));
    x.dice = newVal;
    this.value = x;
  }

  public updateNote(newVal: number): void {
    const x = JSON.parse(JSON.stringify(this.value));
    x.note = newVal;
    this.value = x;
  }

}
