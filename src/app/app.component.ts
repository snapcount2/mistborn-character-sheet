import { ApplicationMode, ApplicationModeService } from './application-mode.service';
import { EditTraitDialogComponent } from './dialog/edit-trait-dialog/edit-trait-dialog.component';
import { EditEquipentDialogComponent } from './dialog/edit-equipent-dialog/edit-equipent-dialog.component';
import { EditPowerDialogComponent } from './dialog/edit-power-dialog/edit-power-dialog.component';
import { DialogService } from './dialog/dialog.service';
import { CharacterService, Power, Equipment, Trait } from './character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public character: CharacterService,
    private dialogService: DialogService,
    public applicationMode: ApplicationModeService
  ) {}

  public async addPower(): Promise<void> {
    const newPower = {} as any;
    const toSave = await this.dialogService.show<Power>(EditPowerDialogComponent, newPower)
    if (toSave.title) {
      this.character.powers = [...this.character.powers, toSave];
    }
  }

  public async editPower(power: Power): Promise<void> {
    const powers = [...this.character.powers]
    const index = powers.findIndex(x => JSON.stringify(x) === JSON.stringify(power));
    const toSave = await this.dialogService.show<Power>(EditPowerDialogComponent, power)
    if (toSave.title) {
      powers[index] = toSave;
      this.character.powers = powers;
    }
  }

  public async deletePower(power: Power): Promise<void> {
    this.character.powers = [...this.character.powers.filter(x => JSON.stringify(x) !== JSON.stringify(power))];
  }

  public async addEquipent(): Promise<void> {
    const newEquipent = {} as any;
    const toSave = await this.dialogService.show<Equipment>(EditEquipentDialogComponent, newEquipent)
    if (toSave.item) {
      this.character.equipment = [...this.character.equipment, toSave];
    }
  }

  public async editEquipment(equipment: Equipment): Promise<void> {
    const currentEquipent = [...this.character.equipment]
    const index = currentEquipent.findIndex(x => JSON.stringify(x) === JSON.stringify(equipment));
    const toSave = await this.dialogService.show<Equipment>(EditEquipentDialogComponent, equipment)
    if (toSave.item) {
      currentEquipent[index] = toSave;
      this.character.equipment = currentEquipent;
    }
  }

  public async deleteEquipment(equipment: Equipment): Promise<void> {
    this.character.equipment = [...this.character.equipment.filter(x => JSON.stringify(x) !== JSON.stringify(equipment))];
  }


  public async addTrait(): Promise<void> {
    const newTrait = {} as any;
    const toSave = await this.dialogService.show<Trait>(EditTraitDialogComponent, newTrait)
    if (toSave.description) {
      this.character.traitsAndBurdens = [...this.character.traitsAndBurdens, toSave];
    }
  }

  public async editTrait(trait: Trait): Promise<void> {
    const traits = [...this.character.traitsAndBurdens]
    const index = traits.findIndex(x => JSON.stringify(x) === JSON.stringify(trait));
    const toSave = await this.dialogService.show<Trait>(EditTraitDialogComponent, trait)
    if (toSave.description) {
      traits[index] = toSave;
      this.character.traitsAndBurdens = traits;
    }
  }

  public async deleteTrait(trait: Trait): Promise<void> {
    this.character.traitsAndBurdens = [...this.character.traitsAndBurdens.filter(x => JSON.stringify(x) !== JSON.stringify(trait))];
  }



}
