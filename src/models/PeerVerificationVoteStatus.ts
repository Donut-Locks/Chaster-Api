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
import type { PeerVerificationStatusEnum } from './PeerVerificationStatusEnum';
import {
    PeerVerificationStatusEnumFromJSON,
    PeerVerificationStatusEnumFromJSONTyped,
    PeerVerificationStatusEnumToJSON,
} from './PeerVerificationStatusEnum';

/**
 * 
 * @export
 * @interface PeerVerificationVoteStatus
 */
export interface PeerVerificationVoteStatus {
    /**
     * 
     * @type {PeerVerificationStatusEnum}
     * @memberof PeerVerificationVoteStatus
     */
    status: PeerVerificationStatusEnum;
    /**
     * Peer verification id
     * @type {string}
     * @memberof PeerVerificationVoteStatus
     */
    _id: string;
    /**
     * Number of verified votes
     * @type {number}
     * @memberof PeerVerificationVoteStatus
     */
    verifiedVotes: number;
    /**
     * Number of rejected votes
     * @type {number}
     * @memberof PeerVerificationVoteStatus
     */
    rejectedVotes: number;
}

/**
 * Check if a given object implements the PeerVerificationVoteStatus interface.
 */
export function instanceOfPeerVerificationVoteStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "_id" in value;
    isInstance = isInstance && "verifiedVotes" in value;
    isInstance = isInstance && "rejectedVotes" in value;

    return isInstance;
}

export function PeerVerificationVoteStatusFromJSON(json: any): PeerVerificationVoteStatus {
    return PeerVerificationVoteStatusFromJSONTyped(json, false);
}

export function PeerVerificationVoteStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerVerificationVoteStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': PeerVerificationStatusEnumFromJSON(json['status']),
        '_id': json['_id'],
        'verifiedVotes': json['verifiedVotes'],
        'rejectedVotes': json['rejectedVotes'],
    };
}

export function PeerVerificationVoteStatusToJSON(value?: PeerVerificationVoteStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': PeerVerificationStatusEnumToJSON(value.status),
        '_id': value._id,
        'verifiedVotes': value.verifiedVotes,
        'rejectedVotes': value.rejectedVotes,
    };
}

