import { Component, OnInit } from '@angular/core';
import { stepperLeft } from 'src/app/route-animations';


@Component({
  selector: 'app-jaithai',
  templateUrl: './jaithai.component.html',
  styleUrls: ['./jaithai.component.css',"../../../globaltheme.css"],
  animations: [ stepperLeft ]
})
export class JaithaiComponent implements OnInit {

  constructor() { }
  images = [
    {
    id:"1",
    src:'../assets/images/graphicdesign/jaithaimenu.png',
    name:'Carte menu / Carte de visite'},
    {
    id:"2",
    src:'../assets/images/graphicdesign/cartevinjaithai.png',
    name:"Carte d'appéritif / Carte du Vin"},
    {
    id:"3",
    src:'../assets/images/graphicdesign/suggestionjaithai.png',
    name:'Carte menu suggestion.'}, 
  ];

  ngOnInit() {
  }

}
