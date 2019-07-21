import { Order } from '../model/order.model';

export class OrderStatusService{

    queuedOrders: Order[] = [];
    inProcessOrders: Order[] = [];
    completedOrders: Order[] = [];
}