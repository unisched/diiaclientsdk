import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { ApiError } from '../models/ApiError';
import { Branch } from '../models/Branch';
import { BranchCreateRequest } from '../models/BranchCreateRequest';
import { BranchList } from '../models/BranchList';
import { BranchScopes } from '../models/BranchScopes';
import { DeeplinkResponse } from '../models/DeeplinkResponse';
import { DeliveryType } from '../models/DeliveryType';
import { DiiaIdScope } from '../models/DiiaIdScope';
import { DocumentRequestCreate } from '../models/DocumentRequestCreate';
import { DocumentType } from '../models/DocumentType';
import { HashedFile } from '../models/HashedFile';
import { HashedFilesSigning } from '../models/HashedFilesSigning';
import { HashedFilesSigningData } from '../models/HashedFilesSigningData';
import { IdResponse } from '../models/IdResponse';
import { Offer } from '../models/Offer';
import { OfferCreateRequest } from '../models/OfferCreateRequest';
import { OfferList } from '../models/OfferList';
import { OfferRequestDynamicCreate } from '../models/OfferRequestDynamicCreate';
import { OfferRequestType } from '../models/OfferRequestType';
import { OfferScopes } from '../models/OfferScopes';
import { RequestStatus } from '../models/RequestStatus';
import { RequestStatusResponse } from '../models/RequestStatusResponse';
import { SessionToken } from '../models/SessionToken';
import { SignAlgo } from '../models/SignAlgo';
import { SignType } from '../models/SignType';
import { SuccessResponse } from '../models/SuccessResponse';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiGetSessionTokenRequest {
    /**
     * Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).
     * Defaults to: undefined
     * @type string
     * @memberof AuthApigetSessionToken
     */
    acquirerToken: string
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».
     * Get an acquirer session token
     * @param param the request object
     */
    public getSessionTokenWithHttpInfo(param: AuthApiGetSessionTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<SessionToken>> {
        return this.api.getSessionTokenWithHttpInfo(param.acquirerToken,  options).toPromise();
    }

    /**
     * Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».
     * Get an acquirer session token
     * @param param the request object
     */
    public getSessionToken(param: AuthApiGetSessionTokenRequest, options?: ConfigurationOptions): Promise<SessionToken> {
        return this.api.getSessionToken(param.acquirerToken,  options).toPromise();
    }

}

import { ObservableBranchesApi } from "./ObservableAPI";
import { BranchesApiRequestFactory, BranchesApiResponseProcessor} from "../apis/BranchesApi";

export interface BranchesApiCreateBranchRequest {
    /**
     * 
     * @type BranchCreateRequest
     * @memberof BranchesApicreateBranch
     */
    branchCreateRequest: BranchCreateRequest
}

export interface BranchesApiDeleteBranchRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof BranchesApideleteBranch
     */
    branchId: string
}

export interface BranchesApiGetBranchRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof BranchesApigetBranch
     */
    branchId: string
}

export interface BranchesApiGetBranchesRequest {
    /**
     * How many items to skip in the response (offset).
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof BranchesApigetBranches
     */
    skip?: number
    /**
     * How many items to return. No more than 100 items per request is recommended.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof BranchesApigetBranches
     */
    limit?: number
}

export interface BranchesApiUpdateBranchRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof BranchesApiupdateBranch
     */
    branchId: string
    /**
     * 
     * @type BranchCreateRequest
     * @memberof BranchesApiupdateBranch
     */
    branchCreateRequest: BranchCreateRequest
}

export class ObjectBranchesApi {
    private api: ObservableBranchesApi

