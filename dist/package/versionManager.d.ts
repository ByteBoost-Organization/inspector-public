import { ByteBoost } from "./engine";
export declare class VersionManager {
    byteboost: ByteBoost;
    version: string;
    constructor(bb: ByteBoost);
    saveVersion(): void;
    handleVersion(): void;
}
