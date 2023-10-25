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
export {};
