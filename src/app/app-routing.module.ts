import { NgModule } from '@angular/core';
// app-routing.module.ts 回导入RouterModule 和 Routes，以便应用具有路由的功能
import { RouterModule, Routes } from '@angular/router';
// 配置好路由后，会导入HeroesComponet，它告诉路由要去什么地方
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'detail/:id', component: HeroDetailComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
