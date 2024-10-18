import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss'],
})
export class LeftSectionComponent  implements OnInit {
  @Output() sectionSelected = new EventEmitter<string>();
  activeSection: string = 'user';

  constructor(private router: Router) {}
  
  onSelectSection(section: string) {
    this.activeSection = section;
    this.sectionSelected.emit(section);
  }

  ngOnInit() {}

}
