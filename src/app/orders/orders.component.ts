import { Component, OnInit } from '@angular/core';
import { OrderStatusService } from '../services/orderStatus.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  Q_Orders: Order[];
  P_Orders: Order[];
  C_Orders: Order[];
  constructor(private OSS: OrderStatusService) { }

  ngOnInit() {
    this.Q_Orders = this.OSS.queuedOrders;
    this.P_Orders = this.OSS.inProcessOrders;
    this.C_Orders = this.OSS.completedOrders;
  }
  
  moveToProcessing(orderToMove){
    this.OSS.queuedOrders.splice(this.OSS.queuedOrders.indexOf(orderToMove),1);
    this.OSS.inProcessOrders.push(orderToMove);    
  }

  moveToCompleted(orderToMove){
    this.OSS.inProcessOrders.splice(this.OSS.inProcessOrders.indexOf(orderToMove),1);
    this.OSS.completedOrders.push(orderToMove);    
  }

  done(orderToMove){
    this.OSS.completedOrders.splice(orderToMove,1);
  }
}
