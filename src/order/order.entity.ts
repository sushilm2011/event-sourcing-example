import { v4 as uuidv4 } from 'uuid';
import { OrderCancelled, OrderCreated, OrderShipped } from './order.events';

export class Order {
  id: string;
  status: 'CREATED' | 'SHIPPED' | 'CANCELLED';
  events: any[] = [];

  constructor() {
    this.id = uuidv4();
    this.status = 'CREATED';
  }

  applyOrderCreated() {
    this.events.push(new OrderCreated(this.id));
    this.status = 'CREATED';
  }

  applyOrderShipped() {
    this.events.push(new OrderShipped(this.id));
    this.status = 'SHIPPED';
  }

  applyOrderCancelled() {
    this.events.push(new OrderCancelled(this.id));
    this.status = 'CANCELLED';
  }
}