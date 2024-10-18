import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatBoxComponent } from '../components/chat-box/chat-box.component';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // position: string = '';
  activeSection: string = '';
  isMobile: boolean = window.innerWidth <= 768;
  isRightSectionVisible: boolean = false;

  onSectionSelected(section: string) {
    this.activeSection = section; 
    if (this.isMobile) {
      this.isRightSectionVisible = true; 
    }
  }

  onBackButtonClicked() {
    this.isRightSectionVisible = false; 
  }

  constructor(private modalController: ModalController) {
    window.addEventListener('resize', (event) => {
      const target = event?.target as Window;
      this.isMobile = target.innerWidth <= 768;
      
      
      if (!this.isMobile) {
        this.isRightSectionVisible = true; 
      } else {
        this.isRightSectionVisible = false; 
      }
    });
  }

  ngOnInit() {
  
  }
  

  async openChatModal() {
    const modal = await this.modalController.create({
      component: ChatBoxComponent
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        console.log('Selected Chat from Modal:', result.data);
        
      }
    });

    return await modal.present();
  }
}
