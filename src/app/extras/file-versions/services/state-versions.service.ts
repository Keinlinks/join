import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateVersionsService {
  private stateID: BehaviorSubject<number> = new BehaviorSubject(0);
  private stateID$: Observable<number> = this.stateID.asObservable();
  constructor() {}

  getId() {
    return this.stateID$;
  }

  emit(id: number) {
    this.stateID.next(id);
  }
}
