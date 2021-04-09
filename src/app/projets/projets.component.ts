import { Component, OnInit } from '@angular/core';
import { fader } from '../route-animations';
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css','../globaltheme.css'],
  animations: [ fader]
})

export class ProjetsComponent implements OnInit {

  constructor() { }
  orprojects = [
    {
      id:"1",  
      image:'./assets/images/ecommerce/sportbakprototype.gif',
      title:'Dev web Full stack Angular 2+ & Web Design & ',
      name:'Sportbak Store',
      text:'Développer une plateforme web d’application de Boutique en ligne et répondre aux besoins de leurs clients.',
      lien:'/projets/sportbakstore' 
    },
    {
    id:"2",
    image:'../assets/images/designgraf.png',
    title:'Design de la marque et de sa communication',
    name:'Start-up / restauration',
    text:'Accompagner dans la création de logotype, charte graphique ainsi que ses supports de communication.',
    lien:'/projets/graphicdesign' 
  },

  ];

  ngOnInit() {
  }

}
