import { Injectable } from '@angular/core';
import ordersData from '../../assets/ordersData.json';


@Injectable({
  providedIn: 'root'
})
export class OrderSortingService {
  ordersData: any = ordersData;
  newOrders: any = [];
  inProgress: any = [];
  history: any = [];


  constructor() { 

  for ( let i = 0; i < this.ordersData.length; i++) {
    if (this.ordersData[i].orderStatus === 0 ) {
      this.newOrders.push(this.ordersData[i])
      console.log(this.newOrders);
      
    } else if( this.ordersData[i].orderStatus === 1) {
      this.inProgress.push(this.ordersData[i])
    } else if( this.ordersData[i].orderStatus === 2) {
      this.history.push(this.ordersData[i])
    }
   }
  }

}
