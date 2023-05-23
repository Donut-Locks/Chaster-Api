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
 * @interface UserStatsForPublic
 */
export interface UserStatsForPublic {
    /**
     * Number of locks started by the user as a wearer
     * @type {number}
     * @memberof UserStatsForPublic
     */
    nbStartedLocks: number;
    /**
     * Number of locks ended by the user as a wearer
     * @type {number}
     * @memberof UserStatsForPublic
     */
    nbEndedLocks: number;
    /**
     * Total time locked
     * @type {number}
     * @memberof UserStatsForPublic
     */
    totalTimeLocked: number;
    /**
     * Maximum session duration
     * @type {number}
     * @memberof UserStatsForPublic
     */
    maxTimeLocked: number;
    /**
     * Number of locks keyholded
     * @type {number}
     * @memberof UserStatsForPublic
     */
    keyholderNbLocks: number;
}

/**
 * Check if a given object implements the UserStatsForPublic interface.
 */
export function instanceOfUserStatsForPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nbStartedLocks" in value;
    isInstance = isInstance && "nbEndedLocks" in value;
    isInstance = isInstance && "totalTimeLocked" in value;
    isInstance = isInstance && "maxTimeLocked" in value;
    isInstance = isInstance && "keyholderNbLocks" in value;

    return isInstance;
}

export function UserStatsForPublicFromJSON(json: any): UserStatsForPublic {
    return UserStatsForPublicFromJSONTyped(json, false);
}

export function UserStatsForPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserStatsForPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nbStartedLocks': json['nbStartedLocks'],
        'nbEndedLocks': json['nbEndedLocks'],
        'totalTimeLocked': json['totalTimeLocked'],
        'maxTimeLocked': json['maxTimeLocked'],
        'keyholderNbLocks': json['keyholderNbLocks'],
    };
}

export function UserStatsForPublicToJSON(value?: UserStatsForPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nbStartedLocks': value.nbStartedLocks,
        'nbEndedLocks': value.nbEndedLocks,
        'totalTimeLocked': value.totalTimeLocked,
        'maxTimeLocked': value.maxTimeLocked,
        'keyholderNbLocks': value.keyholderNbLocks,
    };
}

