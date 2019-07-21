export class Order{
    orderId: number;
    customer_name: string;
    item_selected: string;

    constructor(orderId: number, customer_name: string, item_selected: string,){
        this.orderId = orderId;
        this.customer_name = customer_name;
        this.item_selected = item_selected;
    }
}