    public constructor(configuration: Configuration, requestFactory?: BranchesApiRequestFactory, responseProcessor?: BranchesApiResponseProcessor) {
        this.api = new ObservableBranchesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.
     * Create a new branch
     * @param param the request object
     */
    public createBranchWithHttpInfo(param: BranchesApiCreateBranchRequest, options?: ConfigurationOptions): Promise<HttpInfo<IdResponse>> {
        return this.api.createBranchWithHttpInfo(param.branchCreateRequest,  options).toPromise();
    }

    /**
     * Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.
     * Create a new branch
     * @param param the request object
     */
    public createBranch(param: BranchesApiCreateBranchRequest, options?: ConfigurationOptions): Promise<IdResponse> {
        return this.api.createBranch(param.branchCreateRequest,  options).toPromise();
    }

    /**
     * Delete an existing branch
     * @param param the request object
     */
    public deleteBranchWithHttpInfo(param: BranchesApiDeleteBranchRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteBranchWithHttpInfo(param.branchId,  options).toPromise();
    }

    /**
     * Delete an existing branch
     * @param param the request object
     */
    public deleteBranch(param: BranchesApiDeleteBranchRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteBranch(param.branchId,  options).toPromise();
    }

    /**
     * Get a branch by identifier
     * @param param the request object
     */
    public getBranchWithHttpInfo(param: BranchesApiGetBranchRequest, options?: ConfigurationOptions): Promise<HttpInfo<Branch>> {
        return this.api.getBranchWithHttpInfo(param.branchId,  options).toPromise();
    }

    /**
     * Get a branch by identifier
     * @param param the request object
     */
    public getBranch(param: BranchesApiGetBranchRequest, options?: ConfigurationOptions): Promise<Branch> {
        return this.api.getBranch(param.branchId,  options).toPromise();
    }

    /**
     * Get the list of branches
     * @param param the request object
     */
    public getBranchesWithHttpInfo(param: BranchesApiGetBranchesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BranchList>> {
        return this.api.getBranchesWithHttpInfo(param.skip, param.limit,  options).toPromise();
    }

    /**
     * Get the list of branches
     * @param param the request object
     */
    public getBranches(param: BranchesApiGetBranchesRequest = {}, options?: ConfigurationOptions): Promise<BranchList> {
        return this.api.getBranches(param.skip, param.limit,  options).toPromise();
    }

    /**
     * Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.
     * Update an existing branch
     * @param param the request object
     */
    public updateBranchWithHttpInfo(param: BranchesApiUpdateBranchRequest, options?: ConfigurationOptions): Promise<HttpInfo<IdResponse>> {
        return this.api.updateBranchWithHttpInfo(param.branchId, param.branchCreateRequest,  options).toPromise();
    }

    /**
     * Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.
     * Update an existing branch
     * @param param the request object
     */
    public updateBranch(param: BranchesApiUpdateBranchRequest, options?: ConfigurationOptions): Promise<IdResponse> {
        return this.api.updateBranch(param.branchId, param.branchCreateRequest,  options).toPromise();
    }

}

import { ObservableDiiaSignApi } from "./ObservableAPI";
import { DiiaSignApiRequestFactory, DiiaSignApiResponseProcessor} from "../apis/DiiaSignApi";

export interface DiiaSignApiCreateOfferRequestDynamicRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof DiiaSignApicreateOfferRequestDynamic
     */
    branchId: string
    /**
     * 
     * @type OfferRequestDynamicCreate
     * @memberof DiiaSignApicreateOfferRequestDynamic
     */
    offerRequestDynamicCreate: OfferRequestDynamicCreate
}

export interface DiiaSignApiGetOfferRequestStatusRequest {
    /**
     * OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * Defaults to: undefined
     * @type string
     * @memberof DiiaSignApigetOfferRequestStatus
     */
    otp?: string
    /**
     * Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     * Defaults to: undefined
     * @type string
     * @memberof DiiaSignApigetOfferRequestStatus
     */
    requestId?: string
}

export class ObjectDiiaSignApi {
    private api: ObservableDiiaSignApi

