import { BaseDataModule, BaseModuleState, SyncRequestPayload } from ".";
import { WebWorker } from "../utils/workerHandler";
import { BaseEvent } from "./eventBus/types";
interface Screenshot extends BaseEvent {
    compressed: string;
    when: number;
    where: string;
    viewport: {
        width: number;
        height: number;
    };
}
interface ScreenshotInTransport {
    when: number;
    where: string;
    document: Uint8Array;
    obfuscateLevel: number;
    viewport: {
        width: number;
        height: number;
    };
}
interface IState extends BaseModuleState {
    screenshots: Screenshot[];
}
export declare class Screenshots extends BaseDataModule<IState> {
    screenshotWorker: WebWorker;
    lastScreenshotTime: number;
    private _obfuscateLevel;
    constructor();
    get obfuscateLevel(): number;
    getViewport(): {
        width: number;
        height: number;
    };
    captureScreenshot(force?: boolean): Promise<void>;
    onScreenshotFromWorker(payload: ScreenshotInTransport): void;
    boot(): void;
    build(): {
        screenshots: never[];
    };
    cleanup(): void;
    formatSyncData(): IState | {
        _empty: boolean;
    };
    onSync(payload: SyncRequestPayload<IState>): void;
}
export {};
