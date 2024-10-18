import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss'],
})
export class RightSectionComponent  implements OnInit {

  @Input() activeSection: string = '';
  @Output() backButtonClicked = new EventEmitter<void>();
  onBackButtonClicked() {
    this.backButtonClicked.emit(); 
  }

  constructor() { }

  ngOnInit() {}

}
