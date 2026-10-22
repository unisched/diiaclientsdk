# .DiiaSignApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOfferRequestDynamic**](DiiaSignApi.md#createOfferRequestDynamic) | **POST** /api/v2/acquirers/branch/{branchId}/offer-request/dynamic | Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
[**getOfferRequestStatus**](DiiaSignApi.md#getOfferRequestStatus) | **GET** /api/v1/acquirers/offer-request/status | Get the status by otp (online sharing / Diia.Sign)


# **createOfferRequestDynamic**
> DeeplinkResponse createOfferRequestDynamic(offerRequestDynamicCreate)

Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user\'s signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).

### Example


```typescript
import { createConfiguration, DiiaSignApi } from '';
import type { DiiaSignApiCreateOfferRequestDynamicRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DiiaSignApi(configuration);

const request: DiiaSignApiCreateOfferRequestDynamicRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
  
  offerRequestDynamicCreate: {
    offerId: "5e8decccb92d8d73ad838c5d",
    returnLink: "https://site.com",
    requestId: "a1234567-0123-1234-1234-123412341234",
    useDiiaId: true,
    signAlgo: "DSTU4145-DSTU7564",
    signType: 16,
    noSigningTime: false,
    noContentTimestamp: false,
    data: {
      hashedFilesSigning: {
        hashedFiles: [
          {
            fileName: "filename_1.pdf",
            fileHash: "4X55SRSjNsx94BS6o9OyKyeLvYnCYwXEW46vz0wAqHA=",
          },
        ],
      },
    },
  },
};

const data = await apiInstance.createOfferRequestDynamic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerRequestDynamicCreate** | **OfferRequestDynamicCreate**|  |
 **branchId** | [**string**] | Branch identifier (branch_id). | defaults to undefined


### Return type

**DeeplinkResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deeplink created. |  -  |
**400** | The request was rejected: the &#x60;requestId&#x60; has already been used (&#x60;requestId&#x60; must be unique), or the public encryption certificate installed on the acquirer account has expired and must be replaced. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**403** | Both Diia.Sign scenarios («hashedFilesSigning» and «auth») are integrated on the same branch — this is incompatible. Create at least one separate branch per Diia.Sign scenario. |  -  |
**404** | One of the following: the branch id in the path does not exist; the offer id in the body does not exist; the offer does not belong to the branch from the path; the &#x60;returnLink&#x60; field was sent as an empty string. |  -  |
**422** | Parameter validation error — &#x60;requestId&#x60; is missing or its length is out of the 10–255 range. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOfferRequestStatus**
> RequestStatusResponse getOfferRequestStatus()

Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.

### Example


```typescript
import { createConfiguration, DiiaSignApi } from '';
import type { DiiaSignApiGetOfferRequestStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DiiaSignApi(configuration);

const request: DiiaSignApiGetOfferRequestStatusRequest = {
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


