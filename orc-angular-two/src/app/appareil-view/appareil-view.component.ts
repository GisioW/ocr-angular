import { Component, OnInit } from '@angular/core';
import {AppareilServiceService} from '../services/appareil-service.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  title = 'Appareils';
  appareils: any[];

  isAuth: false;

  constructor(private appareilService: AppareilServiceService) {
  }

  ngOnInit(): void {
    // Ce n'est pas un best practice.. Juste pour l'intégration des service.
    this.appareils = this.appareilService.appareils;
  }

  onSwitAllOn(): void{
    this.appareilService.onSwithAllOn();
  }

  onSwitAllOff(): void{
    if (confirm('Etes-vous sur de vouloir eteindre tous les appareils?')){
      this.appareilService.onSwithAllOff();
    } else {
      return;
    }
  }

}
