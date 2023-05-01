import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmptydshComponent } from './emptydsh/emptydsh.component';





export const components = [
    EmptydshComponent,

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
