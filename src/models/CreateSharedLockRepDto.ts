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
 * @interface CreateSharedLockRepDto
 */
export interface CreateSharedLockRepDto {
    /**
     * The created shared lock id
     * @type {string}
     * @memberof CreateSharedLockRepDto
     */
    id: string;
}

/**
 * Check if a given object implements the CreateSharedLockRepDto interface.
 */
export function instanceOfCreateSharedLockRepDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CreateSharedLockRepDtoFromJSON(json: any): CreateSharedLockRepDto {
    return CreateSharedLockRepDtoFromJSONTyped(json, false);
}

export function CreateSharedLockRepDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSharedLockRepDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function CreateSharedLockRepDtoToJSON(value?: CreateSharedLockRepDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

