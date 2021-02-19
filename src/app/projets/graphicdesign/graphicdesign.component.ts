import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/route-animations';

@Component({
  selector: 'app-graphicdesign',
  templateUrl: './graphicdesign.component.html',
  styleUrls: ['./graphicdesign.component.css','../../globaltheme.css'],
  animations:[fader]
})
export class GraphicdesignComponent implements OnInit {

  constructor() { }

  roles = [
    {icon:'fa-briefcase', 
    name:'Mon role Principale', 
    skill: [
      {0:'Graphic desginer '},
     ]},

    {icon:'fa-cogs', 
    name:'Software utilisés', 
    skill: [
      {0:'Photoshop, Illustrator, Figma, InDesgin, Sketch, Invision '},
    ]},

    {icon:'fa-key', 
    name:'Ma contribution essentielle', 
    skill: [
      {0:'Concept idéalisation '},
      {1:'Desgin intéraction '},
      {2:'Recherche de la concurrence '},
      {3:'Recherche sur les comportements des utilisateurs '},
      ]},
  ]; 

  designprojets = [
    {image:'../assets/images/graphicdesign/lanthai.png',
    title:'Design logo & les supports de communications ',
    name:'Restaurant Lan Thaï',
    description:'Identité visuelle d’un restaurant traditionnel thaïlandais',
    lien:"/projets/graphicdesign/lanthai"},

    {image:'../assets/images/graphicdesign/jaithai.png',
    title:'Design logo & les supports de communications',
    name:'Restaurant Jaï Thai',
    description:'Changement d’image de la marque haute gamme',
    lien:"/projets/graphicdesign/jaithai"},

    {image:'../assets/images/graphicdesign/sportbak.png',
    title:'Design logo et les supports de communication',
    name:'Start-up Sportbak',
    description:'Identité visuelle des produits high-tech sportifs',
    lien:"/projets/graphicdesign/sportbak"},
  ];
  ngOnInit() {
  }

}
