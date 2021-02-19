import { Component, OnInit } from '@angular/core';
import { explainerAnimLeft} from '../../route-animations';
@Component({
  selector: 'app-project-webdesign',
  templateUrl: './project-webdesign.component.html',
  styleUrls: ['./project-webdesign.component.css','../../globaltheme.css'],
  animations: [ explainerAnimLeft ]
})
export class ProjectWebdesignComponent implements OnInit {
  constructor(){ }
   

  webdesigns = [
    '../assets/images/webdesign/futbak.png',
    '../assets/images/webdesign/sportbak.png',
    '../assets/images/webdesign/sportbak-presse.png',
  ];

  roles = [
    {icon:'fa-briefcase', 
    name:'Mon rôle ', 
    skill: [
      {0:'UI designer'},
      {1:'Programmeuse web (Html, Css, Javascript)'},
      {2:'Responsable de projet'},]
    },
 

    {icon:'fa-clock-o', 
    name:'Durée', 
    skill: [
        {0:'1 semaine UI design'},
        {1:'1 semaine UX'},
        {2: '2 semaines Coder (+responsive)'},]},
        
        {icon:'fa-cogs', 
        name:'Software utilisés', 
        skill: [
          {0:' Photoshop'},
          {1:'Illustrator'} ,
          {2:'Figma'},
          {3:'Visual studio code'},
          {4:'FileZilla(déployer web)'},]},
    
    {icon:'fa-key', 
    name:'Ma contribution essentielle ', 
    skill: [
      {0:'Création de logo'},
      {1:'Management de projet'},
      {2:'Concept idéalisation'},
      {3:'Interaction Design'},
      {4:'Animation Design'},
      {5: 'Coder, tester'},
      {6: 'Déployer web'},
    ]},
  ]; 

    ngOnInit(){
    }
  }
