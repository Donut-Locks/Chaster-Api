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
 * @interface ValidateOfferRequestDto
 */
export interface ValidateOfferRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof ValidateOfferRequestDto
     */
    accept: boolean;
}

/**
 * Check if a given object implements the ValidateOfferRequestDto interface.
 */
export function instanceOfValidateOfferRequestDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accept" in value;

    return isInstance;
}

export function ValidateOfferRequestDtoFromJSON(json: any): ValidateOfferRequestDto {
    return ValidateOfferRequestDtoFromJSONTyped(json, false);
}

export function ValidateOfferRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateOfferRequestDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accept': json['accept'],
    };
}

export function ValidateOfferRequestDtoToJSON(value?: ValidateOfferRequestDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accept': value.accept,
    };
}

