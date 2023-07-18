import { Component, OnInit } from '@angular/core';
import { OrderManagementService } from 'src/app/services/order-management.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-new-orderpopover',
  templateUrl: './new-orderpopover.component.html',
  styleUrls: ['./new-orderpopover.component.scss'],
})
export class NewOrderpopoverComponent  implements OnInit {

  showCustomerData: boolean = false;
  displayOptions: boolean = false;

  constructor(public orders: OrderManagementService) { }

  ngOnInit() {
    console.log();
    
  }

    //this functions are for new order component
    displayCustomerData() {
      this.showCustomerData === true ? this.showCustomerData = false : this.showCustomerData = true;
    }
  
    showOptions() {
      this.displayOptions = true;
    }

}
