import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  stripePromise = loadStripe('pk_test_51OSGOzSIkNIxCI012A74UTB3ldXyLyaCce7UyeE3ekjLmxnwDBMUvb8K4iUrQZhrQNSrA7v8Zjs2hjQZkMevm80L00e9tAfsL4');

  constructor() { }

  async initiatePayment(paymentDetails: any){
    const stripe = await this.stripePromise;
    if(stripe){
      const {error} = await stripe.redirectToCheckout({
        lineItems: paymentDetails.lineItems,
        mode: 'payment',
        successUrl: 'https://yourwebsite.com/success',
        cancelUrl: 'https://yourwebsite.com/cancel',
        customerEmail: paymentDetails.email,
      });
      if(error){
        console.error('Error:', error);
      }
    }
  }
}
