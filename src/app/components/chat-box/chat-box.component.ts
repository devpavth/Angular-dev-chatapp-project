import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent  implements OnInit {
  // presentingElement = HTMLElement | null = null;

  constructor(private modalController: ModalController) { }

  closeModal(){
    this.modalController.dismiss();
  }

  ngOnInit() {
    // this.presentingElement = document.querySelector('.ion-page') as HTMLElement;
  }

}
