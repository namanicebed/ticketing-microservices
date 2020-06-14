import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@ticketing-pkgs/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