    public constructor(configuration: Configuration, requestFactory?: DiiaSignApiRequestFactory, responseProcessor?: DiiaSignApiResponseProcessor) {
        this.api = new ObservableDiiaSignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param param the request object
     */
    public createOfferRequestDynamicWithHttpInfo(param: DiiaSignApiCreateOfferRequestDynamicRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeeplinkResponse>> {
        return this.api.createOfferRequestDynamicWithHttpInfo(param.branchId, param.offerRequestDynamicCreate,  options).toPromise();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param param the request object
     */
    public createOfferRequestDynamic(param: DiiaSignApiCreateOfferRequestDynamicRequest, options?: ConfigurationOptions): Promise<DeeplinkResponse> {
        return this.api.createOfferRequestDynamic(param.branchId, param.offerRequestDynamicCreate,  options).toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param param the request object
     */
    public getOfferRequestStatusWithHttpInfo(param: DiiaSignApiGetOfferRequestStatusRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RequestStatusResponse>> {
        return this.api.getOfferRequestStatusWithHttpInfo(param.otp, param.requestId,  options).toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param param the request object
     */
    public getOfferRequestStatus(param: DiiaSignApiGetOfferRequestStatusRequest = {}, options?: ConfigurationOptions): Promise<RequestStatusResponse> {
        return this.api.getOfferRequestStatus(param.otp, param.requestId,  options).toPromise();
    }

}

import { ObservableOffersApi } from "./ObservableAPI";
import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";

export interface OffersApiCreateOfferRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof OffersApicreateOffer
     */
    branchId: string
    /**
     * 
     * @type OfferCreateRequest
     * @memberof OffersApicreateOffer
     */
    offerCreateRequest: OfferCreateRequest
}

export interface OffersApiDeleteOfferRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof OffersApideleteOffer
     */
    branchId: string
    /**
     * Offer identifier (offer_id).
     * Defaults to: undefined
     * @type string
     * @memberof OffersApideleteOffer
     */
    offerId: string
}

export interface OffersApiGetOffersRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof OffersApigetOffers
     */
    branchId: string
    /**
     * How many items to skip in the response (offset).
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof OffersApigetOffers
     */
    skip?: number
    /**
     * How many items to return. No more than 100 items per request is recommended.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof OffersApigetOffers
     */
    limit?: number
}

export class ObjectOffersApi {
    private api: ObservableOffersApi

    public constructor(configuration: Configuration, requestFactory?: OffersApiRequestFactory, responseProcessor?: OffersApiResponseProcessor) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).
     * Create an offer on a branch
     * @param param the request object
     */
    public createOfferWithHttpInfo(param: OffersApiCreateOfferRequest, options?: ConfigurationOptions): Promise<HttpInfo<IdResponse>> {
        return this.api.createOfferWithHttpInfo(param.branchId, param.offerCreateRequest,  options).toPromise();
    }

    /**
     * Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).
     * Create an offer on a branch
     * @param param the request object
     */
    public createOffer(param: OffersApiCreateOfferRequest, options?: ConfigurationOptions): Promise<IdResponse> {
        return this.api.createOffer(param.branchId, param.offerCreateRequest,  options).toPromise();
    }

    /**
     * Delete an offer on a branch
     * @param param the request object
     */
    public deleteOfferWithHttpInfo(param: OffersApiDeleteOfferRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOfferWithHttpInfo(param.branchId, param.offerId,  options).toPromise();
    }

    /**
     * Delete an offer on a branch
     * @param param the request object
     */
    public deleteOffer(param: OffersApiDeleteOfferRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOffer(param.branchId, param.offerId,  options).toPromise();
    }

    /**
     * Do not request more than 100 offers per call — use `skip`/`limit` parameters.
     * Get the list of offers on a branch
     * @param param the request object
     */
    public getOffersWithHttpInfo(param: OffersApiGetOffersRequest, options?: ConfigurationOptions): Promise<HttpInfo<OfferList>> {
        return this.api.getOffersWithHttpInfo(param.branchId, param.skip, param.limit,  options).toPromise();
    }

    /**
     * Do not request more than 100 offers per call — use `skip`/`limit` parameters.
     * Get the list of offers on a branch
     * @param param the request object
     */
    public getOffers(param: OffersApiGetOffersRequest, options?: ConfigurationOptions): Promise<OfferList> {
        return this.api.getOffers(param.branchId, param.skip, param.limit,  options).toPromise();
    }

}

import { ObservableSharingApi } from "./ObservableAPI";
import { SharingApiRequestFactory, SharingApiResponseProcessor} from "../apis/SharingApi";

export interface SharingApiCreateDocumentRequestRequest {
    /**
     * 
     * @type DocumentRequestCreate
     * @memberof SharingApicreateDocumentRequest
     */
    documentRequestCreate: DocumentRequestCreate
}

export interface SharingApiCreateOfferRequestDynamicRequest {
    /**
     * Branch identifier (branch_id).
     * Defaults to: undefined
     * @type string
     * @memberof SharingApicreateOfferRequestDynamic
     */
    branchId: string
    /**
     * 
     * @type OfferRequestDynamicCreate
     * @memberof SharingApicreateOfferRequestDynamic
     */
    offerRequestDynamicCreate: OfferRequestDynamicCreate
}

export class ObjectSharingApi {
    private api: ObservableSharingApi

    public constructor(configuration: Configuration, requestFactory?: SharingApiRequestFactory, responseProcessor?: SharingApiResponseProcessor) {
        this.api = new ObservableSharingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initiates document sharing at a physical branch: the operator passes the 13-digit Code128 barcode generated by the user\'s Diia app (scanned or entered manually). The barcode is valid for 3 minutes and is single-use.  On success a push notification with the sharing request is sent to the user. When the user confirms, the encrypted package is delivered by the Diia app to the partner endpoint; the partner must reply `200 {\"success\": true}` — see `diia-partner-receiver.yaml`.  Use `getDocumentRequestStatus` to track the request.
     * Create a document sharing request (offline / barcode scenario)
     * @param param the request object
     */
    public createDocumentRequestWithHttpInfo(param: SharingApiCreateDocumentRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessResponse>> {
        return this.api.createDocumentRequestWithHttpInfo(param.documentRequestCreate,  options).toPromise();
    }

    /**
     * Initiates document sharing at a physical branch: the operator passes the 13-digit Code128 barcode generated by the user\'s Diia app (scanned or entered manually). The barcode is valid for 3 minutes and is single-use.  On success a push notification with the sharing request is sent to the user. When the user confirms, the encrypted package is delivered by the Diia app to the partner endpoint; the partner must reply `200 {\"success\": true}` — see `diia-partner-receiver.yaml`.  Use `getDocumentRequestStatus` to track the request.
     * Create a document sharing request (offline / barcode scenario)
     * @param param the request object
     */
    public createDocumentRequest(param: SharingApiCreateDocumentRequestRequest, options?: ConfigurationOptions): Promise<SuccessResponse> {
        return this.api.createDocumentRequest(param.documentRequestCreate,  options).toPromise();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param param the request object
     */
    public createOfferRequestDynamicWithHttpInfo(param: SharingApiCreateOfferRequestDynamicRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeeplinkResponse>> {
        return this.api.createOfferRequestDynamicWithHttpInfo(param.branchId, param.offerRequestDynamicCreate,  options).toPromise();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param param the request object
     */
    public createOfferRequestDynamic(param: SharingApiCreateOfferRequestDynamicRequest, options?: ConfigurationOptions): Promise<DeeplinkResponse> {
        return this.api.createOfferRequestDynamic(param.branchId, param.offerRequestDynamicCreate,  options).toPromise();
    }

}

import { ObservableStatusApi } from "./ObservableAPI";
import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";

export interface StatusApiGetDocumentRequestStatusRequest {
    /**
     * Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * Defaults to: undefined
     * @type string
     * @memberof StatusApigetDocumentRequestStatus
     */
    barcode?: string
    /**
     * Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     * Defaults to: undefined
     * @type string
     * @memberof StatusApigetDocumentRequestStatus
     */
    requestId?: string
}

export interface StatusApiGetOfferRequestStatusRequest {
    /**
     * OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * Defaults to: undefined
     * @type string
     * @memberof StatusApigetOfferRequestStatus
     */
    otp?: string
    /**
     * Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     * Defaults to: undefined
     * @type string
     * @memberof StatusApigetOfferRequestStatus
     */
    requestId?: string
}

export class ObjectStatusApi {
    private api: ObservableStatusApi

    public constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.
     * Get the sharing status by barcode (offline scenario)
     * @param param the request object
     */
    public getDocumentRequestStatusWithHttpInfo(param: StatusApiGetDocumentRequestStatusRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RequestStatusResponse>> {
        return this.api.getDocumentRequestStatusWithHttpInfo(param.barcode, param.requestId,  options).toPromise();
    }

    /**
     * Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.
     * Get the sharing status by barcode (offline scenario)
     * @param param the request object
     */
    public getDocumentRequestStatus(param: StatusApiGetDocumentRequestStatusRequest = {}, options?: ConfigurationOptions): Promise<RequestStatusResponse> {
        return this.api.getDocumentRequestStatus(param.barcode, param.requestId,  options).toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param param the request object
     */
    public getOfferRequestStatusWithHttpInfo(param: StatusApiGetOfferRequestStatusRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RequestStatusResponse>> {
        return this.api.getOfferRequestStatusWithHttpInfo(param.otp, param.requestId,  options).toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param param the request object
     */
    public getOfferRequestStatus(param: StatusApiGetOfferRequestStatusRequest = {}, options?: ConfigurationOptions): Promise<RequestStatusResponse> {
        return this.api.getOfferRequestStatus(param.otp, param.requestId,  options).toPromise();
    }

}
