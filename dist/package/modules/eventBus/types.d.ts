import { ByteEvent } from ".";
export type BeforeMiddleware = (nextEvent: ByteEvent<any>) => boolean;
export interface BaseEvent {
    _eventId?: string;
}
