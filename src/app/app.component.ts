import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import {  fader } from './route-animations';
import { ThemeService} from './theme/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"./globaltheme.css"],
  animations: [
    fader  
    //explainerAnim, 
     ]

})

export class AppComponent {
  constructor(private themeService: ThemeService) {}
  title = 'bay-portfolio';
  activeName:string;
  lightMode:boolean;
  darkMode:boolean;


  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  //  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'dark') {
      this.themeService.setTheme('light');

      
      } else {
      this.themeService.setTheme('dark');


      
      }
  }



}
