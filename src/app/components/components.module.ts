import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmptydshComponent } from './emptydsh/emptydsh.component';
import { NewOrderpopoverComponent } from './new-orderpopover/new-orderpopover.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';





export const components = [
    EmptydshComponent,
    NewOrderpopoverComponent,
    OrderDetailsComponent,
    CustomerDetailsComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: components
})
export class ComponentsModule { }
