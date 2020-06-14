import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@ticketing-pkgs/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
