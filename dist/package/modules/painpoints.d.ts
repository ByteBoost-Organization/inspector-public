import { BaseModule, BaseModuleState } from ".";
import { ComparisonPainpoint, CountPainpoint, Painpoint } from "../types";
import { BaseEvent } from "./eventBus/types";
type TrackedCountPainpoint = {
    kind: "count";
    count: number;
};
type TrackedComparisonPainpoint = {
    kind: "comparison";
    getter: string;
    matcher: any;
};
type TrackedPainpoint = {
    kind: Painpoint["kind"];
} & (TrackedCountPainpoint | TrackedComparisonPainpoint);
interface IState extends BaseModuleState {
    tracked: Record<string, TrackedPainpoint>;
}
export declare class PainpointTracker extends BaseModule<IState> {
    painpoints: Record<string, Painpoint>;
    constructor();
    painpointReached(): void;
    checkComparisonPainpoint(eventId: string, info: ComparisonPainpoint, event: BaseEvent): void;
    checkCountPainpoint(eventId: string, info: CountPainpoint, event: BaseEvent): void;
    onEventDispatched(eventId: string, event: BaseEvent): void;
    boot(): void;
    build(): {
        tracked: {};
    };
}
export {};
