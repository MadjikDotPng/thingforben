"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConfigFields = void 0;
const base_1 = require("@companion-module/base");
const GetConfigFields = () => {
    return [
        {
            type: 'static-text',
            width: 12,
            value: '',
            id: 'info',
            label: '',
        },
        {
            type: 'textinput',
            id: 'host',
            label: 'The IP of the Klang unit',
            width: 12,
            default: '127.0.0.1',
            regex: base_1.Regex.IP,
        },
        {
            type: 'number',
            id: 'tx_port',
            label: 'Sending port',
            width: 6,
            default: 9110,
            min: 1,
            max: 65535,
            step: 1,
        },
        {
            type: 'dropdown',
            id: 'type',
            label: 'Klang device',
            width: 6,
            default: 'vokal',
            choices: [
                {
                    id: 'vokal',
                    label: 'KLANG:vokal',
                },
                {
                    id: 'konductor',
                    label: 'KLANG:konductor',
                },
                {
                    id: 'dmi',
                    label: 'DMI-KLANG',
                },
            ],
        },
    ];
};
exports.GetConfigFields = GetConfigFields;
//# sourceMappingURL=config.js.map