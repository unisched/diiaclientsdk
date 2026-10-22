import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».
     * Get an acquirer session token
     * @param acquirerToken Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).
     */
    public getSessionTokenWithHttpInfo(acquirerToken: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SessionToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSessionTokenWithHttpInfo(acquirerToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».
     * Get an acquirer session token
     * @param acquirerToken Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).
     */
    public getSessionToken(acquirerToken: string, _options?: PromiseConfigurationOptions): Promise<SessionToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSessionToken(acquirerToken, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBranchesApi } from './ObservableAPI';

import { BranchesApiRequestFactory, BranchesApiResponseProcessor} from "../apis/BranchesApi";
export class PromiseBranchesApi {
    private api: ObservableBranchesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BranchesApiRequestFactory,
        responseProcessor?: BranchesApiResponseProcessor
    ) {
        this.api = new ObservableBranchesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.
     * Create a new branch
     * @param branchCreateRequest
     */
    public createBranchWithHttpInfo(branchCreateRequest: BranchCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IdResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBranchWithHttpInfo(branchCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.
     * Create a new branch
     * @param branchCreateRequest
     */
    public createBranch(branchCreateRequest: BranchCreateRequest, _options?: PromiseConfigurationOptions): Promise<IdResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBranch(branchCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing branch
     * @param branchId Branch identifier (branch_id).
     */
    public deleteBranchWithHttpInfo(branchId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBranchWithHttpInfo(branchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing branch
     * @param branchId Branch identifier (branch_id).
     */
    public deleteBranch(branchId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBranch(branchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a branch by identifier
     * @param branchId Branch identifier (branch_id).
     */
    public getBranchWithHttpInfo(branchId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Branch>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBranchWithHttpInfo(branchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a branch by identifier
     * @param branchId Branch identifier (branch_id).
     */
    public getBranch(branchId: string, _options?: PromiseConfigurationOptions): Promise<Branch> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBranch(branchId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of branches
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getBranchesWithHttpInfo(skip?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BranchList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBranchesWithHttpInfo(skip, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of branches
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getBranches(skip?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<BranchList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBranches(skip, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.
     * Update an existing branch
     * @param branchId Branch identifier (branch_id).
     * @param branchCreateRequest
     */
    public updateBranchWithHttpInfo(branchId: string, branchCreateRequest: BranchCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IdResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBranchWithHttpInfo(branchId, branchCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.
     * Update an existing branch
     * @param branchId Branch identifier (branch_id).
     * @param branchCreateRequest
     */
    public updateBranch(branchId: string, branchCreateRequest: BranchCreateRequest, _options?: PromiseConfigurationOptions): Promise<IdResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBranch(branchId, branchCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDiiaSignApi } from './ObservableAPI';

import { DiiaSignApiRequestFactory, DiiaSignApiResponseProcessor} from "../apis/DiiaSignApi";
export class PromiseDiiaSignApi {
    private api: ObservableDiiaSignApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DiiaSignApiRequestFactory,
        responseProcessor?: DiiaSignApiResponseProcessor
    ) {
        this.api = new ObservableDiiaSignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamicWithHttpInfo(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeeplinkResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOfferRequestDynamicWithHttpInfo(branchId, offerRequestDynamicCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamic(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: PromiseConfigurationOptions): Promise<DeeplinkResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOfferRequestDynamic(branchId, offerRequestDynamicCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatusWithHttpInfo(otp?: string, requestId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOfferRequestStatusWithHttpInfo(otp, requestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatus(otp?: string, requestId?: string, _options?: PromiseConfigurationOptions): Promise<RequestStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOfferRequestStatus(otp, requestId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOffersApi } from './ObservableAPI';

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class PromiseOffersApi {
    private api: ObservableOffersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).
     * Create an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerCreateRequest
     */
    public createOfferWithHttpInfo(branchId: string, offerCreateRequest: OfferCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IdResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOfferWithHttpInfo(branchId, offerCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).
     * Create an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerCreateRequest
     */
    public createOffer(branchId: string, offerCreateRequest: OfferCreateRequest, _options?: PromiseConfigurationOptions): Promise<IdResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOffer(branchId, offerCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerId Offer identifier (offer_id).
     */
    public deleteOfferWithHttpInfo(branchId: string, offerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOfferWithHttpInfo(branchId, offerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerId Offer identifier (offer_id).
     */
    public deleteOffer(branchId: string, offerId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOffer(branchId, offerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Do not request more than 100 offers per call — use `skip`/`limit` parameters.
     * Get the list of offers on a branch
     * @param branchId Branch identifier (branch_id).
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getOffersWithHttpInfo(branchId: string, skip?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OfferList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOffersWithHttpInfo(branchId, skip, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Do not request more than 100 offers per call — use `skip`/`limit` parameters.
     * Get the list of offers on a branch
     * @param branchId Branch identifier (branch_id).
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getOffers(branchId: string, skip?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<OfferList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOffers(branchId, skip, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSharingApi } from './ObservableAPI';

import { SharingApiRequestFactory, SharingApiResponseProcessor} from "../apis/SharingApi";
export class PromiseSharingApi {
    private api: ObservableSharingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharingApiRequestFactory,
        responseProcessor?: SharingApiResponseProcessor
    ) {
        this.api = new ObservableSharingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initiates document sharing at a physical branch: the operator passes the 13-digit Code128 barcode generated by the user\'s Diia app (scanned or entered manually). The barcode is valid for 3 minutes and is single-use.  On success a push notification with the sharing request is sent to the user. When the user confirms, the encrypted package is delivered by the Diia app to the partner endpoint; the partner must reply `200 {\"success\": true}` — see `diia-partner-receiver.yaml`.  Use `getDocumentRequestStatus` to track the request.
     * Create a document sharing request (offline / barcode scenario)
     * @param documentRequestCreate
     */
    public createDocumentRequestWithHttpInfo(documentRequestCreate: DocumentRequestCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentRequestWithHttpInfo(documentRequestCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Initiates document sharing at a physical branch: the operator passes the 13-digit Code128 barcode generated by the user\'s Diia app (scanned or entered manually). The barcode is valid for 3 minutes and is single-use.  On success a push notification with the sharing request is sent to the user. When the user confirms, the encrypted package is delivered by the Diia app to the partner endpoint; the partner must reply `200 {\"success\": true}` — see `diia-partner-receiver.yaml`.  Use `getDocumentRequestStatus` to track the request.
     * Create a document sharing request (offline / barcode scenario)
     * @param documentRequestCreate
     */
    public createDocumentRequest(documentRequestCreate: DocumentRequestCreate, _options?: PromiseConfigurationOptions): Promise<SuccessResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentRequest(documentRequestCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamicWithHttpInfo(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeeplinkResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOfferRequestDynamicWithHttpInfo(branchId, offerRequestDynamicCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamic(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: PromiseConfigurationOptions): Promise<DeeplinkResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOfferRequestDynamic(branchId, offerRequestDynamicCreate, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStatusApi } from './ObservableAPI';

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class PromiseStatusApi {
    private api: ObservableStatusApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.
     * Get the sharing status by barcode (offline scenario)
     * @param [barcode] Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getDocumentRequestStatusWithHttpInfo(barcode?: string, requestId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDocumentRequestStatusWithHttpInfo(barcode, requestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.
     * Get the sharing status by barcode (offline scenario)
     * @param [barcode] Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getDocumentRequestStatus(barcode?: string, requestId?: string, _options?: PromiseConfigurationOptions): Promise<RequestStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDocumentRequestStatus(barcode, requestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatusWithHttpInfo(otp?: string, requestId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOfferRequestStatusWithHttpInfo(otp, requestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatus(otp?: string, requestId?: string, _options?: PromiseConfigurationOptions): Promise<RequestStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOfferRequestStatus(otp, requestId, observableOptions);
        return result.toPromise();
    }


}



