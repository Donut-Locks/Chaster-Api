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
 * 
 * @export
 * @interface CreateUpdateSharedLockDto
 */
export interface CreateUpdateSharedLockDto {
    /**
     * The minimum duration, in seconds
     * @type {number}
     * @memberof CreateUpdateSharedLockDto
     */
    minDuration: number;
    /**
     * The maximum duration, in seconds
     * @type {number}
     * @memberof CreateUpdateSharedLockDto
     */
    maxDuration: number;
    /**
     * The maximum duration of the lock, in seconds

After this duration, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {number}
     * @memberof CreateUpdateSharedLockDto
     */
    maxLimitDuration: number | null;
    /**
     * The minimum date
     * @type {Date}
     * @memberof CreateUpdateSharedLockDto
     */
    minDate: Date | null;
    /**
     * The maximum date
     * @type {Date}
     * @memberof CreateUpdateSharedLockDto
     */
    maxDate: Date | null;
    /**
     * The maximum date of the lock

After this date, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {Date}
     * @memberof CreateUpdateSharedLockDto
     */
    maxLimitDate: Date | null;
    /**
     * Whether the remaining time should be displayed to the wearer
     * @type {boolean}
     * @memberof CreateUpdateSharedLockDto
     */
    displayRemainingTime: boolean;
    /**
     * Whether the lock is limited in time
     * @type {boolean}
     * @memberof CreateUpdateSharedLockDto
     */
    limitLockTime: boolean;
    /**
     * Whether the lock is public
     * @type {boolean}
     * @memberof CreateUpdateSharedLockDto
     */
    isPublic: boolean;
    /**
     * The number of maximum locked users for this shared lock
     * @type {number}
     * @memberof CreateUpdateSharedLockDto
     */
    maxLockedUsers: number | null;
    /**
     * An optional password
     * @type {string}
     * @memberof CreateUpdateSharedLockDto
     */
    password: string | null;
    /**
     * Whether the shared lock requires contact from wearer

Displayed for information purposes only on the lock page
     * @type {boolean}
     * @memberof CreateUpdateSharedLockDto
     */
    requireContact: boolean;
    /**
     * The name
     * @type {string}
     * @memberof CreateUpdateSharedLockDto
     */
    name: string;
    /**
     * The description
     * @type {string}
     * @memberof CreateUpdateSharedLockDto
     */
    description: string;
    /**
     * The Unsplash photo id
     * @type {string}
     * @memberof CreateUpdateSharedLockDto
     */
    photoId: string;
    /**
     * Whether the time information should be hidden from the history
     * @type {boolean}
     * @memberof CreateUpdateSharedLockDto
     */
    hideTimeLogs: boolean;
}

/**
 * Check if a given object implements the CreateUpdateSharedLockDto interface.
 */
export function instanceOfCreateUpdateSharedLockDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "minDuration" in value;
    isInstance = isInstance && "maxDuration" in value;
    isInstance = isInstance && "maxLimitDuration" in value;
    isInstance = isInstance && "minDate" in value;
    isInstance = isInstance && "maxDate" in value;
    isInstance = isInstance && "maxLimitDate" in value;
    isInstance = isInstance && "displayRemainingTime" in value;
    isInstance = isInstance && "limitLockTime" in value;
    isInstance = isInstance && "isPublic" in value;
    isInstance = isInstance && "maxLockedUsers" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "requireContact" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "photoId" in value;
    isInstance = isInstance && "hideTimeLogs" in value;

    return isInstance;
}

export function CreateUpdateSharedLockDtoFromJSON(json: any): CreateUpdateSharedLockDto {
    return CreateUpdateSharedLockDtoFromJSONTyped(json, false);
}

export function CreateUpdateSharedLockDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUpdateSharedLockDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minDuration': json['minDuration'],
        'maxDuration': json['maxDuration'],
        'maxLimitDuration': json['maxLimitDuration'],
        'minDate': (json['minDate'] === null ? null : new Date(json['minDate'])),
        'maxDate': (json['maxDate'] === null ? null : new Date(json['maxDate'])),
        'maxLimitDate': (json['maxLimitDate'] === null ? null : new Date(json['maxLimitDate'])),
        'displayRemainingTime': json['displayRemainingTime'],
        'limitLockTime': json['limitLockTime'],
        'isPublic': json['isPublic'],
        'maxLockedUsers': json['maxLockedUsers'],
        'password': json['password'],
        'requireContact': json['requireContact'],
        'name': json['name'],
        'description': json['description'],
        'photoId': json['photoId'],
        'hideTimeLogs': json['hideTimeLogs'],
    };
}

export function CreateUpdateSharedLockDtoToJSON(value?: CreateUpdateSharedLockDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minDuration': value.minDuration,
        'maxDuration': value.maxDuration,
        'maxLimitDuration': value.maxLimitDuration,
        'minDate': (value.minDate === null ? null : value.minDate.toISOString()),
        'maxDate': (value.maxDate === null ? null : value.maxDate.toISOString()),
        'maxLimitDate': (value.maxLimitDate === null ? null : value.maxLimitDate.toISOString()),
        'displayRemainingTime': value.displayRemainingTime,
        'limitLockTime': value.limitLockTime,
        'isPublic': value.isPublic,
        'maxLockedUsers': value.maxLockedUsers,
        'password': value.password,
        'requireContact': value.requireContact,
        'name': value.name,
        'description': value.description,
        'photoId': value.photoId,
        'hideTimeLogs': value.hideTimeLogs,
    };
}
