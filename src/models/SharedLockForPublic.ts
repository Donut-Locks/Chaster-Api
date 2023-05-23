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
import type { ExtensionConfigForPublic } from './ExtensionConfigForPublic';
import {
    ExtensionConfigForPublicFromJSON,
    ExtensionConfigForPublicFromJSONTyped,
    ExtensionConfigForPublicToJSON,
} from './ExtensionConfigForPublic';
import type { LockForPublic } from './LockForPublic';
import {
    LockForPublicFromJSON,
    LockForPublicFromJSONTyped,
    LockForPublicToJSON,
} from './LockForPublic';
import type { SharedLockDurationModeEnum } from './SharedLockDurationModeEnum';
import {
    SharedLockDurationModeEnumFromJSON,
    SharedLockDurationModeEnumFromJSONTyped,
    SharedLockDurationModeEnumToJSON,
} from './SharedLockDurationModeEnum';
import type { SharedLockForPublicUnsplashPhoto } from './SharedLockForPublicUnsplashPhoto';
import {
    SharedLockForPublicUnsplashPhotoFromJSON,
    SharedLockForPublicUnsplashPhotoFromJSONTyped,
    SharedLockForPublicUnsplashPhotoToJSON,
} from './SharedLockForPublicUnsplashPhoto';
import type { SharedLockForPublicUser } from './SharedLockForPublicUser';
import {
    SharedLockForPublicUserFromJSON,
    SharedLockForPublicUserFromJSONTyped,
    SharedLockForPublicUserToJSON,
} from './SharedLockForPublicUser';

/**
 * 
 * @export
 * @interface SharedLockForPublic
 */
export interface SharedLockForPublic {
    /**
     * 
     * @type {SharedLockDurationModeEnum}
     * @memberof SharedLockForPublic
     */
    durationMode: SharedLockDurationModeEnum;
    /**
     * The shared lock id
     * @type {string}
     * @memberof SharedLockForPublic
     */
    _id: string;
    /**
     * The minimum duration, in seconds
     * @type {number}
     * @memberof SharedLockForPublic
     */
    minDuration: number;
    /**
     * The maximum duration, in seconds
     * @type {number}
     * @memberof SharedLockForPublic
     */
    maxDuration: number;
    /**
     * The calculated max limit duration
     * @type {number}
     * @memberof SharedLockForPublic
     */
    calculatedMaxLimitDuration: number | null;
    /**
     * 
     * @type {SharedLockForPublicUser}
     * @memberof SharedLockForPublic
     */
    user: SharedLockForPublicUser;
    /**
     * 
     * @type {SharedLockForPublicUnsplashPhoto}
     * @memberof SharedLockForPublic
     */
    unsplashPhoto: SharedLockForPublicUnsplashPhoto | null;
    /**
     * Extension configurations
     * @type {Array<ExtensionConfigForPublic>}
     * @memberof SharedLockForPublic
     */
    extensions: Array<ExtensionConfigForPublic>;
    /**
     * Created at
     * @type {string}
     * @memberof SharedLockForPublic
     */
    createdAt: string;
    /**
     * Updated at
     * @type {string}
     * @memberof SharedLockForPublic
     */
    updatedAt: string | null;
    /**
     * Deleted at
     * @type {string}
     * @memberof SharedLockForPublic
     */
    deletedAt: string | null;
    /**
     * Archived at
     * @type {string}
     * @memberof SharedLockForPublic
     */
    archivedAt: string | null;
    /**
     * List of locks

Only returned in shared locks endpoints
     * @type {Array<LockForPublic>}
     * @memberof SharedLockForPublic
     */
    locks?: Array<LockForPublic>;
    /**
     * Whether the lock requires a password
     * @type {boolean}
     * @memberof SharedLockForPublic
     */
    requirePassword: boolean;
    /**
     * Password
     * @type {string}
     * @memberof SharedLockForPublic
     */
    password: string | null;
    /**
     * The maximum duration of the lock, in seconds

After this duration, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {number}
     * @memberof SharedLockForPublic
     */
    maxLimitDuration: number | null;
    /**
     * The minimum date
     * @type {Date}
     * @memberof SharedLockForPublic
     */
    minDate: Date | null;
    /**
     * The maximum date
     * @type {Date}
     * @memberof SharedLockForPublic
     */
    maxDate: Date | null;
    /**
     * The maximum date of the lock

After this date, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {Date}
     * @memberof SharedLockForPublic
     */
    maxLimitDate: Date | null;
    /**
     * Whether the remaining time should be displayed to the wearer
     * @type {boolean}
     * @memberof SharedLockForPublic
     */
    displayRemainingTime: boolean;
    /**
     * Whether the lock is limited in time
     * @type {boolean}
     * @memberof SharedLockForPublic
     */
    limitLockTime: boolean;
    /**
     * The number of maximum locked users for this shared lock
     * @type {number}
     * @memberof SharedLockForPublic
     */
    maxLockedUsers: number | null;
    /**
     * Whether the lock is public
     * @type {boolean}
     * @memberof SharedLockForPublic
     */
    isPublic: boolean;
    /**
     * Whether the shared lock requires contact from wearer

Displayed for information purposes only on the lock page
     * @type {boolean}
     * @memberof SharedLockForPublic
     */
    requireContact: boolean;
    /**
     * The name
     * @type {string}
     * @memberof SharedLockForPublic
     */
    name: string;
    /**
     * The description
     * @type {string}
     * @memberof SharedLockForPublic
     */
    description: string;
    /**
     * Whether the time information should be hidden from the history
     * @type {boolean}
     * @memberof SharedLockForPublic
     */
    hideTimeLogs: boolean;
    /**
     * Last saved at
     * @type {Date}
     * @memberof SharedLockForPublic
     */
    lastSavedAt: Date;
}

