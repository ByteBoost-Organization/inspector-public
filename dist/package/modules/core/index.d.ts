import { WebWorker, WorkerHandler } from "package/utils/workerHandler";
import { BaseDataModule, BaseModuleState, SyncRequestPayload } from "..";
import { BaseClickEvent, ElementClickEvent, ElementData, RequestInfo } from "./types";
import { BaseEvent } from "../eventBus/types";
interface PathInfo {
    pathname: string;
}
interface Navigation extends BaseEvent {
    from: string;
    to: string;
    when: number;
}
type ClickAction = BaseClickEvent | ElementClickEvent;
interface Screenshot extends BaseEvent {
    compressed: string;
    when: number;
    where: string;
}
interface RequestsEvent extends BaseEvent {
    requests: RequestInfo[];
}
interface RequestEvent extends BaseEvent {
    request: RequestInfo;
}
interface MetaUpdate extends BaseEvent {
    screen?: {
        width: number;
        height: number;
    };
    when: number;
}
interface IState extends BaseModuleState {
    navigations: Navigation[];
    currentPath: PathInfo;
    clicks: ClickAction[];
    screenshots: Screenshot[];
    requests: RequestEvent[];
    metaUpdates: MetaUpdate[];
}
export declare class Core extends BaseDataModule<IState> {
    networkTracker: WorkerHandler;
    screenshotWorker: WebWorker;
    lastScreenshotTime: number;
    private _obfuscateLevel;
    lastMetaScreen: MetaUpdate["screen"];
    constructor();
    get obfuscateLevel(): number;
    handlePath(): void;
    getFormattedPath(): string;
    onPoll(): void;
    gotClick(action: ClickAction): void;
    gatherRelevantElementData(element: HTMLElement, isExtension?: boolean): ElementData;
    getAppropriateClickEvent(evt: MouseEvent, when?: number): BaseClickEvent;
    boundedClickListener(evt: MouseEvent): void;
    captureScreenshot(force?: boolean): Promise<void>;
    handleRequests(payload: RequestsEvent): void;
    handleWindowSize(): void;
    boot(): void;
    formatSyncData(): Record<string, any>;
    onSync(payload: SyncRequestPayload<IState>): void;
    cleanup(): void;
    getMousePos(event: MouseEvent): {
        x: number;
        y: number;
    };
    build(): {
        navigations: never[];
        currentPath: {
            pathname: string;
        };
        clicks: never[];
        screenshots: never[];
        requests: never[];
        metaUpdates: never[];
    };
}
export {};
