import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributePoolComponent } from './attribute-pool.component';

describe('AttributePoolComponent', () => {
  let component: AttributePoolComponent;
  let fixture: ComponentFixture<AttributePoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributePoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
