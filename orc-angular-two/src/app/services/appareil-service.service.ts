import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) { }

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

  addAppareil(name: string, status: string){
    const appareil = {
      id:  0,
      name: '',
      status: ''
    };
    appareil.name = name;
    appareil.status = status;
    appareil.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareil);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer(){
    this.httpClient.put('url', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
        },
        (error) => {
          console.log('Erreur de sauvegarde');
        }
      );
  }

  getAppareilFromServer(){
    this.httpClient.get<any[]>('url')
      .subscribe(
        (response) => {
          this.appareils = response;
          console.log('Recuperation de ' + JSON.stringify(this.appareils));
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement');
        }
      );
  }
}
