import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-sliderimage',
  templateUrl: './sliderimage.component.html',
  styleUrls: ['./sliderimage.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('1000ms ease-in', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('1000ms ease-out', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderimageComponent implements OnInit {
  current = 0;


  constructor() { }
  img_list = [
    '../assets/images/webdesign/futbak.png',
    '../assets/images/webdesign/sportbakmockup.png',
    '../assets/images/webdesign/sportbak-presse.png',
  ];

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }
  
  }

 