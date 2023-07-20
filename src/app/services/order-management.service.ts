import { Injectable } from '@angular/core';
import ordersData from '../../assets/ordersData.json';


@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  ordersData: any;
  newOrders: any = [];
  inProgress: any = [];
  history: any = [];



constructor() { 


  }

 manageOrders() {
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

  changeOrderStatus(orderId: number, oldStatus: number, newStatus: number, addDelay:boolean, newTime?:string) {
    console.log("ORDER ACCEPTED", orderId, oldStatus, newStatus, addDelay);
    
    // change orderStatus to the correct one
    //add delay if needed, change preparation time and estimated delivery
    // 0 = waiting confirmation, 1 = accepted/preparing, 2 = ready for delivery, 3 = delivered, 4 = declined
    //change order to the correct array

  }

}
