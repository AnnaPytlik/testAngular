import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RouterModule & Routes activate routing service in Angular
import { RouterModule, Routes } from '@angular/router';

// Include components for which router service to be activated
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TrocheOMnieComponent } from './troche-o-mnie/troche-o-mnie.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'troche-o-mnie', component: TrocheOMnieComponent },
  { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }