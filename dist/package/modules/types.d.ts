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
