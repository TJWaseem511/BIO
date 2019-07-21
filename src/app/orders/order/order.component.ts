import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;
  @Input() color: String;
  constructor() { }

  ngOnInit() {
  }

}
