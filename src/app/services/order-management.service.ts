import { Injectable } from '@angular/core';
import ordersData from '../../assets/ordersData.json';
import { Http } from './Http';


@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  ordersData: any;
  newOrders: any = [];
  inProgress: any = [];
  history: any = [];
  orderObj: any;



constructor(private http: Http) { 


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

  async changeOrderStatus(orderId: number, oldStatus: number, newStatus: number, addDelay:boolean, newTime?:string) {
    if(newStatus == 1)
    //change status
    this.orderObj = this.newOrders.filter((ord:any)=> ord.id === orderId);
    this.orderObj[0].orderStatus = newStatus;
    const str: string = `order/${orderId}` 
    const obj: any = await this.http.request(str, 'PUT', this.orderObj[0]);
    console.log("intento de put request", obj);
    //change array that belongs --- should i map again the whole object or jsut move it from array?
    //moving it to another array
    
    

    
    // change orderStatus to the correct one
    //add delay if needed, change preparation time and estimated delivery
    // 0 = waiting confirmation, 1 = accepted/preparing, 2 = ready for delivery, 3 = delivered, 4 = declined
    //change order to the correct array

  }

}
