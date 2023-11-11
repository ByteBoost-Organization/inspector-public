import type { IPersistantData } from "./types";
import { IModules } from "./types";
export declare const BASE_API_URL = "https://external.api.byteboost.io";
export declare class ByteBoost {
    modules: IModules;
    performance: typeof window.performance;
    navigator: typeof window.navigator;
    initializedAt: number;
    private apiKey;
    private obfuscateLevel;
    private doFullByteBoostRestart;
    constructor(options: {
        apiKey: string;
        startByteboost: () => void;
        obfuscateLevel: number;
    });
    initializeModules(): void;
    getModule<Module>(namespace: keyof IModules): Module | undefined;
    getApiKey(): string;
    debug(...rest: any[]): void;
    info(...rest: any[]): void;
    warn(...rest: any[]): void;
    error(...rest: any[]): void;
    compilePersistantData(): Promise<IPersistantData>;
    purge(): Promise<void>;
    forceReload(): Promise<void>;
    getPersistantData(): IPersistantData | false;
    cleanup(): Promise<void>;
    getObfuscateLevel(): number;
}
export {};
