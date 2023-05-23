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
import type { PartnerConfigurationChildCapabilitiesFeatures } from './PartnerConfigurationChildCapabilitiesFeatures';
import {
    PartnerConfigurationChildCapabilitiesFeaturesFromJSON,
    PartnerConfigurationChildCapabilitiesFeaturesFromJSONTyped,
    PartnerConfigurationChildCapabilitiesFeaturesToJSON,
} from './PartnerConfigurationChildCapabilitiesFeatures';

/**
 * 
 * @export
 * @interface PartnerConfigurationChildCapabilitiesEvent
 */
export interface PartnerConfigurationChildCapabilitiesEvent {
    /**
     * 
     * @type {PartnerConfigurationChildCapabilitiesFeatures}
     * @memberof PartnerConfigurationChildCapabilitiesEvent
     */
    features: PartnerConfigurationChildCapabilitiesFeatures;
}

/**
 * Check if a given object implements the PartnerConfigurationChildCapabilitiesEvent interface.
 */
export function instanceOfPartnerConfigurationChildCapabilitiesEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "features" in value;

    return isInstance;
}

export function PartnerConfigurationChildCapabilitiesEventFromJSON(json: any): PartnerConfigurationChildCapabilitiesEvent {
    return PartnerConfigurationChildCapabilitiesEventFromJSONTyped(json, false);
}

export function PartnerConfigurationChildCapabilitiesEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerConfigurationChildCapabilitiesEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'features': PartnerConfigurationChildCapabilitiesFeaturesFromJSON(json['features']),
    };
}

export function PartnerConfigurationChildCapabilitiesEventToJSON(value?: PartnerConfigurationChildCapabilitiesEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'features': PartnerConfigurationChildCapabilitiesFeaturesToJSON(value.features),
    };
}

