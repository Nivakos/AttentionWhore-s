import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { PersonalInfoComponent } from './personal-info/personal-info.component'
import { SkillsComponent } from './skills/skills.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'personal-info',
    component: PersonalInfoComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
