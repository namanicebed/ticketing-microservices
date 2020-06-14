import { Subjects, OrderCreatedEvent, Publisher } from "@ticketing-pkgs/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
