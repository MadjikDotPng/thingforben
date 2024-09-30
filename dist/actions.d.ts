import { CompanionActionDefinitions } from '@companion-module/base';
import { KlangConfig } from './config';
import { InstanceBaseExt } from './utils';
export declare enum ActionId {
    Action_SetChannelVolume = "Action_SetChannelVolume",
    Action_SetMixVolume = "Action_SetMixVolume",
    Action_SoloChannel = "Action_SoloChannel",
    Action_MuteChannel = "Action_MuteChannel",
    Action_SnapshotIdUpdate = "Action_SnapshotIdUpdate",
    Action_SnapshotCurrentUpdate = "Action_SnapshotCurrentUpdate",
    Action_SnapshotIdGo = "Action_SnapshotIdGo",
    Action_SnapshotIndexGo = "Action_SnapshotIndexGo",
    Action_SnapshotNext = "Action_SnapshotNext",
    Action_SnapshotPrev = "Action_SnapshotPrev",
    Action_SnapshotFirst = "Action_SnapshotFirst",
    Action_MixMode = "Action_MixMode"
}
export declare function GetActions(instance: InstanceBaseExt<KlangConfig>): CompanionActionDefinitions;
//# sourceMappingURL=actions.d.ts.map