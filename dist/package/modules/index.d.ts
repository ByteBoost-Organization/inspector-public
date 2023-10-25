import type { EventBus } from "./eventBus";
import { RequestCallback } from "./request";
import { BaseEvent } from "./eventBus/types";
export interface BaseModuleState {
    updated: number;
}
export interface SyncDataOptions extends BaseEvent {
    _empty: boolean;
}
export declare abstract class BaseModule<ModuleState extends BaseModuleState> {
    state: ModuleState;
    namespace: string;
    isPolling: boolean;
    private _eventBus;
    constructor(namespace: string);
    get byteboost(): import("../engine").ByteBoost;
    bindEventBus(eventBus: EventBus): void;
    get eventBus(): EventBus;
    onPoll(): void;
    receivePolls(): void;
    abstract boot(): void;
    cleanup(): void;
    abstract build(): ModuleState | Partial<ModuleState>;
    onBuildNeeded(): void;
    unpack(data: ModuleState): void;
    protected bindDefaultPersistantData(data: ModuleState): void;
    pack(): Promise<ModuleState>;
}
interface SyncData<T extends Partial<BaseModuleState>> {
    data: T;
    _syncRequestedAt: number;
}
export interface SyncRequestPayload<T extends BaseModuleState> extends BaseEvent {
    response: RequestCallback;
    responseTimestamp: number;
    data: SyncData<T>;
}
export declare abstract class BaseDataModule<ModuleState extends BaseModuleState> extends BaseModule<ModuleState> {
    syncPathName: string;
    isDataModule: boolean;
    isSyncActive: boolean;
    constructor(namespace: string);
    abstract onSync(payload: SyncRequestPayload<ModuleState>): void;
    initialize(): void;
    formatSyncData(): Partial<ModuleState> | SyncDataOptions | any | null;
    baseFormatSyncData(bus: EventBus): SyncData<Partial<ModuleState>> | null;
    sync(bus: EventBus): void;
    doSync(): void;
    forceSend(): Promise<void>;
}
export {};
