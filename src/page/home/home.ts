import { Component } from '@angular/core';
import { Esperienze } from '../../models/esperienze';
import { Contatti } from "../contatti/contatti";
import { ExpTV } from '../exp-tv/exp-tv';
import { Formazione } from "../formazione/formazione";
import { Inediti } from '../inediti/inediti';
import { MusTea } from '../mus-tea/mus-tea';




@Component({
  selector: 'app-home',
  imports: [ExpTV, Inediti, MusTea, Contatti, Formazione],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 activeExp?: Esperienze = Esperienze.INEDITI; 

 Esperienze = Esperienze;

 setExp(exp: Esperienze){
    this.activeExp=exp;
 }
}

