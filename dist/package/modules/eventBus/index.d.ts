import { BaseDataModule, BaseModule, BaseModuleState, SyncRequestPayload } from "../";
import { BaseEvent, BeforeMiddleware } from "./types";
type EventListenerMethod<PayloadType> = ((payload: PayloadType) => void) | ((payload: PayloadType) => Promise<void>);
interface IData extends BaseModuleState {
    eventQueue: ByteEvent<any>[];
    processingEvents: ByteEvent<any>[];
    eventListeners: {
        [identifier: string]: Array<EventListenerMethod<any>>;
    } | null;
    handledEvents: FlatByteEvent[];
    lastEventId: string;
}
interface ByteEventMeta {
    dispatched: number;
}
export interface FlatByteEvent {
    id: string;
    eventId: string;
    payload: any;
    priority: number;
    delay: {
        waited: number;
        toWait: number;
        lastPoll: number;
    };
    _meta: ByteEventMeta;
    when: number;
}
export declare class ByteEvent<PayloadType extends BaseEvent> {
    id: string;
    payload: PayloadType;
    eventId: string;
    _meta: ByteEventMeta;
    delay: {
        waited: number;
        toWait: number;
        lastPoll: number;
    };
    when: number;
    priority: number;
    constructor(app: string, identifier: string, payload: PayloadType, priority?: number);
    isValid(): boolean;
    setPayload(payload: PayloadType): void;
    sharpen(flatEvent: FlatByteEvent): this;
    flatten(): FlatByteEvent;
    wait(ms: number): this;
    copy(): ByteEvent<PayloadType>;
}
export declare class EventBus extends BaseDataModule<IData> {
    polling: boolean;
    middlewares: {
        before: Array<BeforeMiddleware>;
        after: Array<any>;
    };
    modulesToPoll: BaseModule<any>[];
    private _poll;
    private _garbage;
    constructor();
    toByteId(app: string, id: string): string;
    dispatch<PayloadType extends BaseEvent>(app: string, id: string, payload: PayloadType): void;
    dispatchEvent<PayloadType extends BaseEvent>(event: ByteEvent<PayloadType>): void;
    listen<PayloadType extends BaseEvent>(app: string, id: string, cb: EventListenerMethod<PayloadType>): void;
    getNextEvent(): ByteEvent<any>;
    removeNextEvent(): ByteEvent<any> | undefined;
    private before;
    addModulePolling(module: BaseModule<any>): void;
    enginePoll(): void;
    private after;
    sleep(ms: number): Promise<void>;
    private runEventContext;
    private dispatchNextProcessedEvent;
    private poll;
    declareGarbage(app: string, id: string): void;
    formatSyncData(): {
        handledEvents: any;
    };
    onSync(payload: SyncRequestPayload<IData>): void;
    private removeHandledEvents;
    private getHandledEvent;
    cleanSyncedData<Type extends BaseEvent[]>(data: Type, payload: SyncRequestPayload<any>): Type;
    boot(): void;
    cleanup(): void;
    isGarbageEvent(event: ByteEvent<any>): boolean;
    removeGarbageEvents(queue: ByteEvent<any>[]): ByteEvent<any>[];
    packEventList(list: ByteEvent<any>[]): ByteEvent<any>[];
    unpackEventList(list?: ByteEvent<any>[]): ByteEvent<{}>[];
    pack(): Promise<IData>;
    unpack(data: IData): void;
    build(): IData | Partial<IData>;
}
export {};
