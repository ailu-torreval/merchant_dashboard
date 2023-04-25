import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import ordersData from '../../assets/ordersData.json';
import merchantData from '../../assets/merchantData.json'
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderSortingService } from '../services/order-sorting.service';

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
  //for neworders component
  showCustomerData: boolean = false;
  displayOptions: boolean = false;

  constructor(public orders: OrderSortingService) {}


  ngOnInit(): void {
    //start from empty dash
    // this.selectedTab = 'empty';

    // check if the restaurant is open or closed



    //open page on new orders in case there is a new one
    // if (orders..newOrders.length > 0) {
    //   this.selectedTab = 'new-orders'
    // }


  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log(tab);
  }

  force() {
    this.selectedTab = 'empty';
    //get into merchant data, change the forcedClose boolean to true
  }

  //this functions are for new order component
  displayCustomerData() {
    this.showCustomerData === true ? this.showCustomerData = false : this.showCustomerData = true;
  }

  showOptions() {
    this.displayOptions = true;
  }
}
