import { Order } from "./order.entity";
import { OrderCancelled, OrderCreated, OrderShipped } from "./order.events";

export const replayEvents = (order: Order, events: any[]) => {
  for (const event of events) {
    if (event instanceof OrderCreated) {
      order.status = 'CREATED';
    } else if (event instanceof OrderShipped) {
      order.status = 'SHIPPED';
    } else if (event instanceof OrderCancelled) {
      order.status = 'CANCELLED';
    }
  }
}