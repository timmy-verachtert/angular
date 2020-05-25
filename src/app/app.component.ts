import { Component } from '@angular/core';
import { Oefening } from './oefening';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  public display: string = "-----";
  public beschr: string = "***";
  title = 'WorkOut';
  tijd: number = 0;
  tijdsduur: number = 0;
  teller: number = 0;
  aantOef: number = 0;

  interval;
  oefeningen: Oefening[];
  constructor() {
    this.oefeningen = [];
    this.oefeningen.push(new Oefening("Push-ups","Push-ups","Op de handen en de tippen steunen, armen omhoog en omlaag",30));
    this.oefeningen.push(new Oefening("Mountain climbers","Bergbeklimmen","doen alsof je een berg opklimt",15));
    this.oefeningen.push(new Oefening("plank","plank","met je buik op de grond en armen en benen omhoog",15));
    this.oefeningen.push(new Oefening("Lunges","Lunges","Een lunge is een soort hele grote stap naar voren of naar achteren, waarbij je naar beneden zakt. Je traint er je benen, billen en hamstrings mee.",20));
    this.oefeningen.push(new Oefening("Squat","Hurken","doen alsof je op een stoel gaat zitten",20));
    this.oefeningen.push(new Oefening("Hurken","Hurken","door de knieën naar beneden, en weer omhoog",15));
    this.oefeningen.push(new Oefening("Sit-ups","sit-ups","op je rug liggen en naar je knieën grijpen",30));
  }
  start() {
    this.aantOef = this.oefeningen.length;
    this.interval = setInterval(() => {
        this.tijd++;
        this.tijdsduur++;
        this.teller;
        this.display = this.tijd.toString(); 
        this.display = this.oefeningen[this.teller].naam;
        this.beschr = this.oefeningen[this.teller].beschrijving;
      if(this.tijdsduur==this.oefeningen[this.teller].tijdsduur){
          this.tijdsduur = 0;
          this.teller++;
      }
      if(this.teller == this.oefeningen.length){
        stop();
        this.display = "Einde van de oefeningen";
      }

    },1000)
  }
  pause(){
    clearInterval(this.interval);
  }
  stop(){
    this.tijd = 0;
    this.pause();
    this.interval()
  }
}


export class WorkOutPlan{
  Naam:string;
  Oefeningen: Oefening[]
  Titel:string;
  RustTussenOefeningen:number;
}