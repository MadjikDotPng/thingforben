import { InstanceBaseExt } from './utils';
import { OSCSomeArguments } from '@companion-module/base';
import { KlangConfig } from './config';
export interface OSCResponse {
    address: string;
    args: {
        type: string;
        value: any;
    }[];
}
export declare class OSC {
    private readonly instance;
    private oscHost;
    private oscTXPort;
    private oscRXPort;
    private udpPort;
    constructor(instance: InstanceBaseExt<KlangConfig>);
    readonly destroy: () => void;
    readonly Connect: () => void;
    private processData;
    readonly sendCommand: (path: string, args?: OSCSomeArguments) => void;
}
//# sourceMappingURL=osc.d.ts.map