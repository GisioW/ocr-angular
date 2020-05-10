import {Component, Input, OnInit} from '@angular/core';
import {AppareilServiceService} from '../services/appareil-service.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appreilService: AppareilServiceService) { }

  ngOnInit(): void {
    this.status = this.appreilService.appareils[this.index].status;
  }

  onSwitchOn(){
    this.appreilService.onSwitchOn(this.index);
  }

  onSwitchOff(){
    this.appreilService.onSwitchOFF(this.index);
  }

  onSwitch(){
    if (this.status === 'allumé'){
      this.onSwitchOff();
    } else if (this.status === 'éteint'){
      this.onSwitchOn();
    }
  }

  getStaus(){
    return this.status;
  }

  getColor(): string{
    if (this.status === 'allumé'){
      return 'green';
    }

    if (this.status === 'éteint'){
      return 'red';
    }
}
}
