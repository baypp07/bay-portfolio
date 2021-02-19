import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-graphicdesgin',
  templateUrl: './graphicdesgin.component.html',
  styleUrls: ['./graphicdesgin.component.css',"../../globaltheme.css"]
})
export class GraphicdesginComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
  }

  designprojets = [
 

    {image:'../assets/images/graphicdesign/pagination2.png',
    name:'Restaurant Lan thaï',
    description:'Identité visuelle d’un restaurant traditionnel thaïlandais',
    lien:"/projets/graphicdesign/lanthai"},
    
    {image:'../assets/images/graphicdesign/pagination1.png',
    name:'Restaurant Jaï Thaï',
    description:'Changement de l’image de marque haute gamme',
    lien:"/projets/graphicdesign/jaithai"},

    {image:'../assets/images/graphicdesign/pagination3.png',
    name:'Start-up Sportbak',
    description:'Identité visuelle des produits high-tech sportifs',
    lien:"/projets/graphicdesign/sportbak"},
  ];


}
