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
 * @interface ExtensionHomeActionWithPartyId
 */
export interface ExtensionHomeActionWithPartyId {
    /**
     * 
     * @type {string}
     * @memberof ExtensionHomeActionWithPartyId
     */
    extensionPartyId: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionHomeActionWithPartyId
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionHomeActionWithPartyId
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionHomeActionWithPartyId
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionHomeActionWithPartyId
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionHomeActionWithPartyId
     */
    badge?: string;
}

/**
 * Check if a given object implements the ExtensionHomeActionWithPartyId interface.
 */
export function instanceOfExtensionHomeActionWithPartyId(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "extensionPartyId" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "icon" in value;

    return isInstance;
}

export function ExtensionHomeActionWithPartyIdFromJSON(json: any): ExtensionHomeActionWithPartyId {
    return ExtensionHomeActionWithPartyIdFromJSONTyped(json, false);
}

export function ExtensionHomeActionWithPartyIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensionHomeActionWithPartyId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensionPartyId': json['extensionPartyId'],
        'slug': json['slug'],
        'title': json['title'],
        'description': json['description'],
        'icon': json['icon'],
        'badge': !exists(json, 'badge') ? undefined : json['badge'],
    };
}

export function ExtensionHomeActionWithPartyIdToJSON(value?: ExtensionHomeActionWithPartyId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extensionPartyId': value.extensionPartyId,
        'slug': value.slug,
        'title': value.title,
        'description': value.description,
        'icon': value.icon,
        'badge': value.badge,
    };
}
