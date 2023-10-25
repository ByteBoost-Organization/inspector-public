import { BaseDataModule, BaseModuleState, SyncDataOptions, SyncRequestPayload } from ".";
import { Core } from "./core";
import { BaseEvent } from "./eventBus/types";
export interface LogDetail extends BaseEvent {
    value: any[];
    when: number;
    kind: ConsoleType;
    where: string;
}
interface SyncLogDetail {
    when: LogDetail["when"];
    kind: LogDetail["kind"];
    value: string;
    where: string;
}
interface LogInfo {
    logs: Array<LogDetail>;
    count: number;
}
interface ISyncData {
    logs: Array<SyncLogDetail>;
}
interface IData extends BaseModuleState {
    debug: LogInfo;
    error: LogInfo;
    info: LogInfo;
    log: LogInfo;
    warn: LogInfo;
    dir: LogInfo;
    dirxml: LogInfo;
    table: LogInfo;
    trace: LogInfo;
    group: LogInfo;
    groupCollapsed: LogInfo;
    groupEnd: LogInfo;
    clear: LogInfo;
    count: LogInfo;
    countReset: LogInfo;
    assert: LogInfo;
    profile: LogInfo;
    profileEnd: LogInfo;
    time: LogInfo;
    timeLog: LogInfo;
    timeEnd: LogInfo;
    timeStamp: LogInfo;
    context: LogInfo;
    createTask: LogInfo;
    memory: LogInfo;
}
export declare enum ConsoleType {
    DEBUG = "debug",
    ERROR = "error",
    INFO = "info",
    LOG = "log",
    WARN = "warn",
    DIR = "dir",
    DIRXML = "dirxml",
    TABLE = "table",
    TRACE = "trace",
    GROUP = "group",
    GROUPCOLLAPSED = "groupCollapsed",
    GROUPEND = "groupEnd",
    CLEAR = "clear",
    COUNT = "count",
    COUNTRESET = "countReset",
    ASSERT = "assert",
    PROFILE = "profile",
    PROFILEEND = "profileEnd",
    TIME = "time",
    TIMELOG = "timeLog",
    TIMEEND = "timeEnd",
    TIMESTAMP = "timeStamp",
    CONTEXT = "context",
    CREATETASK = "createTask",
    MEMORY = "memory"
}
export declare class Logger extends BaseDataModule<IData> {
    logTrackingEnabled: boolean;
    minLogsLength: number;
    maxLogsLength: number;
    bindedConsoleMethods: ConsoleType[];
    core?: Core;
    constructor();
    build(): {};
    cleanCircularLogObjects(): void;
    cleanup(): void;
    pack(): Promise<IData>;
    formatSyncData(): ISyncData | null | SyncDataOptions;
    onSync(payload: SyncRequestPayload<IData>): void;
    boot(): void;
    handleMemoryFor(key: ConsoleType): void;
    trackLog(kind: ConsoleType, ...rest: any[]): Promise<void>;
}
export {};
