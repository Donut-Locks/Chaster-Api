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


import * as runtime from '../runtime';
import type {
  VerificationPictureHistoryEntry,
} from '../models';
import {
    VerificationPictureHistoryEntryFromJSON,
    VerificationPictureHistoryEntryToJSON,
} from '../models';

export interface VerificationPictureControllerGetVerificationPicturesRequest {
    lockId: string;
}

export interface VerificationPictureControllerSubmitPictureRequest {
    lockId: string;
}

/**
 * 
 */
export class ExtensionsVerificationPictureApi extends runtime.BaseAPI {

    /**
     * 
     * Get the history of verification pictures
     */
    async verificationPictureControllerGetVerificationPicturesRaw(requestParameters: VerificationPictureControllerGetVerificationPicturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VerificationPictureHistoryEntry>>> {
        if (requestParameters.lockId === null || requestParameters.lockId === undefined) {
            throw new runtime.RequiredError('lockId','Required parameter requestParameters.lockId was null or undefined when calling verificationPictureControllerGetVerificationPictures.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["locks"]);
        }

        const response = await this.request({
            path: `/locks/{lockId}/verification-pictures`.replace(`{${"lockId"}}`, encodeURIComponent(String(requestParameters.lockId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VerificationPictureHistoryEntryFromJSON));
    }

    /**
     * 
     * Get the history of verification pictures
     */
    async verificationPictureControllerGetVerificationPictures(requestParameters: VerificationPictureControllerGetVerificationPicturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VerificationPictureHistoryEntry>> {
        const response = await this.verificationPictureControllerGetVerificationPicturesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads a new verification picture  A user can upload a picture only if there is an existing request.
     * Submit a verification picture
     */
    async verificationPictureControllerSubmitPictureRaw(requestParameters: VerificationPictureControllerSubmitPictureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lockId === null || requestParameters.lockId === undefined) {
            throw new runtime.RequiredError('lockId','Required parameter requestParameters.lockId was null or undefined when calling verificationPictureControllerSubmitPicture.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["locks"]);
        }

        const response = await this.request({
            path: `/extensions/verification-picture/{lockId}/submit`.replace(`{${"lockId"}}`, encodeURIComponent(String(requestParameters.lockId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Uploads a new verification picture  A user can upload a picture only if there is an existing request.
     * Submit a verification picture
     */
    async verificationPictureControllerSubmitPicture(requestParameters: VerificationPictureControllerSubmitPictureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.verificationPictureControllerSubmitPictureRaw(requestParameters, initOverrides);
    }

}