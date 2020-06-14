import {
  Publisher,
  PaymentCreatedEvent,
  Subjects,
} from "@ticketing-pkgs/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
