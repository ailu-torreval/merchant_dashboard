import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import ordersData from '../../assets/ordersData.json';
import merchantData from '../../assets/merchantData.json'
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderManagementService } from '../services/order-management.service';
import { NewOrderpopoverComponent } from '../components/new-orderpopover/new-orderpopover.component';
import { log } from 'console';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';
import { Http } from '../services/Http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ComponentsModule],
})
export class HomePage implements OnInit {
  selectedTab: any;
  emptyDash: boolean = true;


  // constructor(public orders: OrderManagementService, private popoverCtrl: PopoverController) {}
  constructor(public orders: OrderManagementService, private popoverCtrl: PopoverController, private http: Http) {}


  async ngOnInit(){
    //start from empty dash
    // this.selectedTab = 'empty';

    // check if the restaurant is open or closed

    const user: any = await this.http.request('user/10');
    console.log("USER WORKS?", user);
    


    //open page on new orders in case there is a new one
    if (this.orders.newOrders.length > 0) {
      this.selectedTab = 'new-orders'
    }


  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log(tab);
  }

  force() {
    this.selectedTab = 'empty';
    //get into merchant data, change the forcedClose boolean to true
  }

  async openPopover(id:string, e:Event) {

    const popover = await this.popoverCtrl.create({
      component:     NewOrderpopoverComponent,
      event: e,
      componentProps: {orderId: id}
  });
    console.log("id is", id);

   await popover.present() ;
    
  }

  proceedOrder(id:number) {
    console.log("proceed order", id);
    //change order status
  }

  async openCustomerPopover() {
    //open popover
    // CustomerDetailsComponent

    const popover = await this.popoverCtrl.create({
      component:     CustomerDetailsComponent,
      // event: e,
      // componentProps: {orderId: id}
  });

   await popover.present() ;
  }


}
