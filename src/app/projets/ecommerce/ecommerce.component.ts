import { Component, OnInit } from '@angular/core';
import { explainerAnimRight } from 'src/app/route-animations';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css','../../globaltheme.css'],
  animations:[ explainerAnimRight]
})
export class EcommerceComponent implements OnInit {

  constructor() { }
  roles = [
    {icon:'fa-briefcase', 
    name:'Mon rôle', 
    skill: [
      {0:'UI/UX designer'},
      {1:'Programmeuse web d’application Front-end (Angular6, Html, Css)'},
      {2:'Responsable de projet'},
      ]},
    
    {icon:'fa-cogs', 
    name:'Software utilisés', 
    skill: [
      {0:'Photoshop'},
      {1:'Illustrator'} ,
      {2:'Figma'},
      {3:'Visual studio code '},
      {4:'FileZilla (déployer web)'}]},
    
    {icon:'fa-users', 
    name:'Mon équipe', 
    skill: [
      {0: '1x UX/UI design'},
      {1: '1x Developper Front end'},
      {2: '1x Developper Backend'}]},
    
    {icon:'fa-clock-o', 
    name:'Durée', 
    skill: [
      {0:'1 semaine UI design'},
      {1: '1 semaine UX'},
      {2: '8 semaines Coder (+responsive)'}]},
   
    {icon:'fa-key', 
    name:' Ma contribution essentielle', 
    skill: [
      {0:'Concept idéalisation'},
      {1:'Management de projet'},
      {2:'Prototype'},
      {3:'Design intéraction et animations'},
      {4:'Coder Frontend, tester'}]},
  



    ]; 

  ngOnInit() {
  }

}
