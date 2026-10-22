# Diia.Client.Api.OffersApi

All URIs are relative to *https://api2.diia.gov.ua*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOffer**](OffersApi.md#createoffer) | **POST** /api/v1/acquirers/branch/{branchId}/offer | Create an offer on a branch |
| [**DeleteOffer**](OffersApi.md#deleteoffer) | **DELETE** /api/v1/acquirers/branch/{branchId}/offer/{offerId} | Delete an offer on a branch |
| [**GetOffers**](OffersApi.md#getoffers) | **GET** /api/v1/acquirers/branch/{branchId}/offers | Get the list of offers on a branch |

<a id="createoffer"></a>
# **CreateOffer**
> IdResponse CreateOffer (string branchId, OfferCreateRequest offerCreateRequest)

Create an offer on a branch

Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class CreateOfferExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new OffersApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).
            var offerCreateRequest = new OfferCreateRequest(); // OfferCreateRequest | 

            try
            {
                // Create an offer on a branch
                IdResponse result = apiInstance.CreateOffer(branchId, offerCreateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OffersApi.CreateOffer: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOfferWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an offer on a branch
    ApiResponse<IdResponse> response = apiInstance.CreateOfferWithHttpInfo(branchId, offerCreateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OffersApi.CreateOfferWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |
| **offerCreateRequest** | [**OfferCreateRequest**](OfferCreateRequest.md) |  |  |

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Offer created. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteoffer"></a>
# **DeleteOffer**
> void DeleteOffer (string branchId, string offerId)

Delete an offer on a branch

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class DeleteOfferExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new OffersApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).
            var offerId = 1234;  // string | Offer identifier (offer_id).

            try
            {
                // Delete an offer on a branch
                apiInstance.DeleteOffer(branchId, offerId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OffersApi.DeleteOffer: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOfferWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an offer on a branch
    apiInstance.DeleteOfferWithHttpInfo(branchId, offerId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OffersApi.DeleteOfferWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |
| **offerId** | **string** | Offer identifier (offer_id). |  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Offer deleted. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getoffers"></a>
# **GetOffers**
> OfferList GetOffers (string branchId, int? skip = null, int? limit = null)

Get the list of offers on a branch

Do not request more than 100 offers per call — use `skip`/`limit` parameters.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class GetOffersExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new OffersApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).
            var skip = 0;  // int? | How many items to skip in the response (offset). (optional) 
            var limit = 100;  // int? | How many items to return. No more than 100 items per request is recommended. (optional) 

            try
            {
                // Get the list of offers on a branch
                OfferList result = apiInstance.GetOffers(branchId, skip, limit);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OffersApi.GetOffers: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOffersWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get the list of offers on a branch
    ApiResponse<OfferList> response = apiInstance.GetOffersWithHttpInfo(branchId, skip, limit);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OffersApi.GetOffersWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |
| **skip** | **int?** | How many items to skip in the response (offset). | [optional]  |
| **limit** | **int?** | How many items to return. No more than 100 items per request is recommended. | [optional]  |

### Return type

[**OfferList**](OfferList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of offers created on the branch. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

