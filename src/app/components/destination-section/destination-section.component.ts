import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-destination-section',
  templateUrl: './destination-section.component.html',
  styleUrls: ['./destination-section.component.scss'],
})
export class DestinationSectionComponent  implements OnInit {

  destinations = [
    { place: 'Great Wall of China', country: 'China' },
    { place: 'Eiffel Tower', country: 'France' },
    { place: 'Colosseum', country: 'Italy' },
    { place: 'Taj Mahal', country: 'India' },
    { place: 'Statue of Liberty', country: 'USA' },
    { place: 'Machu Picchu', country: 'Peru' },
    { place: 'Santorini', country: 'Greece' },
    { place: 'Pyramids of Giza', country: 'Egypt' },
    { place: 'Christ the Redeemer', country: 'Brazil' },
    { place: 'Banff National Park', country: 'Canada' }
  ];

  @Output() backButtonClicked = new EventEmitter<void>();

  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }



  constructor() { 

  }


  ngOnInit() {}

}
