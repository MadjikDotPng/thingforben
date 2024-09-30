"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSC = void 0;
const base_1 = require("@companion-module/base");
const osc = require('osc'); // eslint-disable-line
class OSC {
    instance;
    oscHost = '';
    oscTXPort = 5000;
    oscRXPort = 8000;
    udpPort;
    constructor(instance) {
        this.instance = instance;
        this.Connect();
    }
    destroy = () => {
        if (this.udpPort)
            this.udpPort.close();
        return;
    };
    Connect = () => {
        this.oscHost = this.instance.config.host || '127.0.0.1';
        this.oscTXPort = this.instance.config.tx_port || 9110;
        this.instance.updateStatus(base_1.InstanceStatus.Connecting);
        this.udpPort = new osc.UDPPort({
            localAddress: '0.0.0.0',
            localPort: this.oscRXPort,
            metadata: true,
        });
        //Listen for incoming OSC messages.
        this.udpPort.on('message', (oscMsg) => {
            // this.instance.log('info', JSON.stringify(oscMsg))
            // eslint-disable-next-line  @typescript-eslint/no-floating-promises
            this.processData(oscMsg);
        });
        this.udpPort.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                this.instance.log('error', 'Error: Selected port in use.' + err.message);
            }
        });
        // Open the socket.
        this.udpPort.open();
        // When the port is read
        this.udpPort.on('ready', () => {
            this.instance.log('info', `Listening to Klang on port: ${this.oscRXPort}`);
            this.instance.updateStatus(base_1.InstanceStatus.Ok);
        });
        return;
    };
    processData = async (data) => {
        this.instance.ReceiveOSCResponse(data);
    };
    sendCommand = (path, args) => {
        // this.instance.log('debug', `sending ${JSON.stringify(path)} ${args ? JSON.stringify(args) : ''}`)
        this.udpPort.send({
            address: path,
            args: args ? args : [],
        }, this.oscHost, this.oscTXPort);
    };
}
exports.OSC = OSC;
//# sourceMappingURL=osc.js.map