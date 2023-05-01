import { Injectable } from '@angular/core';
import ordersData from '../../assets/ordersData.json';


@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  ordersData: any = ordersData;
  newOrders: any = [];
  inProgress: any = [];
  history: any = [];


  constructor() { 

  for ( let i = 0; i < this.ordersData.length; i++) {
    if (this.ordersData[i].orderStatus === 0 ) {
      this.newOrders.push(this.ordersData[i])
    } else if( this.ordersData[i].orderStatus === 1) {
      this.inProgress.push(this.ordersData[i])
    } else if( this.ordersData[i].orderStatus === 2) {
      this.history.push(this.ordersData[i])
    }
   }
  }

  addDelay(amount: number, orderId: number) {
    //add delay : change preparation time and estimated delivery
  }

  changeOrderStatus(orderId: number, status: number) {
    // change orderStatus to the correct one
    // 0 = waiting confirmation, 1 = accepted/preparing, 2 = ready for delivery, 3 = delivered, 4 = declined
  }

}
