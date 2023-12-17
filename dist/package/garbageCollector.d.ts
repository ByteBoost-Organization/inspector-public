import { BaseModule } from "./modules";
export type IGarbageOptimization = Record<string, {
    count: number;
}>;
export declare class GarbageCollector {
    myModule: BaseModule<any>;
    optimization: IGarbageOptimization;
    isOptimizing: boolean;
    constructor(_module: BaseModule<any>);
    setOptimization(optimization: IGarbageOptimization): void;
    collect(): void;
}
