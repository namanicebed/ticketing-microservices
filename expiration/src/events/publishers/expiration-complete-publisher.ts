import {
  ExpirationCompleteEvent,
  Subjects,
  Publisher,
} from "@ticketing-pkgs/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    readonly subject = Subjects.ExpirationComplete
}