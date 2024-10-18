import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { LeftSectionComponent } from './components/left-section/left-section.component';
// import { RightSectionComponent } from './components/right-section/right-section.component';

// import { UserSectionComponent } from './components/user-section/user-section.component';
// import { DestinationSectionComponent } from './components/destination-section/destination-section.component';
// import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
// import { EventSectionComponent } from './components/event-section/event-section.component';

@NgModule({
  declarations: [AppComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
