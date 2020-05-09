import {Component, OnInit} from '@angular/core';
import {AppareilServiceService} from './appareil-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Appareils';
  appareils: any[];

  constructor(private appareilService: AppareilServiceService) {
  }

  ngOnInit(): void {
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
