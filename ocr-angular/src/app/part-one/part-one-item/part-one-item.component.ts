import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-part-one-item',
  templateUrl: './part-one-item.component.html',
  styleUrls: ['./part-one-item.component.css']
})
export class PartOneItemComponent implements OnInit {
  @Input() loveIt: number;
  @Output() isLoved: EventEmitter<number> = new EventEmitter<number>();

  onLoveIt(value: number){
    console.log('onLoveIt ' + value);
    this.loveIt = value + 1;
    this.isLoved.emit(this.loveIt);
  }

  onDontLoveIt(value: number){
    console.log('onDontLoveIt ' + value);
    this.loveIt = value - 1;
    this.isLoved.emit(this.loveIt);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
