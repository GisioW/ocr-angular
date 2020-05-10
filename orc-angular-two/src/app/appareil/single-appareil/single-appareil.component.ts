import { Component, OnInit } from '@angular/core';
import {AppareilServiceService} from '../../services/appareil-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string;
  status: string;

  constructor(private appareilService: AppareilServiceService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
      const id = this.route.snapshot.params.id;
      if (this.appareilService.getAppareilById(+id)) {
        this.name = this.appareilService.getAppareilById(+id).name;
        this.status = this.appareilService.getAppareilById(+id).status;
      }
    }

}
