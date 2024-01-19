import { WorkerHandler } from "./utils/workerHandler";
export declare const setupPersistantWorkers: () => Promise<void>;
export declare const killPersistantWorkers: () => Promise<void>;
export declare const getPersistantWorker: (name: string) => WorkerHandler | undefined;
