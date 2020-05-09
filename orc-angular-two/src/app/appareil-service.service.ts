import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {
  appareils = [
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'PC',
      status: 'allumé'
    }
  ];

  constructor() { }

  onSwithAllOn(): void {
    for (const appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  onSwithAllOff(): void {
    for (const appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  onSwitchOn(index: number){
    this.appareils[index].status = 'allumé';
    console.log('onSwitchOn ' + this.appareils[index].status);
  }

  onSwitchOFF(index: number){
    this.appareils[index].status = 'éteint';
    console.log('onSwitchOFF ' + this.appareils[index].status);
  }
}
