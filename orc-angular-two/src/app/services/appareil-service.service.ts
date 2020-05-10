import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'éteint'
    },
    {
      id: 3,
      name: 'PC',
      status: 'allumé'
    }
  ];

  constructor() { }

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  onSwithAllOn(): void {
    for (const appareil of this.appareils){
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  onSwithAllOff(): void {
    for (const appareil of this.appareils){
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  onSwitchOn(index: number){
    this.appareils[index].status = 'allumé';
    console.log('onSwitchOn ' + this.appareils[index].status);
    this.emitAppareilSubject();
  }

  onSwitchOFF(index: number){
    this.appareils[index].status = 'éteint';
    console.log('onSwitchOFF ' + this.appareils[index].status);
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find((s) => {
      return s.id === id;
    });
    return appareil;
  }
}
