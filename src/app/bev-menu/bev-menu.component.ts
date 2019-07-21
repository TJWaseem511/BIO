import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators,} from '@angular/forms'
import { MenuItemsService } from '../services/menuItems.service';
import { OrderStatusService } from '../services/orderStatus.service';
import { GenerateOrderNumberService } from '../services/generateOrderNumber.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-bev-menu',
  templateUrl: './bev-menu.component.html',
  styleUrls: ['./bev-menu.component.css']
})
export class BevMenuComponent implements OnInit {

  menu: string[] = [];
  order_form: FormGroup;
  constructor(private menuService: MenuItemsService, 
    private OSService: OrderStatusService,
    private fb: FormBuilder,
    private GONservice: GenerateOrderNumberService) { }

  ngOnInit() {
    //getting menu items from MenuService
    this.menu = this.menuService.menuItems();

     /*this.order_form = this.fb.group({
      customer_name: ['', Validators.required],
      item_selected: ['please select one item', Validators.required],
      item_quantity: [0, Validators.required]
    });*/

    this.order_form = new FormGroup({
      customer_name: new FormControl(''),
      item_selected: new FormControl('please select one item')
    });
  }

  placeOrder() : void{
    //Push the new order to Queued
    this.OSService.queuedOrders.push(
      new Order(this.GONservice.getOrderID(),
      this.order_form.value['customer_name'],
      this.order_form.value['item_selected']
      )
    )
    //this.OSService.queuedOrders.push(
      //new Orders(this.GONservice.getOrderID, this.order_form.value.g)
    //);
    //console.log(this.OSService.queuedOrders.length);
  }

}
