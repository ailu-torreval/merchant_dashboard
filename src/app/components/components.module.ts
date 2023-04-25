import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmptydshComponent } from './emptydsh/emptydsh.component';
import { NewOrdersdshComponent } from './new-ordersdsh/new-ordersdsh.component';
import { DashComponent } from './dash/dash.component';




export const components = [
    EmptydshComponent,
    NewOrdersdshComponent,
    DashComponent
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
