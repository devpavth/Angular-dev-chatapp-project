import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent  implements OnInit {
  @Output() backButtonClicked = new EventEmitter<void>();

  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }

  constructor() { 

  }


  ngOnInit() {}

}
