import { BaseDataModule, BaseModuleState, SyncRequestPayload } from ".";
import { BaseEvent } from "./eventBus/types";
interface PathInfo {
    pathname: string;
}
interface Navigation extends BaseEvent {
    from: string;
    to: string;
    when: number;
}
interface IState extends BaseModuleState {
    navigations: Navigation[];
    currentPath: PathInfo;
}
export declare class Navigations extends BaseDataModule<IState> {
    lastScreenshotTime: number;
    private _obfuscateLevel;
    constructor();
    get obfuscateLevel(): number;
    handlePath(): void;
    getFormattedPath(): string;
    onPoll(): void;
    boot(): void;
    formatSyncData(): Record<string, any>;
    onSync(payload: SyncRequestPayload<IState>): void;
    build(): {
        navigations: never[];
        currentPath: {
            pathname: string;
        };
    };
}
export {};
