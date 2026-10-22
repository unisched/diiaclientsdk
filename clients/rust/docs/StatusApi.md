# \StatusApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_document_request_status**](StatusApi.md#get_document_request_status) | **GET** /api/v1/acquirers/document-request/status | Get the sharing status by barcode (offline scenario)
[**get_offer_request_status**](StatusApi.md#get_offer_request_status) | **GET** /api/v1/acquirers/offer-request/status | Get the status by otp (online sharing / Diia.Sign)



## get_document_request_status

> models::RequestStatusResponse get_document_request_status(barcode, request_id)
Get the sharing status by barcode (offline scenario)

Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**barcode** | Option<**String**> | Barcode of the sharing request. Provide `barcode` and/or `requestId` — at least one of the two parameters is required. |  |
**request_id** | Option<**String**> | Partner request identifier. Provide `requestId` and/or the barcode/otp — at least one of the two parameters is required. |  |

### Return type

[**models::RequestStatusResponse**](RequestStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
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

