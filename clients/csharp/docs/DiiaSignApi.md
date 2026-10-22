# Diia.Client.Api.DiiaSignApi

All URIs are relative to *https://api2.diia.gov.ua*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOfferRequestDynamic**](DiiaSignApi.md#createofferrequestdynamic) | **POST** /api/v2/acquirers/branch/{branchId}/offer-request/dynamic | Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign) |
| [**GetOfferRequestStatus**](DiiaSignApi.md#getofferrequeststatus) | **GET** /api/v1/acquirers/offer-request/status | Get the status by otp (online sharing / Diia.Sign) |

<a id="createofferrequestdynamic"></a>
# **CreateOfferRequestDynamic**
> DeeplinkResponse CreateOfferRequestDynamic (string branchId, OfferRequestDynamicCreate offerRequestDynamicCreate)

Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)

Creates a dynamic offer request and returns a deeplink to be opened in the Diia mobile app (for websites/terminals it is displayed as a QR code). The deeplink is one-time and valid for 3 minutes.  The same operation covers three scenarios — the branch/offer scopes determine which one is executed:  * **Online sharing (AppToApp / deeplink):** the user confirms the sharing request; the   encrypted package is delivered to the partner endpoint, which must reply   `200 {\"success\": true}` (see `diia-partner-receiver.yaml`). * **Diia.Sign — signing a file hash** (`diiaId: [hashedFilesSigning]`): the user signs   the provided file hashes; the signed items are delivered to the partner endpoint (see   `receiveSignature`). * **Diia.Sign — authorization** (`diiaId: [auth]`): the user's signed identifier is   delivered to the partner endpoint (see `receiveAuth`); the partner decides whether to   authorize the user.  If `returnLink` was provided at offer creation or in this request, the user is redirected to it after the scenario completes successfully.  For the Diia.Sign authorization scenario `requestId` must be the base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId (see diia_sign.md §4.2.3.4).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class CreateOfferRequestDynamicExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new DiiaSignApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).
            var offerRequestDynamicCreate = new OfferRequestDynamicCreate(); // OfferRequestDynamicCreate | 

            try
            {
                // Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
                DeeplinkResponse result = apiInstance.CreateOfferRequestDynamic(branchId, offerRequestDynamicCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DiiaSignApi.CreateOfferRequestDynamic: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOfferRequestDynamicWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a dynamic offer request and get a deeplink (online sharing / Diia.Sign)
    ApiResponse<DeeplinkResponse> response = apiInstance.CreateOfferRequestDynamicWithHttpInfo(branchId, offerRequestDynamicCreate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DiiaSignApi.CreateOfferRequestDynamicWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |
| **offerRequestDynamicCreate** | [**OfferRequestDynamicCreate**](OfferRequestDynamicCreate.md) |  |  |

### Return type

[**DeeplinkResponse**](DeeplinkResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deeplink created. |  -  |
| **400** | The request was rejected: the &#x60;requestId&#x60; has already been used (&#x60;requestId&#x60; must be unique), or the public encryption certificate installed on the acquirer account has expired and must be replaced. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **403** | Both Diia.Sign scenarios («hashedFilesSigning» and «auth») are integrated on the same branch — this is incompatible. Create at least one separate branch per Diia.Sign scenario. |  -  |
| **404** | One of the following: the branch id in the path does not exist; the offer id in the body does not exist; the offer does not belong to the branch from the path; the &#x60;returnLink&#x60; field was sent as an empty string. |  -  |
| **422** | Parameter validation error — &#x60;requestId&#x60; is missing or its length is out of the 10–255 range. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getofferrequeststatus"></a>
# **GetOfferRequestStatus**
> RequestStatusResponse GetOfferRequestStatus (Guid? otp = null, string? requestId = null)

Get the status by otp (online sharing / Diia.Sign)

Returns the status of an online request (sharing, file-hash signing or authorization). Provide `otp` and/or `requestId` — you may also pass only one of them. `otp` is the last segment of the deeplink returned by `createOfferRequestDynamic`.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class GetOfferRequestStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new DiiaSignApi(config);
            var otp = 38abd418-f786-4a4d-a4d6-24fc842dacfc;  // Guid? | OTP — the last segment of the deeplink returned by `createOfferRequestDynamic`. For deeplink `https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc` the otp is `38abd418-f786-4a4d-a4d6-24fc842dacfc`. Provide `otp` and/or `requestId` — at least one of the two parameters is required. (optional) 
            var requestId = "requestId_example";  // string? | Partner request identifier. Provide `requestId` and/or the barcode/otp — at least one of the two parameters is required. (optional) 

            try
            {
                // Get the status by otp (online sharing / Diia.Sign)
                RequestStatusResponse result = apiInstance.GetOfferRequestStatus(otp, requestId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DiiaSignApi.GetOfferRequestStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOfferRequestStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get the status by otp (online sharing / Diia.Sign)
    ApiResponse<RequestStatusResponse> response = apiInstance.GetOfferRequestStatusWithHttpInfo(otp, requestId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DiiaSignApi.GetOfferRequestStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **otp** | **Guid?** | OTP — the last segment of the deeplink returned by &#x60;createOfferRequestDynamic&#x60;. For deeplink &#x60;https://diia.app/acquirers/offer-request/dynamic/38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60; the otp is &#x60;38abd418-f786-4a4d-a4d6-24fc842dacfc&#x60;. Provide &#x60;otp&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required. | [optional]  |
| **requestId** | **string?** | Partner request identifier. Provide &#x60;requestId&#x60; and/or the barcode/otp — at least one of the two parameters is required. | [optional]  |

### Return type

[**RequestStatusResponse**](RequestStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current status of the request. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Either the status was requested for a barcode/otp that never had a request created, or the &#x60;requestId&#x60; was reused (&#x60;requestId&#x60; is unique). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

