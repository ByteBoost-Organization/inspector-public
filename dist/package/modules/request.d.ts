import { BaseModule, BaseModuleState } from ".";
import { FlatByteEvent } from "./eventBus";
import { BaseEvent } from "./eventBus/types";
export interface RequestDesciptor extends BaseEvent {
    path: string;
    event: FlatByteEvent;
    data: any;
}
interface IData extends BaseModuleState {
}
export interface RequestCallback extends BaseEvent {
    status: number;
    body: any;
    success: boolean;
}
export declare class RequestModule extends BaseModule<IData> {
    private persistantHeaders;
    lastPostTimestamp: number;
    constructor();
    isSuccessResponse(status: number): boolean;
    handleStatusCode(status: number): void;
    post(path: string, body: any): Promise<RequestCallback>;
    get(path: string): Promise<RequestCallback>;
    boot(): void;
    build(): IData | Partial<IData>;
}
export {};
