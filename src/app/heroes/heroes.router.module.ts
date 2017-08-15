import { HeroesService } from './heroes.service';
import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


const route: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    },

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(route)
  ],
  providers: [HeroesService],
  exports: [RouterModule],
  declarations: [DashboardComponent, HeroDetailComponent]
})
export class HeroesRouterModule { }
