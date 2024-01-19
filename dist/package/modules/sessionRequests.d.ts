import { BaseDataModule, BaseModuleState, SyncRequestPayload } from ".";
import { WorkerHandler } from "../utils/workerHandler";
import { BaseEvent } from "./eventBus/types";
import { RequestInfo } from "./types";
interface RequestsEvent extends BaseEvent {
    requests: RequestInfo[];
}
interface RequestEvent extends BaseEvent {
    request: RequestInfo;
}
interface IState extends BaseModuleState {
    requests: RequestEvent[];
}
export declare class SessionRequests extends BaseDataModule<IState> {
    networkTracker: WorkerHandler;
    private _obfuscateLevel;
    constructor();
    get obfuscateLevel(): number;
    onPoll(): void;
    handleRequests(payload: RequestsEvent): void;
    boot(): void;
    build(): {
        requests: never[];
    };
    formatSyncData(): Record<string, any>;
    onSync(payload: SyncRequestPayload<IState>): void;
}
export {};
