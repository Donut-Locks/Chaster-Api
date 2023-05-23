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
 * @interface CreatePostReportItemDto
 */
export interface CreatePostReportItemDto {
    /**
     * The report type
Equals to `post`
     * @type {string}
     * @memberof CreatePostReportItemDto
     */
    type: CreatePostReportItemDtoTypeEnum;
    /**
     * The post id
     * @type {string}
     * @memberof CreatePostReportItemDto
     */
    postId: string;
}


/**
 * @export
 */
export const CreatePostReportItemDtoTypeEnum = {
    Post: 'post'
} as const;
export type CreatePostReportItemDtoTypeEnum = typeof CreatePostReportItemDtoTypeEnum[keyof typeof CreatePostReportItemDtoTypeEnum];


/**
 * Check if a given object implements the CreatePostReportItemDto interface.
 */
export function instanceOfCreatePostReportItemDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "postId" in value;

    return isInstance;
}

export function CreatePostReportItemDtoFromJSON(json: any): CreatePostReportItemDto {
    return CreatePostReportItemDtoFromJSONTyped(json, false);
}

export function CreatePostReportItemDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePostReportItemDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'postId': json['postId'],
    };
}

export function CreatePostReportItemDtoToJSON(value?: CreatePostReportItemDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'postId': value.postId,
    };
}

