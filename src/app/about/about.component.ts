import { Component, OnInit } from '@angular/core';
import { explainerAnimRight } from '../route-animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','../globaltheme.css'],
  animations: [ explainerAnimRight]
})
export class AboutComponent implements OnInit {

  constructor() { }

  softwares = [
    {image:'../assets/images/about/figma.svg', name:'Fimgma'},
    {image:'../assets/images/about/sketch.svg', name:'Sketch'},
    {image:'../assets/images/about/invision.svg', name:'Invision'},
    {image:'../assets/images/about/photoshop.svg', name:'Photoshop'},
    {image:'../assets/images/about/illustrator.svg', name:'Illustrator'},
    {image:'../assets/images/about/balsamiq.svg', name:'Balsamiq'}
  ];
  devskills = [
    {image:'../assets/images/about/angular.svg', name:'Angular2+'},
    {image:'../assets/images/about/html.svg', name:'Html'},
    {image:'../assets/images/about/javascript.svg', name:'Javascript'},
    {image:'../assets/images/about/css.svg', name:'CSS'},
    {image:'../assets/images/about/firebase.svg', name:'Firebase'},
   

  ];

  ngOnInit() {
  }

}
