import type { ByteBoost } from "./engine";
import { BaseModule } from "./modules";
import { WorkerHandler } from "./utils/workerHandler";
declare global {
    interface Window {
        _byteboost: ByteBoost;
        byteboostKey?: string;
        _startingByteboost?: boolean;
        _byteboost_workers: Map<string, WorkerHandler>;
    }
}
export interface IModules {
    [key: string]: {
        namespace: string;
        module: BaseModule<any>;
    };
}
export interface IPersistantData {
    [key: keyof IModules]: any;
}
