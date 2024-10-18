import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UserSectionComponent } from '../components/user-section/user-section.component';
import { DestinationSectionComponent } from '../components/destination-section/destination-section.component';
import { ExperienceSectionComponent } from '../components/experience-section/experience-section.component';
import { EventSectionComponent } from '../components/event-section/event-section.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', 
    redirectTo: '/home' 
  }, 
  { path: 'user', component: UserSectionComponent },
  { path: 'experience', component: ExperienceSectionComponent },
  { path: 'destination', component: DestinationSectionComponent },
  { path: 'event', component: EventSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
