import { BaseModule, BaseModuleState } from ".";
import { RequestModule } from "./request";
export declare class Pinger extends BaseModule<BaseModuleState> {
    requestModule: RequestModule;
    lastPingTimestamp: number;
    constructor();
    onPoll(): Promise<void>;
    boot(): void;
    build(): BaseModuleState | Partial<BaseModuleState>;
}
