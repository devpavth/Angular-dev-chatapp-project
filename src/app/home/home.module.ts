import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ChatBoxComponent } from '../components/chat-box/chat-box.component';
import { LeftSectionComponent } from '../components/left-section/left-section.component';
import { RightSectionComponent } from '../components/right-section/right-section.component';
import { UserSectionComponent } from '../components/user-section/user-section.component';
import { DestinationSectionComponent } from '../components/destination-section/destination-section.component';
import { ExperienceSectionComponent } from '../components/experience-section/experience-section.component';
import { EventSectionComponent } from '../components/event-section/event-section.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ChatBoxComponent, LeftSectionComponent, RightSectionComponent, UserSectionComponent, DestinationSectionComponent, ExperienceSectionComponent, EventSectionComponent],
  bootstrap: [RightSectionComponent],
})
export class HomePageModule {}
