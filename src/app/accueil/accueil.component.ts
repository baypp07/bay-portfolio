import { Component, OnInit,HostListener, ElementRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { explainerAnimLeft } from '../route-animations';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css','../globaltheme.css'],
  animations: [ explainerAnimLeft ]
})
export class AccueilComponent implements OnInit {
  state = '*'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event']) 
    public checkScroll($event: any): void { 
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 10) {
      this.state = '*'
    } 

  }
  



  ngOnInit() {
    
  }


}
