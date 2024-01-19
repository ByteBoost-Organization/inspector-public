import { BaseDataModule, BaseModuleState, SyncRequestPayload } from ".";
import type { Navigations } from "./navigations";
import { BaseEvent } from "./eventBus/types";
import type { Screenshots } from "./screenshot";
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
    screenshots: Screenshots;
    navigations: Navigations;
    constructor();
    processError(err: BaseError): void;
    handledRejectionError(evt: Event): void;
    unhandledRejectionError(evt: PromiseRejectionEvent): void;
    boot(): void;
    cleanup(): void;
    formatSyncData(): IState | {
        _empty: boolean;
    };
    onSync(payload: SyncRequestPayload<IState>): void;
    build(): {
        errors: never[];
    };
}
export {};
