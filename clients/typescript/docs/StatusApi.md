# .StatusApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocumentRequestStatus**](StatusApi.md#getDocumentRequestStatus) | **GET** /api/v1/acquirers/document-request/status | Get the sharing status by barcode (offline scenario)
[**getOfferRequestStatus**](StatusApi.md#getOfferRequestStatus) | **GET** /api/v1/acquirers/offer-request/status | Get the status by otp (online sharing / Diia.Sign)


# **getDocumentRequestStatus**
> RequestStatusResponse getDocumentRequestStatus()

Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.

### Example


```typescript
import { createConfiguration, StatusApi } from '';
import type { StatusApiGetDocumentRequestStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StatusApi(configuration);

const request: StatusApiGetDocumentRequestStatusRequest = {
    // Barcode of the sharing request. Provide `barcode` and/or `requestId` — at least one of the two parameters is required. (optional)
  barcode: "3535267635434",
    // Partner request identifier. Provide `requestId` and/or the barcode/otp — at least one of the two parameters is required. (optional)
  requestId: "a1234567-0123-1234-1234-123412341234",
};

const data = await apiInstance.getDocumentRequestStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barcode** | [**string**] | Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required. | (optional) defaults to undefined
 **requestId** | [**string**] | Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required. | (optional) defaults to undefined


### Return type

**RequestStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current status of the sharing request. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Either the status was requested for a barcode/otp that never had a request created, or the &#x60;requestId&#x60; was reused (&#x60;requestId&#x60; is unique). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOfferRequestStatus**
> RequestStatusResponse getOfferRequestStatus()

Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.

### Example


```typescript
import { createConfiguration, StatusApi } from '';
import type { StatusApiGetOfferRequestStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StatusApi(configuration);

const request: StatusApiGetOfferRequestStatusRequest = {
    // OTP — the last segment of the deeplink returned by `createOfferRequestDynamic`. For deeplink `https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc` the otp is `38abd418-f786-4a4d-a4d6-24fc842dacfc`. Provide `otp` and/or `requestId` — at least one of the two parameters is required. (optional)
  otp: "38abd418-f786-4a4d-a4d6-24fc842dacfc",
    // Partner request identifier. Provide `requestId` and/or the barcode/otp — at least one of the two parameters is required. (optional)
  requestId: "a1234567-0123-1234-1234-123412341234",
};

const data = await apiInstance.getOfferRequestStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otp** | [**string**] | OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required. | (optional) defaults to undefined
 **requestId** | [**string**] | Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required. | (optional) defaults to undefined


### Return type

**RequestStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current status of the request. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Either the status was requested for a barcode/otp that never had a request created, or the &#x60;requestId&#x60; was reused (&#x60;requestId&#x60; is unique). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


