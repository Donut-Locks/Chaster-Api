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
import type { ChastikeyStatsForPublic } from './ChastikeyStatsForPublic';
import {
    ChastikeyStatsForPublicFromJSON,
    ChastikeyStatsForPublicFromJSONTyped,
    ChastikeyStatsForPublicToJSON,
} from './ChastikeyStatsForPublic';
import type { GetUserAchievementsResponseDto } from './GetUserAchievementsResponseDto';
import {
    GetUserAchievementsResponseDtoFromJSON,
    GetUserAchievementsResponseDtoFromJSONTyped,
    GetUserAchievementsResponseDtoToJSON,
} from './GetUserAchievementsResponseDto';
import type { PublicLockForPublic } from './PublicLockForPublic';
import {
    PublicLockForPublicFromJSON,
    PublicLockForPublicFromJSONTyped,
    PublicLockForPublicToJSON,
} from './PublicLockForPublic';
import type { UserForPublic } from './UserForPublic';
import {
    UserForPublicFromJSON,
    UserForPublicFromJSONTyped,
    UserForPublicToJSON,
} from './UserForPublic';
import type { UserStatsForPublic } from './UserStatsForPublic';
import {
    UserStatsForPublicFromJSON,
    UserStatsForPublicFromJSONTyped,
    UserStatsForPublicToJSON,
} from './UserStatsForPublic';

/**
 * 
 * @export
 * @interface ProfileRepDto
 */
export interface ProfileRepDto {
    /**
     * 
     * @type {UserForPublic}
     * @memberof ProfileRepDto
     */
    user: UserForPublic;
    /**
     * 
     * @type {UserStatsForPublic}
     * @memberof ProfileRepDto
     */
    stats?: UserStatsForPublic;
    /**
     * 
     * @type {Array<GetUserAchievementsResponseDto>}
     * @memberof ProfileRepDto
     */
    achievements: Array<GetUserAchievementsResponseDto>;
    /**
     * 
     * @type {Array<PublicLockForPublic>}
     * @memberof ProfileRepDto
     */
    sharedLocks: Array<PublicLockForPublic>;
    /**
     * 
     * @type {ChastikeyStatsForPublic}
     * @memberof ProfileRepDto
     */
    chastikeyStats?: ChastikeyStatsForPublic;
}

/**
 * Check if a given object implements the ProfileRepDto interface.
 */
export function instanceOfProfileRepDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "achievements" in value;
    isInstance = isInstance && "sharedLocks" in value;

    return isInstance;
}

export function ProfileRepDtoFromJSON(json: any): ProfileRepDto {
    return ProfileRepDtoFromJSONTyped(json, false);
}

export function ProfileRepDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileRepDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserForPublicFromJSON(json['user']),
        'stats': !exists(json, 'stats') ? undefined : UserStatsForPublicFromJSON(json['stats']),
        'achievements': ((json['achievements'] as Array<any>).map(GetUserAchievementsResponseDtoFromJSON)),
        'sharedLocks': ((json['sharedLocks'] as Array<any>).map(PublicLockForPublicFromJSON)),
        'chastikeyStats': !exists(json, 'chastikeyStats') ? undefined : ChastikeyStatsForPublicFromJSON(json['chastikeyStats']),
    };
}

export function ProfileRepDtoToJSON(value?: ProfileRepDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserForPublicToJSON(value.user),
        'stats': UserStatsForPublicToJSON(value.stats),
        'achievements': ((value.achievements as Array<any>).map(GetUserAchievementsResponseDtoToJSON)),
        'sharedLocks': ((value.sharedLocks as Array<any>).map(PublicLockForPublicToJSON)),
        'chastikeyStats': ChastikeyStatsForPublicToJSON(value.chastikeyStats),
    };
}

