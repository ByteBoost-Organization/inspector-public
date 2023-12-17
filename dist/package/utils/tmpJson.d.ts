export declare const TEMP_JSON: {
    eventBus: {
        updated: number;
        eventQueue: never[];
        processingEvents: never[];
        eventListeners: null;
        lastEventId: string;
        handledEvents: never[];
    };
    painpointTracker: {
        updated: number;
        tracked: {};
    };
    request: {
        updated: number;
        apiKey: string;
    };
    logger: {
        updated: number;
        debug: {
            logs: never[];
            count: number;
        };
        error: {
            logs: never[];
            count: number;
        };
        info: {
            logs: never[];
            count: number;
        };
        log: {
            logs: {
                value: (string | number)[];
                when: number;
                kind: string;
                where: string;
                _eventId: string;
            }[];
            count: number;
        };
        warn: {
            logs: never[];
            count: number;
        };
        dir: {
            logs: never[];
            count: number;
        };
        dirxml: {
            logs: never[];
            count: number;
        };
        table: {
            logs: never[];
            count: number;
        };
        trace: {
            logs: never[];
            count: number;
        };
        group: {
            logs: never[];
            count: number;
        };
        groupCollapsed: {
            logs: never[];
            count: number;
        };
        groupEnd: {
            logs: never[];
            count: number;
        };
        clear: {
            logs: never[];
            count: number;
        };
        count: {
            logs: never[];
            count: number;
        };
        countReset: {
            logs: never[];
            count: number;
        };
        assert: {
            logs: never[];
            count: number;
        };
        profile: {
            logs: never[];
            count: number;
        };
        profileEnd: {
            logs: never[];
            count: number;
        };
        time: {
            logs: never[];
            count: number;
        };
        timeLog: {
            logs: never[];
            count: number;
        };
        timeEnd: {
            logs: never[];
            count: number;
        };
        timeStamp: {
            logs: never[];
            count: number;
        };
        context: {
            logs: never[];
            count: number;
        };
        createTask: {
            logs: never[];
            count: number;
        };
        memory: {
            logs: never[];
            count: number;
        };
    };
    errors: {
        updated: number;
        errors: never[];
    };
    navigations: {
        updated: number;
        navigations: {
            from: string;
            to: string;
            when: number;
            _eventId: string;
        }[];
        currentPath: {
            pathname: string;
        };
    };
    clicks: {
        updated: number;
        clicks: {
            x: number;
            y: number;
            when: number;
            count: number;
            element: {
                innerHTML: string;
                outerHTML: string;
                scrollHeight: number;
                scrollLeft: number;
                scrollTop: number;
                scrollWidth: number;
                clientHeight: number;
                clientLeft: number;
                clientTop: number;
                clientWidth: number;
            };
            where: string;
            _eventId: string;
        }[];
    };
    screenshots: {
        updated: number;
        screenshots: {
            when: number;
            where: string;
            compressed: string;
        }[];
    };
    session_requests: {
        updated: number;
        requests: ({
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "upgrade-insecure-requests": string;
                    "user-agent": string;
                    "cache-control"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "cache-control": string;
                    "content-encoding": string;
                    "content-type": string;
                    date: string;
                    expires: string;
                    pragma: string;
                    server: string;
                    vary: string;
                    "x-powered-by": string;
                    "accept-ranges"?: undefined;
                    "content-length"?: undefined;
                    etag?: undefined;
                    "last-modified"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "cache-control"?: undefined;
                    "content-encoding"?: undefined;
                    "content-type"?: undefined;
                    date?: undefined;
                    expires?: undefined;
                    pragma?: undefined;
                    server?: undefined;
                    vary?: undefined;
                    "x-powered-by"?: undefined;
                    "accept-ranges"?: undefined;
                    "content-length"?: undefined;
                    etag?: undefined;
                    "last-modified"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "accept-ranges": string;
                    "content-length": string;
                    "content-type": string;
                    date: string;
                    etag: string;
                    "last-modified": string;
                    server: string;
                    "cache-control"?: undefined;
                    "content-encoding"?: undefined;
                    expires?: undefined;
                    pragma?: undefined;
                    vary?: undefined;
                    "x-powered-by"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "cache-control": string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "cache-control"?: undefined;
                    "content-encoding"?: undefined;
                    "content-type"?: undefined;
                    date?: undefined;
                    expires?: undefined;
                    pragma?: undefined;
                    server?: undefined;
                    vary?: undefined;
                    "x-powered-by"?: undefined;
                    "accept-ranges"?: undefined;
                    "content-length"?: undefined;
                    etag?: undefined;
                    "last-modified"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "cache-control": string;
                    "content-encoding": string;
                    "content-type": string;
                    date: string;
                    expires: string;
                    pragma: string;
                    server: string;
                    vary: string;
                    "x-powered-by": string;
                    "accept-ranges"?: undefined;
                    "content-length"?: undefined;
                    etag?: undefined;
                    "last-modified"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "content-type": string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "cache-control": string;
                    "content-length": string;
                    "content-type": string;
                    expires: string;
                    "last-modified": string;
                    pragma: string;
                    "content-encoding"?: undefined;
                    date?: undefined;
                    server?: undefined;
                    vary?: undefined;
                    "x-powered-by"?: undefined;
                    "accept-ranges"?: undefined;
                    etag?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "access-control-allow-origin": string;
                    "cache-control": string;
                    "content-length": string;
                    "content-type": string;
                    etag: string;
                    "last-modified": string;
                    "content-encoding"?: undefined;
                    date?: undefined;
                    expires?: undefined;
                    pragma?: undefined;
                    server?: undefined;
                    vary?: undefined;
                    "x-powered-by"?: undefined;
                    "accept-ranges"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "content-type": string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "cache-control"?: undefined;
                    "content-encoding"?: undefined;
                    "content-type"?: undefined;
                    date?: undefined;
                    expires?: undefined;
                    pragma?: undefined;
                    server?: undefined;
                    vary?: undefined;
                    "x-powered-by"?: undefined;
                    "accept-ranges"?: undefined;
                    "content-length"?: undefined;
                    etag?: undefined;
                    "last-modified"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        } | {
            request: {
                method: string;
                referrer: string;
                url: string;
                when: number;
                requestHeaders: {
                    accept: string;
                    "user-agent": string;
                    "upgrade-insecure-requests"?: undefined;
                    "cache-control"?: undefined;
                    "content-type"?: undefined;
                };
                responseFailed: boolean;
                status: number;
                statusText: string;
                ok: boolean;
                type: string;
                redirected: boolean;
                took: number;
                responseHeaders: {
                    "content-encoding": string;
                    "content-type": string;
                    date: string;
                    etag: string;
                    "last-modified": string;
                    server: string;
                    vary: string;
                    "cache-control"?: undefined;
                    expires?: undefined;
                    pragma?: undefined;
                    "x-powered-by"?: undefined;
                    "accept-ranges"?: undefined;
                    "content-length"?: undefined;
                    "access-control-allow-origin"?: undefined;
                };
            };
        })[];
    };
    pinger: {
        updated: number;
    };
};
