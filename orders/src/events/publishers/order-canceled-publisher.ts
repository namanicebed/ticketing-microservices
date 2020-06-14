import {
  Subjects,
  OrderCanceledEvent,
  Publisher,
} from "@ticketing-pkgs/common";

export class OrderCanceledPublisher extends Publisher<OrderCanceledEvent> {
  readonly subject = Subjects.OrderCanceled;
}
