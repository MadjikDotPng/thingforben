"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("@companion-module/base");
const config_1 = require("./config");
const actions_1 = require("./actions");
const feedback_1 = require("./feedback");
const presets_1 = require("./presets");
const variables_1 = require("./variables");
const osc_1 = require("./osc");
const upgrade_1 = require("./upgrade");
class KlangInstance extends base_1.InstanceBase {
    config = {
        label: '',
        host: '',
        tx_port: 0,
        type: '',
    };
    OSC = null;
    constructor(internal) {
        super(internal);
        this.instanceOptions.disableVariableValidation = true;
    }
    async configUpdated(config) {
        this.log('info', 'Starting');
        this.config = config;
        this.saveConfig(config);
        this.log('info', 'Updating config!');
        if (this.OSC)
            this.OSC.destroy();
        this.OSC = new osc_1.OSC(this);
        this.updateInstance();
    }
    getConfigFields() {
        return (0, config_1.GetConfigFields)();
    }
    async init(config) {
        this.log('info', `Welcome, Klang module is being initialized`);
        await this.configUpdated(config);
    }
    async destroy() {
        this.log('debug', `Instance destroyed: ${this.id}`);
        this.OSC?.destroy();
    }
    updateInstance() {
        (0, variables_1.initVariables)(this);
        (0, variables_1.updateVariables)(this);
        this.setActionDefinitions((0, actions_1.GetActions)(this));
        this.setFeedbackDefinitions((0, feedback_1.GetFeedbacks)());
        this.setPresetDefinitions((0, presets_1.GetPresetList)());
    }
    InitVariables() {
        (0, variables_1.initVariables)(this);
    }
    UpdateVariablesValues() {
        (0, variables_1.updateVariables)(this);
    }
    ReceiveOSCResponse() {
        this.updateStatus(base_1.InstanceStatus.Ok);
        this.UpdateVariablesValues();
    }
}
(0, base_1.runEntrypoint)(KlangInstance, (0, upgrade_1.getUpgrades)());
//# sourceMappingURL=index.js.map