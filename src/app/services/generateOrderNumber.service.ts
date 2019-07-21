export class GenerateOrderNumberService{
    private orderId: number = 0;

    getOrderID(): number{
        return ++this.orderId;
    }
}