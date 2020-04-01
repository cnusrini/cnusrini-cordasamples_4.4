/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetCordaCoreIdentityParty from './NetCordaCoreIdentityParty';
import NetCordaCoreUtilitiesNetworkHostAndPort from './NetCordaCoreUtilitiesNetworkHostAndPort';

/**
 * The IoBluebankBraidCordaServicesSimpleNodeInfo model module.
 * @module io.generated.model/IoBluebankBraidCordaServicesSimpleNodeInfo
 * @version 1.0.0
 */
class IoBluebankBraidCordaServicesSimpleNodeInfo {
    /**
     * Constructs a new <code>IoBluebankBraidCordaServicesSimpleNodeInfo</code>.
     * @alias module:io.generated.model/IoBluebankBraidCordaServicesSimpleNodeInfo
     * @param addresses {Array.<module:io.generated.model/NetCordaCoreUtilitiesNetworkHostAndPort>} 
     * @param legalIdentities {Array.<module:io.generated.model/NetCordaCoreIdentityParty>} 
     */
    constructor(addresses, legalIdentities) { 
        
        IoBluebankBraidCordaServicesSimpleNodeInfo.initialize(this, addresses, legalIdentities);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, legalIdentities) { 
        obj['addresses'] = addresses;
        obj['legalIdentities'] = legalIdentities;
    }

    /**
     * Constructs a <code>IoBluebankBraidCordaServicesSimpleNodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/IoBluebankBraidCordaServicesSimpleNodeInfo} obj Optional instance to populate.
     * @return {module:io.generated.model/IoBluebankBraidCordaServicesSimpleNodeInfo} The populated <code>IoBluebankBraidCordaServicesSimpleNodeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoBluebankBraidCordaServicesSimpleNodeInfo();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [NetCordaCoreUtilitiesNetworkHostAndPort]);
            }
            if (data.hasOwnProperty('legalIdentities')) {
                obj['legalIdentities'] = ApiClient.convertToType(data['legalIdentities'], [NetCordaCoreIdentityParty]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreUtilitiesNetworkHostAndPort>} addresses
 */
IoBluebankBraidCordaServicesSimpleNodeInfo.prototype['addresses'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreIdentityParty>} legalIdentities
 */
IoBluebankBraidCordaServicesSimpleNodeInfo.prototype['legalIdentities'] = undefined;






export default IoBluebankBraidCordaServicesSimpleNodeInfo;

