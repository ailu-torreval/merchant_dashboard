import { Component, OnInit } from '@angular/core';
import { OrderManagementService } from 'src/app/services/order-management.service';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-new-orderpopover',
  templateUrl: './new-orderpopover.component.html',
  styleUrls: ['./new-orderpopover.component.scss'],
})
export class NewOrderpopoverComponent  implements OnInit {
  order:any;

  showCustomerData: boolean = false;
  displayOptions: boolean = false;

  constructor(public orders: OrderManagementService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("OPEN POPOVER", this.order);
    
  }

    //this functions are for new order component
    displayCustomerData() {
      this.showCustomerData === true ? this.showCustomerData = false : this.showCustomerData = true;
    }

    manageOrder(orderId: number, oldStatus: number, newStatus: number, addDelay:boolean, newTime?:string) {
      this.orders.changeOrderStatus(orderId, oldStatus, newStatus, addDelay, newTime);
      this.modalCtrl.dismiss();

    }
  
    showOptions() {
      this.displayOptions = true;
    }

}
