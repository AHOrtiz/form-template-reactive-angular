import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidemenuComponent,
    TabComponent

  ]
})
export class SharedModule { }
