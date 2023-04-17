import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import ordersData from '../../assets/ordersData.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {
  selectedTab: any;
  ordersData: any;

  constructor() {}


  ngOnInit(): void {
    this.ordersData = ordersData;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log(tab);
    console.log(this.ordersData);
    
    
  }
}
