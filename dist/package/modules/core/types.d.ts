import { BaseEvent } from "../eventBus/types";
export interface BaseClickEvent extends BaseEvent {
    x: number;
    y: number;
    when: number;
    count: number;
}
export interface ElementData {
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
export interface ElementClickEvent extends BaseClickEvent {
    element: ElementData;
    where: string;
}
export type RequestInfo = {
    method: string;
    referrer: string;
    url: string;
    status: number;
    statusText: string;
    ok: boolean;
    type: string;
    redirected: boolean;
    when: number;
    took: number;
    responseHeaders: Record<string, any>;
    requestHeaders: Record<string, any>;
    responseFailed: boolean;
};
export declare enum ObfuscateLevel {
    "HIGH" = 2,
    "MEDIUM" = 1,
    "LOW" = 0
}
