import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: PaymentPage }])
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
