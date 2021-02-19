import { Component, OnInit } from '@angular/core';
import { stepperRight } from 'src/app/route-animations';

@Component({
  selector: 'app-sportbak',
  templateUrl: './sportbak.component.html',
  styleUrls: ['./sportbak.component.css',"../../../globaltheme.css"],
  animations:[stepperRight]
})
export class SportbakComponent implements OnInit {

  constructor() { }

  images = [
    {src:'../assets/images/graphicdesign/bcsportbak.png',
    name:'Carte de visite'},
    {src:'../assets/images/graphicdesign/livretsportbak.png',
    name:'Livret commercial'},
    {src:'../assets/images/graphicdesign/totem.png',
    name:'Affiche de Totem'},
    {src:'../assets/images/graphicdesign/futbakcontest.png',
    name:'Flyers pour Fubak Contest'},
    {src:'../assets/images/graphicdesign/flyers.png',
    name:'Flyers commercials'},
    {src:'../assets/images/graphicdesign/ecuisson.png',
    name:'Logo Futbak League'},

  ];

  ngOnInit() {
  }

}
