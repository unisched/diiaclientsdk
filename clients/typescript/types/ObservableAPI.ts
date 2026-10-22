import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».
     * Get an acquirer session token
     * @param acquirerToken Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).
     */
    public getSessionTokenWithHttpInfo(acquirerToken: string, _options?: ConfigurationOptions): Observable<HttpInfo<SessionToken>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSessionToken(acquirerToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSessionTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».
     * Get an acquirer session token
     * @param acquirerToken Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).
     */
    public getSessionToken(acquirerToken: string, _options?: ConfigurationOptions): Observable<SessionToken> {
        return this.getSessionTokenWithHttpInfo(acquirerToken, _options).pipe(map((apiResponse: HttpInfo<SessionToken>) => apiResponse.data));
    }

}

import { BranchesApiRequestFactory, BranchesApiResponseProcessor} from "../apis/BranchesApi";
export class ObservableBranchesApi {
    private requestFactory: BranchesApiRequestFactory;
    private responseProcessor: BranchesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BranchesApiRequestFactory,
        responseProcessor?: BranchesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BranchesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BranchesApiResponseProcessor();
    }

    /**
     * Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.
     * Create a new branch
     * @param branchCreateRequest
     */
    public createBranchWithHttpInfo(branchCreateRequest: BranchCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<IdResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBranch(branchCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBranchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.
     * Create a new branch
     * @param branchCreateRequest
     */
    public createBranch(branchCreateRequest: BranchCreateRequest, _options?: ConfigurationOptions): Observable<IdResponse> {
        return this.createBranchWithHttpInfo(branchCreateRequest, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
    }

    /**
     * Delete an existing branch
     * @param branchId Branch identifier (branch_id).
     */
    public deleteBranchWithHttpInfo(branchId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBranch(branchId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBranchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing branch
     * @param branchId Branch identifier (branch_id).
     */
    public deleteBranch(branchId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteBranchWithHttpInfo(branchId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a branch by identifier
     * @param branchId Branch identifier (branch_id).
     */
    public getBranchWithHttpInfo(branchId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Branch>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBranch(branchId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBranchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a branch by identifier
     * @param branchId Branch identifier (branch_id).
     */
    public getBranch(branchId: string, _options?: ConfigurationOptions): Observable<Branch> {
        return this.getBranchWithHttpInfo(branchId, _options).pipe(map((apiResponse: HttpInfo<Branch>) => apiResponse.data));
    }

    /**
     * Get the list of branches
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getBranchesWithHttpInfo(skip?: number, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<BranchList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBranches(skip, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBranchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the list of branches
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getBranches(skip?: number, limit?: number, _options?: ConfigurationOptions): Observable<BranchList> {
        return this.getBranchesWithHttpInfo(skip, limit, _options).pipe(map((apiResponse: HttpInfo<BranchList>) => apiResponse.data));
    }

    /**
     * Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.
     * Update an existing branch
     * @param branchId Branch identifier (branch_id).
     * @param branchCreateRequest
     */
    public updateBranchWithHttpInfo(branchId: string, branchCreateRequest: BranchCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<IdResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBranch(branchId, branchCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBranchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.
     * Update an existing branch
     * @param branchId Branch identifier (branch_id).
     * @param branchCreateRequest
     */
    public updateBranch(branchId: string, branchCreateRequest: BranchCreateRequest, _options?: ConfigurationOptions): Observable<IdResponse> {
        return this.updateBranchWithHttpInfo(branchId, branchCreateRequest, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
    }

}

import { DiiaSignApiRequestFactory, DiiaSignApiResponseProcessor} from "../apis/DiiaSignApi";
export class ObservableDiiaSignApi {
    private requestFactory: DiiaSignApiRequestFactory;
    private responseProcessor: DiiaSignApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DiiaSignApiRequestFactory,
        responseProcessor?: DiiaSignApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DiiaSignApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DiiaSignApiResponseProcessor();
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamicWithHttpInfo(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: ConfigurationOptions): Observable<HttpInfo<DeeplinkResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOfferRequestDynamic(branchId, offerRequestDynamicCreate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferRequestDynamicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamic(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: ConfigurationOptions): Observable<DeeplinkResponse> {
        return this.createOfferRequestDynamicWithHttpInfo(branchId, offerRequestDynamicCreate, _options).pipe(map((apiResponse: HttpInfo<DeeplinkResponse>) => apiResponse.data));
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatusWithHttpInfo(otp?: string, requestId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RequestStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOfferRequestStatus(otp, requestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferRequestStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatus(otp?: string, requestId?: string, _options?: ConfigurationOptions): Observable<RequestStatusResponse> {
        return this.getOfferRequestStatusWithHttpInfo(otp, requestId, _options).pipe(map((apiResponse: HttpInfo<RequestStatusResponse>) => apiResponse.data));
    }

}

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class ObservableOffersApi {
    private requestFactory: OffersApiRequestFactory;
    private responseProcessor: OffersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OffersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OffersApiResponseProcessor();
    }

    /**
     * Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).
     * Create an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerCreateRequest
     */
    public createOfferWithHttpInfo(branchId: string, offerCreateRequest: OfferCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<IdResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOffer(branchId, offerCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).
     * Create an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerCreateRequest
     */
    public createOffer(branchId: string, offerCreateRequest: OfferCreateRequest, _options?: ConfigurationOptions): Observable<IdResponse> {
        return this.createOfferWithHttpInfo(branchId, offerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<IdResponse>) => apiResponse.data));
    }

    /**
     * Delete an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerId Offer identifier (offer_id).
     */
    public deleteOfferWithHttpInfo(branchId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOffer(branchId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an offer on a branch
     * @param branchId Branch identifier (branch_id).
     * @param offerId Offer identifier (offer_id).
     */
    public deleteOffer(branchId: string, offerId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOfferWithHttpInfo(branchId, offerId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Do not request more than 100 offers per call — use `skip`/`limit` parameters.
     * Get the list of offers on a branch
     * @param branchId Branch identifier (branch_id).
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getOffersWithHttpInfo(branchId: string, skip?: number, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<OfferList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOffers(branchId, skip, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOffersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Do not request more than 100 offers per call — use `skip`/`limit` parameters.
     * Get the list of offers on a branch
     * @param branchId Branch identifier (branch_id).
     * @param [skip] How many items to skip in the response (offset).
     * @param [limit] How many items to return. No more than 100 items per request is recommended.
     */
    public getOffers(branchId: string, skip?: number, limit?: number, _options?: ConfigurationOptions): Observable<OfferList> {
        return this.getOffersWithHttpInfo(branchId, skip, limit, _options).pipe(map((apiResponse: HttpInfo<OfferList>) => apiResponse.data));
    }

}

import { SharingApiRequestFactory, SharingApiResponseProcessor} from "../apis/SharingApi";
export class ObservableSharingApi {
    private requestFactory: SharingApiRequestFactory;
    private responseProcessor: SharingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SharingApiRequestFactory,
        responseProcessor?: SharingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SharingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SharingApiResponseProcessor();
    }

    /**
     * Initiates document sharing at a physical branch: the operator passes the 13-digit Code128 barcode generated by the user\'s Diia app (scanned or entered manually). The barcode is valid for 3 minutes and is single-use.  On success a push notification with the sharing request is sent to the user. When the user confirms, the encrypted package is delivered by the Diia app to the partner endpoint; the partner must reply `200 {\"success\": true}` — see `diia-partner-receiver.yaml`.  Use `getDocumentRequestStatus` to track the request.
     * Create a document sharing request (offline / barcode scenario)
     * @param documentRequestCreate
     */
    public createDocumentRequestWithHttpInfo(documentRequestCreate: DocumentRequestCreate, _options?: ConfigurationOptions): Observable<HttpInfo<SuccessResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDocumentRequest(documentRequestCreate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDocumentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initiates document sharing at a physical branch: the operator passes the 13-digit Code128 barcode generated by the user\'s Diia app (scanned or entered manually). The barcode is valid for 3 minutes and is single-use.  On success a push notification with the sharing request is sent to the user. When the user confirms, the encrypted package is delivered by the Diia app to the partner endpoint; the partner must reply `200 {\"success\": true}` — see `diia-partner-receiver.yaml`.  Use `getDocumentRequestStatus` to track the request.
     * Create a document sharing request (offline / barcode scenario)
     * @param documentRequestCreate
     */
    public createDocumentRequest(documentRequestCreate: DocumentRequestCreate, _options?: ConfigurationOptions): Observable<SuccessResponse> {
        return this.createDocumentRequestWithHttpInfo(documentRequestCreate, _options).pipe(map((apiResponse: HttpInfo<SuccessResponse>) => apiResponse.data));
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamicWithHttpInfo(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: ConfigurationOptions): Observable<HttpInfo<DeeplinkResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOfferRequestDynamic(branchId, offerRequestDynamicCreate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferRequestDynamicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).
     * Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
     * @param branchId Branch identifier (branch_id).
     * @param offerRequestDynamicCreate
     */
    public createOfferRequestDynamic(branchId: string, offerRequestDynamicCreate: OfferRequestDynamicCreate, _options?: ConfigurationOptions): Observable<DeeplinkResponse> {
        return this.createOfferRequestDynamicWithHttpInfo(branchId, offerRequestDynamicCreate, _options).pipe(map((apiResponse: HttpInfo<DeeplinkResponse>) => apiResponse.data));
    }

}

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class ObservableStatusApi {
    private requestFactory: StatusApiRequestFactory;
    private responseProcessor: StatusApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusApiResponseProcessor();
    }

    /**
     * Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.
     * Get the sharing status by barcode (offline scenario)
     * @param [barcode] Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getDocumentRequestStatusWithHttpInfo(barcode?: string, requestId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RequestStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDocumentRequestStatus(barcode, requestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentRequestStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.
     * Get the sharing status by barcode (offline scenario)
     * @param [barcode] Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getDocumentRequestStatus(barcode?: string, requestId?: string, _options?: ConfigurationOptions): Observable<RequestStatusResponse> {
        return this.getDocumentRequestStatusWithHttpInfo(barcode, requestId, _options).pipe(map((apiResponse: HttpInfo<RequestStatusResponse>) => apiResponse.data));
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatusWithHttpInfo(otp?: string, requestId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<RequestStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOfferRequestStatus(otp, requestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferRequestStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.
     * Get the status by otp (online sharing / Diia.Sign)
     * @param [otp] OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required.
     * @param [requestId] Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required.
     */
    public getOfferRequestStatus(otp?: string, requestId?: string, _options?: ConfigurationOptions): Observable<RequestStatusResponse> {
        return this.getOfferRequestStatusWithHttpInfo(otp, requestId, _options).pipe(map((apiResponse: HttpInfo<RequestStatusResponse>) => apiResponse.data));
    }

}
