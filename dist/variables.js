"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initVariables = exports.updateVariables = void 0;
function updateVariables(instance) {
    const variables = {};
    instance.setVariableValues(variables);
}
exports.updateVariables = updateVariables;
function initVariables(instance) {
    const globalSettings = new Set([]);
    const filteredVariables = [...globalSettings];
    instance.setVariableDefinitions(filteredVariables);
}
exports.initVariables = initVariables;
//# sourceMappingURL=variables.js.map