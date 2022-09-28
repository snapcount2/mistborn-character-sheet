import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';

export type ApplicationMode = 'play'|'edit';

@Injectable({
  providedIn: 'root'
})
export class ApplicationModeService {
  private _mode: ApplicationMode =  this.window.localStorage.getItem('application-mode') as ApplicationMode || 'edit';
  private modeSubject: Subject<ApplicationMode> = new BehaviorSubject<ApplicationMode>(this._mode);
  public readonly mode$ = this.modeSubject.asObservable();

  constructor(private window: Window) { }

  public toggle(): void {
    this._mode = (this._mode === 'play') ? 'edit' : 'play';
    this.window.localStorage.setItem('application-mode', this._mode)
    this.modeSubject.next(this._mode);
  }

  public shouldDisplay(content: any): boolean {
    let meaningfullyTruthyValue = content;
    if (Array.isArray(content)) {
      meaningfullyTruthyValue = content.length;
    }
    return this.mode === 'edit' || !!meaningfullyTruthyValue;
  }

  public get mode(): ApplicationMode {
    return this._mode;
  }
}
