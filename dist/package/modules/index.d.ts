import type { EventBus } from "./eventBus";
import { RequestCallback } from "./request";
import { BaseEvent, EventListenerMethod } from "./eventBus/types";
import { GarbageCollector } from "../garbageCollector";
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
    isDataModule: boolean;
    private _eventBus;
    garbageCollector: GarbageCollector;
    constructor(namespace: string);
    get byteboost(): import("../engine").ByteBoost;
    bindEventBus(eventBus: EventBus): void;
    get eventBus(): EventBus;
    onEngineUnminified(): void;
    emit<PayloadType extends BaseEvent>(id: string, payload: PayloadType, priority?: number): void;
    on<PayloadType extends BaseEvent>(id: string, cb: EventListenerMethod<PayloadType>): void;
    onPoll(): void;
    receivePolls(): void;
    bootPreload(): void;
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
    didLastRequestSucceed: boolean;
    isDataModule: boolean;
    canSync: boolean;
    constructor(namespace: string);
    abstract onSync(payload: SyncRequestPayload<ModuleState>): void;
    formatSyncData(): Partial<ModuleState> | SyncDataOptions | any | null;
    baseFormatSyncData(bus: EventBus): SyncData<Partial<ModuleState>> | null;
    sync(bus: EventBus, sendImmediately?: boolean): void;
    stopSync(): void;
    startSync(sendImmediately?: boolean): void;
    doSync(sendImmediately?: boolean): void;
    forceSend(): void;
}
export {};
