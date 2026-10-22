# \DiiaSignApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_offer_request_dynamic**](DiiaSignApi.md#create_offer_request_dynamic) | **POST** /api/v2/acquirers/branch/{branchId}/offer-request/dynamic | Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
[**get_offer_request_status**](DiiaSignApi.md#get_offer_request_status) | **GET** /api/v1/acquirers/offer-request/status | Get the status by otp (online sharing / Diia.Sign)



## create_offer_request_dynamic

> models::DeeplinkResponse create_offer_request_dynamic(branch_id, offer_request_dynamic_create)
Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)

Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user's signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |
**offer_request_dynamic_create** | [**OfferRequestDynamicCreate**](OfferRequestDynamicCreate.md) |  | [required] |

### Return type

[**models::DeeplinkResponse**](DeeplinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_offer_request_status

> models::RequestStatusResponse get_offer_request_status(otp, request_id)
Get the status by otp (online sharing / Diia.Sign)

Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**otp** | Option<**uuid::Uuid**> | OTP — the last segment of the deeplink returned by `createOfferRequestDynamic`. For deeplink `https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc` the otp is `38abd418-f786-4a4d-a4d6-24fc842dacfc`. Provide `otp` and/or `requestId` — at least one of the two parameters is required. |  |
**request_id** | Option<**String**> | Partner request identifier. Provide `requestId` and/or the barcode/otp — at least one of the two parameters is required. |  |

### Return type

[**models::RequestStatusResponse**](RequestStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

