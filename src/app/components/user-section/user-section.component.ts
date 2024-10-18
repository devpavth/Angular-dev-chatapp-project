import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from './user.model';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss'],
})
export class UserSectionComponent  implements OnInit {

  users: User[] = [
    { name: 'Connor Smith', position: 'Sales Rep', avatar: 'https://i.pravatar.cc/300?u=connor' },
    { name: 'Daniel Smith', position: 'Product Designer', avatar: 'https://i.pravatar.cc/300?u=daniel' },
    { name: 'Greg Smith', position: 'Director of Operations', avatar: 'https://i.pravatar.cc/300?u=greg' },
    { name: 'Zoey Smith', position: 'CEO', avatar: 'https://i.pravatar.cc/300?u=zoey' }
  ];

  @Output() backButtonClicked = new EventEmitter<void>();

  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {}

  async toggleFollow(user: User) {
    if (user.isFollowing) {
      const alert = await this.alertController.create({
        header: `Unfollow ${user.name}`,
        message: `Do you want to unfollow ${user.name}?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Unfollow',
            handler: () => {
              user.isFollowing = false; 
            },
          },
        ],
      });

      await alert.present();
    } else {
      user.isFollowing = true; 
    }
  }

}
