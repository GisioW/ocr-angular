import { Component, OnInit } from '@angular/core';
import {AppareilServiceService} from '../services/appareil-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  title = 'Appareils';
  appareils: any[];
  appareilSubscription: Subscription;
  isAuth: false;

  constructor(private appareilService: AppareilServiceService) {
  }

  ngOnInit(): void {
    // Ce n'est pas un best practice.. Juste pour l'intégration des service.
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
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

  onSave(): void {
    this.appareilService.saveAppareilsToServer();
    this.appareilService.emitAppareilSubject();
  }

  onFetch(): void {
    this.appareilService.getAppareilFromServer();
  }

}
