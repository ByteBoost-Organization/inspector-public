import { EventBus } from ".";
export declare class EventBusWatcher {
    eventBus: EventBus;
    timeout: number;
    startTime: number;
    cycle: number;
    cyclesTrackingInterval: number;
    utopiaInterval: {
        cycles: number;
        time: number;
    };
    constructor(eventBus: EventBus);
    setTimeout(ms: number): void;
    getCycleTrackingInterval(timeout: number): number;
    evaluate(): void;
    reset(): void;
    onNewPoll(): void;
    getPollTime(): number;
}
