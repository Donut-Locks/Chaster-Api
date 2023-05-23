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
import type { LockExtensionConfigDto } from './LockExtensionConfigDto';
import {
    LockExtensionConfigDtoFromJSON,
    LockExtensionConfigDtoFromJSONTyped,
    LockExtensionConfigDtoToJSON,
} from './LockExtensionConfigDto';

/**
 * 
 * @export
 * @interface EditLockExtensionsDto
 */
export interface EditLockExtensionsDto {
    /**
     * 
     * @type {Array<LockExtensionConfigDto>}
     * @memberof EditLockExtensionsDto
     */
    extensions: Array<LockExtensionConfigDto>;
}

/**
 * Check if a given object implements the EditLockExtensionsDto interface.
 */
export function instanceOfEditLockExtensionsDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "extensions" in value;

    return isInstance;
}

export function EditLockExtensionsDtoFromJSON(json: any): EditLockExtensionsDto {
    return EditLockExtensionsDtoFromJSONTyped(json, false);
}

export function EditLockExtensionsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditLockExtensionsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensions': ((json['extensions'] as Array<any>).map(LockExtensionConfigDtoFromJSON)),
    };
}

export function EditLockExtensionsDtoToJSON(value?: EditLockExtensionsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extensions': ((value.extensions as Array<any>).map(LockExtensionConfigDtoToJSON)),
    };
}

