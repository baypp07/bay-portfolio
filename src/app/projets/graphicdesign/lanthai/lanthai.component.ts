import { Component, OnInit } from '@angular/core';
import { stepperRight } from 'src/app/route-animations';

@Component({
  selector: 'app-lanthai',
  templateUrl: './lanthai.component.html',
  styleUrls: ['./lanthai.component.css',"../../../globaltheme.css"],
  animations:[stepperRight]
})
export class LanthaiComponent implements OnInit {

  constructor() { }
  images = [
    {src:'../assets/images/graphicdesign/cartevisitelanthai.png',
    name:'Carte de visite'},
    {src:'../assets/images/graphicdesign/carteappero.png',
    name:"Carte d'appéritif"},
    {src:'../assets/images/graphicdesign/facebook.png',
    name:'Contenus pour les réseaux sociaux.'},
  ];
  ngOnInit() {
  }

}
