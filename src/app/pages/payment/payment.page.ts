import { Component, OnInit } from '@angular/core';
import { StripeService } from 'src/app/services/stripe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApplePayEventsEnum, GooglePayEventsEnum, PaymentFlowEventsEnum, PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe';
import { environment } from 'src/environments/environment';
import { first, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  data: any = {
    name: 'Nikhil',
    email: 'abc@gmail.com',
    amount: 100,
    currency: 'inr'
  };
  constructor(private stripeService: StripeService, private http: HttpClient, private router: Router) { 
    Stripe.initialize({
      publishableKey: environment.stripe.publishableKey,
    });
  }

  httpPost(body){
    return this.http.post<any>(environment.api + 'payment-sheet', body).pipe(first());
  }

  async paymentSheet(){
    try{
      Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
        console.log('PaymentSheetEventsEnum.Completed');
      });
      // const data =  new HttpParams({
      //   fromObject: this.data
      // });

      const data$ = this.httpPost(this.data);
      const { paymentIntent, ephemeralKey, customer } =await lastValueFrom(data$);

      console.log('paymentIntent:', paymentIntent);

      await Stripe.createPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
      });

      console.log('createPaymentSheet');

      const result = await Stripe.presentPaymentSheet();
      console.log('result:', result);
      if(result && result.paymentResult === PaymentSheetEventsEnum.Completed){
        this.splitAndJoin(paymentIntent);
      }
    }catch(e){
      console.log(e);
    }
  }

  async paymentFlow(){
    Stripe.addListener(PaymentFlowEventsEnum.Completed, () => {
      console.log('PaymentFlowEventsEnum.Completed');
    });
    // const data =  new HttpParams({
    //   fromObject: this.data
    // });
    // const data$ = this.http.post<{
    //   paymentIntent: string;
    //   ephemeralKey: string;
    //   customer: string;
    // }>(environment.api + 'payment-sheet', data).pipe(first());

    const data$ = this.httpPost(this.data);

    const { paymentIntent, ephemeralKey, customer } =await lastValueFrom(data$);

    await Stripe.createPaymentFlow({
      paymentIntentClientSecret: paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
    });

    const presentResult = await Stripe.presentPaymentFlow();
      console.log('presentResult:', presentResult);

    const confirmResult = await Stripe.confirmPaymentFlow();
      console.log('confirmResult:', confirmResult);
      if(confirmResult.paymentResult === PaymentFlowEventsEnum.Completed){
        this.splitAndJoin(paymentIntent);
    }

  }
  async applePay(){
    const isAvailable = Stripe.isApplePayAvailable().catch(() => undefined);
    if (isAvailable === undefined) {
      // disable to use Google Pay
      return;
    }
    Stripe.addListener(ApplePayEventsEnum.Completed, () => {
      console.log('ApplePayEventsEnum.Completed');
    });
    // const data =  new HttpParams({
    //   fromObject: this.data
    // });
    // const data$ = this.http.post<{
    //   paymentIntent: string;
    //   ephemeralKey: string;
    //   customer: string;
    // }>(environment.api + 'payment-sheet', data).pipe(first());

    const data$ = this.httpPost(this.data);

    const { paymentIntent } =await lastValueFrom(data$);

    await Stripe.createApplePay({
      paymentIntentClientSecret: paymentIntent,
      paymentSummaryItems: [{
        label: 'Product Name',
        amount: 1099.00
      }],
      merchantIdentifier: 'rdlabo',
      countryCode: 'IN',
      currency: 'INR',
    });

    const result = await Stripe.presentApplePay();
    if (result.paymentResult === ApplePayEventsEnum.Completed) {
      // Happy path
      this.splitAndJoin(paymentIntent);
    }
  }

  async googlePay(){
    const isAvailable = Stripe.isGooglePayAvailable().catch(() => undefined);
    if (isAvailable === undefined) {
      // disable to use Google Pay
      return;
    }

    Stripe.addListener(GooglePayEventsEnum.Completed, () => {
      console.log('GooglePayEventsEnum.Completed');
    });
    // const data =  new HttpParams({
    //   fromObject: this.data
    // });
    // const data$ = this.http.post<{
    //   paymentIntent: string;
    //   ephemeralKey: string;
    //   customer: string;
    // }>(environment.api + 'payment-sheet', data).pipe(first());

    const data$ = this.httpPost(this.data);
    const { paymentIntent } =await lastValueFrom(data$);

    await Stripe.createGooglePay({
      paymentIntentClientSecret: paymentIntent,
      paymentSummaryItems: [{
        label: 'Product Name',
        amount: 1099.00
      }],
      merchantIdentifier: 'rdlabo',
      countryCode: 'IN',
      currency: 'INR',
    });

    const result = await Stripe.presentGooglePay();
    if (result.paymentResult === GooglePayEventsEnum.Completed) {
      // Happy path
      this.splitAndJoin(paymentIntent);
    }
  }

  splitAndJoin(paymentIntent){
    const result= paymentIntent.split('_').slice(0, 2).join('_');
    console.log(result);
    return result;
  }

  ngOnInit() {
  }

  // startStripePayment(){
  //   this.http.post('http://localhost:3000/create-checkout-session', {amount: 500}).subscribe((data: any) => {
  //     const paymentDetails = {
  //       lineItems: [
  //         {
  //           price_data: {
  //             currency: 'inr',
  //             product_data: {
  //               name: 'Test Product',
  //             },
  //             unit_amount: 50000,
  //           },
  //           quantity: 1,
  //         },
  //       ],
  //       email: 'customer@example.com',
  //     };
  //     this.stripeService.initiatePayment(paymentDetails);
  //   });
  // }
  navigateToPayment() {
    console.log('Navigating to payment');  // Add this to verify the function is called
    this.router.navigateByUrl('/payment').then(() => {
      console.log('Navigation successful');
    }).catch(err => {
      console.error('Navigation failed', err);
    });
  }
}
