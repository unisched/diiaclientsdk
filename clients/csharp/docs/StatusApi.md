# Diia.Client.Api.StatusApi

All URIs are relative to *https://api2.diia.gov.ua*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetDocumentRequestStatus**](StatusApi.md#getdocumentrequeststatus) | **GET** /api/v1/acquirers/document-request/status | Get the sharing status by barcode (offline scenario) |
| [**GetOfferRequestStatus**](StatusApi.md#getofferrequeststatus) | **GET** /api/v1/acquirers/offer-request/status | Get the status by otp (online sharing / Diia.Sign) |

<a id="getdocumentrequeststatus"></a>
# **GetDocumentRequestStatus**
> RequestStatusResponse GetDocumentRequestStatus (string? barcode = null, string? requestId = null)

Get the sharing status by barcode (offline scenario)

Returns the status of an offline sharing request. Provide `barcode` and/or `requestId` — you may also pass only one of them. If a barcode was reused with a new `requestId`, the status of the original (already performed) sharing is returned.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class GetDocumentRequestStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new StatusApi(config);
            var barcode = "barcode_example";  // string? | Barcode of the sharing request. Provide `barcode` and/or `requestId` — at least one of the two parameters is required. (optional) 
            var requestId = "requestId_example";  // string? | Partner request identifier. Provide `requestId` and/or the barcode/otp — at least one of the two parameters is required. (optional) 

            try
            {
                // Get the sharing status by barcode (offline scenario)
                RequestStatusResponse result = apiInstance.GetDocumentRequestStatus(barcode, requestId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StatusApi.GetDocumentRequestStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDocumentRequestStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get the sharing status by barcode (offline scenario)
    ApiResponse<RequestStatusResponse> response = apiInstance.GetDocumentRequestStatusWithHttpInfo(barcode, requestId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StatusApi.GetDocumentRequestStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **barcode** | **string?** | Barcode of the sharing request. Provide &#x60;barcode&#x60; and/or &#x60;requestId&#x60; — at least one of the two parameters is required. | [optional]  |
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
| **200** | Current status of the sharing request. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Either the status was requested for a barcode/otp that never had a request created, or the &#x60;requestId&#x60; was reused (&#x60;requestId&#x60; is unique). |  -  |

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

            var apiInstance = new StatusApi(config);
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
                Debug.Print("Exception when calling StatusApi.GetOfferRequestStatus: " + e.Message);
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
    Debug.Print("Exception when calling StatusApi.GetOfferRequestStatusWithHttpInfo: " + e.Message);
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

