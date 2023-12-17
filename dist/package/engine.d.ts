import type { IPersistantData, Painpoint } from "./types";
import { IModules } from "./types";
export declare const BASE_API_URL = "https://external.api.byteboost.io";
export declare class ByteBoost {
    modules: IModules;
    performance: typeof window.performance;
    navigator: typeof window.navigator;
    initializedAt: number;
    private apiKey;
    private obfuscateLevel;
    private _devMode;
    minified: boolean;
    painpoints: Painpoint[];
    constructor(options: {
        apiKey: string;
        startByteboost: () => void;
        obfuscateLevel: number;
        painpoints: Painpoint[];
        minified: boolean;
    });
    handleModuleSync(ifCanSendImmediately?: boolean): void;
    initializeModules(): void;
    onEventBusPoll(): void;
    isGatheringSession: boolean;
    unminify(): Promise<void>;
    getModule<Module>(namespace: keyof IModules): Module | undefined;
    getApiKey(): string;
    debug(...rest: any[]): void;
    info(...rest: any[]): void;
    warn(...rest: any[]): void;
    error(...rest: any[]): void;
    compilePersistantData(): Promise<IPersistantData>;
    purge(): Promise<void>;
    getPersistantData(): IPersistantData | false;
    logStateItems(): void;
    cleanup(): Promise<void>;
    getObfuscateLevel(): number;
}
