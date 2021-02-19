import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectWebdesignComponent } from './projets/project-webdesign/project-webdesign.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AutreprojetsComponent } from './autreprojets/autreprojets.component';
import { EcommerceComponent } from './projets/ecommerce/ecommerce.component';
import { GraphicdesignComponent } from './projets/graphicdesign/graphicdesign.component';
import { JaithaiComponent } from './projets/graphicdesign/jaithai/jaithai.component';
import { GraphicdesginComponent } from './autreprojets/graphicdesgin/graphicdesgin.component';
import { LanthaiComponent } from './projets/graphicdesign/lanthai/lanthai.component';
import { SportbakComponent } from './projets/graphicdesign/sportbak/sportbak.component';
import { ProjetsComponent } from './projets/projets.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SliderimageComponent } from './projets/project-webdesign/sliderimage/sliderimage.component';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectWebdesignComponent,
    AccueilComponent,
    AboutComponent,
    AutreprojetsComponent,
    EcommerceComponent,
    GraphicdesignComponent,
    JaithaiComponent,
    GraphicdesginComponent,
    LanthaiComponent,
    SportbakComponent,
    ProjetsComponent,
    ScrollTopComponent,
    SliderimageComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, RouterModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
}
