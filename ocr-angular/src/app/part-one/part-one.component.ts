import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.css']
})
export class PartOneComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
  // tslint:disable-next-line:variable-name
    @Input() created_at = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: number){
    console.log('La valeur ici est ' + value);
    this.loveIts = value;
  }



}
