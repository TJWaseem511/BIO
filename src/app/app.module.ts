import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BevMenuComponent } from './bev-menu/bev-menu.component';
import { OrdersComponent } from './orders/orders.component';
import { MenuItemsService } from './services/menuItems.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderStatusService } from './services/orderStatus.service';
import { GenerateOrderNumberService } from './services/generateOrderNumber.service';
import { OrderComponent } from './orders/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    BevMenuComponent,
    OrdersComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MenuItemsService, 
            OrderStatusService,
            GenerateOrderNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
