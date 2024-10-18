import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss'],
})
export class EventSectionComponent  implements OnInit {
  events = [
    { name: 'Music Festival', location: 'Los Angeles, USA', date: 'July 15, 2024' },
    { name: 'Tech Conference', location: 'San Francisco, USA', date: 'August 5, 2024' },
    { name: 'Food Expo', location: 'Paris, France', date: 'September 10, 2024' },
    { name: 'Film Premiere', location: 'London, UK', date: 'October 20, 2024' },
    { name: 'Art Exhibition', location: 'Florence, Italy', date: 'November 12, 2024' },
    { name: 'Sports Tournament', location: 'Tokyo, Japan', date: 'December 3, 2024' },
    { name: 'Fashion Show', location: 'New York, USA', date: 'January 22, 2025' },
    { name: 'Literary Festival', location: 'Edinburgh, UK', date: 'February 8, 2025' },
    { name: 'Startup Meetup', location: 'Berlin, Germany', date: 'March 15, 2025' },
    { name: 'Photography Workshop', location: 'Sydney, Australia', date: 'April 7, 2025' }
  ];
  
  @Output() backButtonClicked = new EventEmitter<void>();

  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }

  constructor() { 

  }

  ngOnInit() {}

}
