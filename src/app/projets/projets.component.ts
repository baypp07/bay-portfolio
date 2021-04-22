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
      title:'Dev web Fullstack Angular 4 & Web Design ',
      name:'Sportbak Store',
      text:'Développer une plateforme web d’application de Boutique en ligne et répondre aux besoins de leurs clients.',
      lien:'/projets/sportbakstore' 
    },
    {
      id:"2",  
      image:'./assets/images/eshop/demoeshop.gif',
      title:'Eshop / bootstrap ',
      name:'Fullstack Angular 8 + Firebase Realtime Database',
      text:"Développer une plateforme eshop pour les clients puis gérer des produits et des commandes clients pour les admins",
      lien:'https://bayshop-6b094.web.app/' ,
      sourceCode:'https://github.com/baypp07/eshop',
    },
    {
    id:"3",
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
