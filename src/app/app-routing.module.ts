import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjectWebdesignComponent } from './projets/project-webdesign/project-webdesign.component';
import { EcommerceComponent } from './projets/ecommerce/ecommerce.component';
import { GraphicdesignComponent } from './projets/graphicdesign/graphicdesign.component';
import { JaithaiComponent } from './projets/graphicdesign/jaithai/jaithai.component';
import { LanthaiComponent } from './projets/graphicdesign/lanthai/lanthai.component';
import { SportbakComponent } from './projets/graphicdesign/sportbak/sportbak.component';
import { AutreprojetsComponent } from './autreprojets/autreprojets.component';
import { GraphicdesginComponent } from './autreprojets/graphicdesgin/graphicdesgin.component';

const routes: Routes = [
  { path: '', redirectTo:'/accueil', pathMatch:'full'},
  { path: 'navbar', component: NavbarComponent }, 
  { path: 'accueil', component: AccueilComponent },  
  { path: 'about',component: AboutComponent},
  { path: 'projets',component: ProjetsComponent},
  { path: 'projets/webdesign',component: ProjectWebdesignComponent},
  { path: 'projets/sportbakstore',component: EcommerceComponent},
  { path: 'projets/graphicdesign',component: GraphicdesignComponent},
  { path: 'projets/graphicdesign/jaithai',component: JaithaiComponent},
  { path: 'projets/graphicdesign/lanthai',component: LanthaiComponent},
  { path: 'projets/graphicdesign/sportbak',component: SportbakComponent},
  { path: 'autreprojets',component: AutreprojetsComponent},
  { path: 'autreprojetsGraphicdesign',component: GraphicdesginComponent},
  { path: '**',redirectTo:'/accueil', pathMatch:'full' } 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
