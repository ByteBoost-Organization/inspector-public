import { ByteEvent } from ".";
export type BeforeMiddleware = (nextEvent: ByteEvent<any>) => boolean;
export interface BaseEvent {
    _eventId?: string;
}
export type EventListenerMethod<PayloadType> = ((payload: PayloadType) => void) | ((payload: PayloadType) => Promise<void>);
