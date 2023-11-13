import { BaseDataModule, BaseModuleState, SyncRequestPayload } from ".";
import { Core } from "./core";
import { BaseEvent } from "./eventBus/types";
interface TrackedError extends BaseEvent {
    when: number;
    message: string;
    stack?: string;
    where: string;
}
interface BaseError {
    message: {
        stack: string;
        message: string;
    };
}
interface IState extends BaseModuleState {
    errors: TrackedError[];
}
export declare class ErrorModule extends BaseDataModule<IState> {
    core: Core;
    constructor();
    processError(err: BaseError): void;
    handledRejectionError(evt: Event): void;
    unhandledRejectionError(evt: PromiseRejectionEvent): void;
    cleanup(): void;
    boot(): void;
    formatSyncData(): IState | {
        _empty: boolean;
    };
    onSync(payload: SyncRequestPayload<IState>): void;
    build(): {
        errors: never[];
    };
}
export {};
