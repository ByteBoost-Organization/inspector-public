import { Painpoint } from "./types";
export declare const preflightChecks: () => Promise<false | {
    success: boolean;
    obfuscateLevel: number;
    painpoints: Array<Painpoint>;
    minified: boolean;
}>;
export declare const askForSession: () => Promise<boolean>;
