interface BaseWorkerMessage<PayloadType> {
    payload: PayloadType;
    id: string;
}
type SubCallback<PayloadType> = (msg: BaseWorkerMessage<PayloadType>["payload"]) => void;
export declare class WorkerHandler {
    initialized: boolean;
    filePath: string;
    workerState: {
        ready: boolean;
        upgrading: boolean;
    };
    currentWorker?: ServiceWorker;
    workerRegistration?: ServiceWorkerRegistration;
    private _subscriptions;
    private _messageQueue;
    constructor(name: string, workerFilePath: string);
    canCommunicate(): boolean;
    on<PayloadType>(id: string, cb: SubCallback<PayloadType>): void;
    emit(id: string, payload?: any): void;
    private onReady;
    onWorkerMessage(evt: MessageEvent<any>): void;
    registerWorker(worker: ServiceWorker): void;
    kill(): void;
    init(): void;
}
declare const WEB_WORKERS_URL: {
    "screenshot-parser": string;
};
export declare class WebWorker {
    name: keyof typeof WEB_WORKERS_URL;
    filePath: string;
    worker: Worker;
    isActive: boolean;
    _subscriptions: Map<string, (payload: any) => void>;
    unsentMessages: {
        id: string;
        payload: any;
    }[];
    constructor(name: keyof typeof WEB_WORKERS_URL);
    emit<PayloadType>(id: string, payload: PayloadType): void;
    on<PayloadType>(id: string, cb: (payload: PayloadType) => void): void;
    kill(): void;
    start(): void;
    getWorkerUrl(): string;
}
export {};
