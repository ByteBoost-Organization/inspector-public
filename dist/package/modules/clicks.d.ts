import { BaseDataModule, BaseModuleState, SyncRequestPayload } from ".";
import { BaseEvent } from "./eventBus/types";
interface BaseClickEvent extends BaseEvent {
    x: number;
    y: number;
    when: number;
    count: number;
}
interface ElementData {
    innerHTML?: string;
    outerHTML?: string;
    scrollHeight?: number;
    scrollLeft?: number;
    scrollLeftMax?: number;
    scrollTop?: number;
    scrollTopMax?: number;
    scrollWidth?: number;
    clientHeight: number;
    clientLeft: number;
    clientTop: number;
    clientWidth: number;
    attrId?: string;
    attrClassName?: string;
    attrStyle?: string;
}
interface ElementClickEvent extends BaseClickEvent {
    element: ElementData;
    where: string;
}
type ClickAction = BaseClickEvent | ElementClickEvent;
interface IState extends BaseModuleState {
    clicks: ClickAction[];
}
export declare class Clicks extends BaseDataModule<IState> {
    private _syncStatus;
    constructor();
    getMousePos(event: MouseEvent): {
        x: number;
        y: number;
    };
    onClick(action: ClickAction): void;
    gatherRelevantElementData(element: HTMLElement): ElementData;
    getAppropriateClickEvent(evt: MouseEvent, when?: number): BaseClickEvent;
    boundedClickListener(evt: MouseEvent): void;
    boot(): void;
    build(): {
        clicks: never[];
    };
    cleanup(): void;
    formatSyncData(): Record<string, any>;
    onSync(payload: SyncRequestPayload<IState>): void;
}
export {};
