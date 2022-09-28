import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private cache: {[prop: string]: any} = {}

  constructor(private window: Window) { }

  public get name(): string {
    return this.window.localStorage.getItem('character_name') ?? '';
  }

  public set name(name: string) {
    this.window.localStorage.setItem('character_name', name);
  }

  public get concept(): string {
    return this.window.localStorage.getItem('concept') ?? '';
  }

  public set concept(concept: string) {
    this.window.localStorage.setItem('concept', concept);
  }

  public get crewName(): string {
    return this.window.localStorage.getItem('crew_name') ?? '';
  }

  public set crewName(crewName: string) {
    this.window.localStorage.setItem('crew_name', crewName);
  }

  public get cause(): string {
    return this.window.localStorage.getItem('cause') ?? '';
  }

  public set cause(cause: string) {
    this.window.localStorage.setItem('cause', cause);
  }

  public get target(): string {
    return this.window.localStorage.getItem('target') ?? '';
  }

  public set target(target: string) {
    this.window.localStorage.setItem('target', target);
  }

  public get method(): string {
    return this.window.localStorage.getItem('method') ?? '';
  }

  public set method(method: string) {
    this.window.localStorage.setItem('method', method);
  }

  public get race(): string {
    return this.window.localStorage.getItem('race') ?? '';
  }

  public set race(race: string) {
    this.window.localStorage.setItem('race', race);
  }

  public get gender(): string {
    return this.window.localStorage.getItem('gender') ?? '';
  }

  public set gender(gender: string) {
    this.window.localStorage.setItem('gender', gender);
  }

  public get age(): number|undefined {
    const age = this.window.localStorage.getItem('age')
    return age ? parseInt(age) : undefined;
  }

  public set age(age: number|undefined) {
    this.window.localStorage.setItem('age', `${age}` ?? '');
  }

  public get height(): number|undefined {
    const height = this.window.localStorage.getItem('height')
    return height ? parseInt(height) : undefined;
  }

  public set height(height: number|undefined) {
    this.window.localStorage.setItem('height', `${height}` ?? '');
  }

  public get weight(): number|undefined {
    const weight = this.window.localStorage.getItem('weight')
    return weight ? parseInt(weight) : undefined;
  }

  public set weight(age: number|undefined) {
    this.window.localStorage.setItem('weight', `${age}` ?? '');
  }

  public get traitsAndBurdens(): Trait[] {
    return this.getItemOrDefault(
      'traits_and_burdens',
      [
        {title: 'Drive'},
        {title: 'Profession'},
        {title: 'Speciality'},
        {title: 'Feature'},
        {title: 'Personality'}
      ] as any
    );
  }

  public set traitsAndBurdens(traits: Trait[]) {
    this.setItem('traits_and_burdens', traits);
  }

  public get equipment(): Equipment[] {
    return this.getItemOrDefault('equipment', [])
  }

  public set equipment(equipment: Equipment[]) {
    this.setItem('equipment', equipment);
  }

  public get powers(): Power[] {
    return this.getItemOrDefault('powers', []);;
  }

  public set powers(powers: Power[]) {
    this.setItem('powers', powers);
  }

  public get tragedy(): string {
    return this.window.localStorage.getItem('tragedy') ?? '';
  }

  public set tragedy(tragedy: string) {
    this.window.localStorage.setItem('tragedy', tragedy);
  }


  public get destiny(): string {
    return this.window.localStorage.getItem('destiny') ?? '';
  }

  public set destiny(destiny: string) {
    this.window.localStorage.setItem('destiny', destiny);
  }


  public get knownSecrets(): string {
    return this.window.localStorage.getItem('secrets_known') ?? '';
  }

  public set knownSecrets(knownSecrets: string) {
    this.window.localStorage.setItem('secrets_known', knownSecrets);
  }

  public get advancements(): number {
    const advancements = this.window.localStorage.getItem('advancements')
    return advancements ? parseInt(advancements) : 0;
  }

  public set advancements(advancements: number) {
    this.window.localStorage.setItem('advancements', `${advancements}` ?? '0');
  }

  private cachedPhysique: AttributePool|undefined;

  public get physique(): AttributePool {
    return this.getItemOrDefault(
      'physique',
      {
        title: 'Physique',
        dice: 0
      }
    );
  }

  public set physique(physique: AttributePool) {
    this.setItem('physique', physique);
  }

  public get charm(): AttributePool {
    return this.getItemOrDefault(
      'charm',
      {
        title: 'Charm',
        dice: 0
      }
    );
  }

  public set charm(charm: AttributePool) {
    this.setItem('charm', charm);
  }

  public get wits(): AttributePool {
    return this.getItemOrDefault(
      'wits',
      {
        title: 'Wits',
        dice: 0
      }
    );
  }

  public set wits(wits: AttributePool) {
    this.setItem('wits', wits);
  }

  public get resources(): AttributePool {
    return this.getItemOrDefault(
      'resources',
      {
        title: 'Resources',
        dice: 0,
        note: undefined,
        noteTitle: 'Spent'
      }
    );
  }

  public set resources(resources: AttributePool) {
    this.setItem('resources', resources);
  }

  public get influence(): AttributePool {
    return this.getItemOrDefault(
      'influence',
      {
        title: 'Influence',
        dice: 0,
        note: undefined,
        noteTitle: 'Spent'
      }
    );
  }

  public set influence(influence: AttributePool) {
    this.setItem('influence', influence);
  }

  public get spirit(): AttributePool {
    return this.getItemOrDefault(
      'spirit',
      {
        title: 'Spirit',
        dice: 0,
        note: undefined,
        noteTitle: 'Spent'
      }
    );
  }

  public set spirit(spirit: AttributePool) {
    this.setItem('spirit', spirit);
  }

  public get health(): AttributePool {
    const health = this.getItemOrDefault(
      'health',
      {
        title: 'Health',
        dice: (this.physique.dice + this.resources.dice) || 0,
        note: undefined,
        noteTitle: 'Damage'
      }
    );
    health.dice = this.physique.dice + this.resources.dice;
    return health;
  }

  public set health(health: AttributePool) {
    this.setItem('health', health);
  }

  public get reputation(): AttributePool {
    const rep = this.getItemOrDefault(
      'reputation',
      {
        title: 'Reputation',
        dice: 0,
        note: undefined,
        noteTitle: 'Damage'
      }
    );
    rep.dice = this.charm.dice + this.influence.dice;
    return rep;
  }

  public set reputation(reputation: AttributePool) {
    this.setItem('reputation', reputation);
  }

  public get willpower(): AttributePool {
    const willPower = this.getItemOrDefault(
      'willpower',
      {
        title: 'Willpower',
        dice: 0,
        note: undefined,
        noteTitle: 'Damage'
      }
    );
    willPower.dice = this.wits.dice + this.spirit.dice;
    return willPower;
  }

  public set willpower(willpower: AttributePool) {
    this.setItem('willpower', willpower);
  }

  private getItemOrDefault<T>(item: string, defaultValue: T): T {
    if (this.cache[item]) {
      return this.cache[item];
    }
    const json = this.window.localStorage.getItem(item);
    return  json ? JSON.parse(json) : defaultValue;
  }

  private setItem(item: string, value: any): void {
    this.window.localStorage.setItem(item, JSON.stringify(value));
    this.cache[item] = value;
  }

}

export interface Trait {
  title: string;
  description: string;
}

export interface Power {
  title: string;
  type: 'allomancy'|'feruchemy'|'other';
  rating: string;
  charges: number;
  stunts: string;
}

export interface Equipment {
  item: string;
  rules: string;
  prop: boolean;
}

export interface AttributePool {
  title: string;
  dice: number;
  note?: number;
  noteTitle?: string;
}