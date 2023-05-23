/* tslint:disable */
/* eslint-disable */
/**
 * Chaster
 * Chaster Public API  API documentation: [https://docs.chaster.app/api-introduction](https://docs.chaster.app/api-introduction) 
 *
 * The version of the OpenAPI document: 0.12.54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The user settings
 * @export
 * @interface CurrentUserForProfileSettingsSettings
 */
export interface CurrentUserForProfileSettingsSettings {
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    showLocksOnProfile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    showOnlineStatus: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    showDiscordOnProfile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    emailOnWearerUsesSharedLock: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    messageOnWearerUsesSharedLock: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    discordNotifications: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    discordMessagingNotifications: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserForProfileSettingsSettings
     */
    displayNsfw: boolean;
}

/**
 * Check if a given object implements the CurrentUserForProfileSettingsSettings interface.
 */
export function instanceOfCurrentUserForProfileSettingsSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "showLocksOnProfile" in value;
    isInstance = isInstance && "showOnlineStatus" in value;
    isInstance = isInstance && "showDiscordOnProfile" in value;
    isInstance = isInstance && "emailOnWearerUsesSharedLock" in value;
    isInstance = isInstance && "messageOnWearerUsesSharedLock" in value;
    isInstance = isInstance && "discordNotifications" in value;
    isInstance = isInstance && "discordMessagingNotifications" in value;
    isInstance = isInstance && "displayNsfw" in value;

    return isInstance;
}

export function CurrentUserForProfileSettingsSettingsFromJSON(json: any): CurrentUserForProfileSettingsSettings {
    return CurrentUserForProfileSettingsSettingsFromJSONTyped(json, false);
}

export function CurrentUserForProfileSettingsSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentUserForProfileSettingsSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'showLocksOnProfile': json['showLocksOnProfile'],
        'showOnlineStatus': json['showOnlineStatus'],
        'showDiscordOnProfile': json['showDiscordOnProfile'],
        'emailOnWearerUsesSharedLock': json['emailOnWearerUsesSharedLock'],
        'messageOnWearerUsesSharedLock': json['messageOnWearerUsesSharedLock'],
        'discordNotifications': json['discordNotifications'],
        'discordMessagingNotifications': json['discordMessagingNotifications'],
        'displayNsfw': json['displayNsfw'],
    };
}

export function CurrentUserForProfileSettingsSettingsToJSON(value?: CurrentUserForProfileSettingsSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'showLocksOnProfile': value.showLocksOnProfile,
        'showOnlineStatus': value.showOnlineStatus,
        'showDiscordOnProfile': value.showDiscordOnProfile,
        'emailOnWearerUsesSharedLock': value.emailOnWearerUsesSharedLock,
        'messageOnWearerUsesSharedLock': value.messageOnWearerUsesSharedLock,
        'discordNotifications': value.discordNotifications,
        'discordMessagingNotifications': value.discordMessagingNotifications,
        'displayNsfw': value.displayNsfw,
    };
}

