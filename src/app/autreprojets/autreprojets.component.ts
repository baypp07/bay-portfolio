import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-autreprojets',
  templateUrl: './autreprojets.component.html',
  styleUrls: ['./autreprojets.component.css',"../globaltheme.css"]
})
export class AutreprojetsComponent implements OnInit {
  public href:string;

  constructor(public router:Router) { }

  autreprojets = [
    {image:'../assets/images/webdesign/sportbak.png',
    title:'Web design & Développement Front-end',
    name:'Sportbak / Futbak',
    lien:"/projets/webdesign"},

    {image:'../assets/images/projectdesign.png',
    title:'Design de marque et  communicaiton',
    name:'Start-up / restauration',
    lien:"/projets/graphicdesign"},

    {image:'../assets/images/projectsportbakstore.png',
    title:'Design & Développement web fullstack',
    name:'Sportbak Store',
    lien:"/projets/sportbakstore"},
  ];
  ngOnInit() {
  }

}