/**
 * Check if a given object implements the SharedLockForPublic interface.
 */
export function instanceOfSharedLockForPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "durationMode" in value;
    isInstance = isInstance && "_id" in value;
    isInstance = isInstance && "minDuration" in value;
    isInstance = isInstance && "maxDuration" in value;
    isInstance = isInstance && "calculatedMaxLimitDuration" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "unsplashPhoto" in value;
    isInstance = isInstance && "extensions" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "deletedAt" in value;
    isInstance = isInstance && "archivedAt" in value;
    isInstance = isInstance && "requirePassword" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "maxLimitDuration" in value;
    isInstance = isInstance && "minDate" in value;
    isInstance = isInstance && "maxDate" in value;
    isInstance = isInstance && "maxLimitDate" in value;
    isInstance = isInstance && "displayRemainingTime" in value;
    isInstance = isInstance && "limitLockTime" in value;
    isInstance = isInstance && "maxLockedUsers" in value;
    isInstance = isInstance && "isPublic" in value;
    isInstance = isInstance && "requireContact" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "hideTimeLogs" in value;
    isInstance = isInstance && "lastSavedAt" in value;

    return isInstance;
}

export function SharedLockForPublicFromJSON(json: any): SharedLockForPublic {
    return SharedLockForPublicFromJSONTyped(json, false);
}

export function SharedLockForPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedLockForPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'durationMode': SharedLockDurationModeEnumFromJSON(json['durationMode']),
        '_id': json['_id'],
        'minDuration': json['minDuration'],
        'maxDuration': json['maxDuration'],
        'calculatedMaxLimitDuration': json['calculatedMaxLimitDuration'],
        'user': SharedLockForPublicUserFromJSON(json['user']),
        'unsplashPhoto': SharedLockForPublicUnsplashPhotoFromJSON(json['unsplashPhoto']),
        'extensions': ((json['extensions'] as Array<any>).map(ExtensionConfigForPublicFromJSON)),
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'deletedAt': json['deletedAt'],
        'archivedAt': json['archivedAt'],
        'locks': !exists(json, 'locks') ? undefined : ((json['locks'] as Array<any>).map(LockForPublicFromJSON)),
        'requirePassword': json['requirePassword'],
        'password': json['password'],
        'maxLimitDuration': json['maxLimitDuration'],
        'minDate': (json['minDate'] === null ? null : new Date(json['minDate'])),
        'maxDate': (json['maxDate'] === null ? null : new Date(json['maxDate'])),
        'maxLimitDate': (json['maxLimitDate'] === null ? null : new Date(json['maxLimitDate'])),
        'displayRemainingTime': json['displayRemainingTime'],
        'limitLockTime': json['limitLockTime'],
        'maxLockedUsers': json['maxLockedUsers'],
        'isPublic': json['isPublic'],
        'requireContact': json['requireContact'],
        'name': json['name'],
        'description': json['description'],
        'hideTimeLogs': json['hideTimeLogs'],
        'lastSavedAt': (new Date(json['lastSavedAt'])),
    };
}

export function SharedLockForPublicToJSON(value?: SharedLockForPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'durationMode': SharedLockDurationModeEnumToJSON(value.durationMode),
        '_id': value._id,
        'minDuration': value.minDuration,
        'maxDuration': value.maxDuration,
        'calculatedMaxLimitDuration': value.calculatedMaxLimitDuration,
        'user': SharedLockForPublicUserToJSON(value.user),
        'unsplashPhoto': SharedLockForPublicUnsplashPhotoToJSON(value.unsplashPhoto),
        'extensions': ((value.extensions as Array<any>).map(ExtensionConfigForPublicToJSON)),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'deletedAt': value.deletedAt,
        'archivedAt': value.archivedAt,
        'locks': value.locks === undefined ? undefined : ((value.locks as Array<any>).map(LockForPublicToJSON)),
        'requirePassword': value.requirePassword,
        'password': value.password,
        'maxLimitDuration': value.maxLimitDuration,
        'minDate': (value.minDate === null ? null : value.minDate.toISOString()),
        'maxDate': (value.maxDate === null ? null : value.maxDate.toISOString()),
        'maxLimitDate': (value.maxLimitDate === null ? null : value.maxLimitDate.toISOString()),
        'displayRemainingTime': value.displayRemainingTime,
        'limitLockTime': value.limitLockTime,
        'maxLockedUsers': value.maxLockedUsers,
        'isPublic': value.isPublic,
        'requireContact': value.requireContact,
        'name': value.name,
        'description': value.description,
        'hideTimeLogs': value.hideTimeLogs,
        'lastSavedAt': (value.lastSavedAt.toISOString()),
    };
}
