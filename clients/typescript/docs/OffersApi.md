# .OffersApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOffer**](OffersApi.md#createOffer) | **POST** /api/v1/acquirers/branch/{branchId}/offer | Create an offer on a branch
[**deleteOffer**](OffersApi.md#deleteOffer) | **DELETE** /api/v1/acquirers/branch/{branchId}/offer/{offerId} | Delete an offer on a branch
[**getOffers**](OffersApi.md#getOffers) | **GET** /api/v1/acquirers/branch/{branchId}/offers | Get the list of offers on a branch


# **createOffer**
> IdResponse createOffer(offerCreateRequest)

Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).

### Example


```typescript
import { createConfiguration, OffersApi } from '';
import type { OffersApiCreateOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OffersApi(configuration);

const request: OffersApiCreateOfferRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
  
  offerCreateRequest: {
    name: "Назва послуги",
    returnLink: "https://site.com",
    scopes: {
      sharing: [
        "internal-passport",
      ],
      diiaId: [
        "hashedFilesSigning",
      ],
    },
  },
};

const data = await apiInstance.createOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerCreateRequest** | **OfferCreateRequest**|  |
 **branchId** | [**string**] | Branch identifier (branch_id). | defaults to undefined


### Return type

**IdResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offer created. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOffer**
> void deleteOffer()


### Example


```typescript
import { createConfiguration, OffersApi } from '';
import type { OffersApiDeleteOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OffersApi(configuration);

const request: OffersApiDeleteOfferRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
    // Offer identifier (offer_id).
  offerId: "1234",
};

const data = await apiInstance.deleteOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | [**string**] | Branch identifier (branch_id). | defaults to undefined
 **offerId** | [**string**] | Offer identifier (offer_id). | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Offer deleted. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOffers**
> OfferList getOffers()

Do not request more than 100 offers per call — use `skip`/`limit` parameters.

### Example


```typescript
import { createConfiguration, OffersApi } from '';
import type { OffersApiGetOffersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OffersApi(configuration);

const request: OffersApiGetOffersRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
    // How many items to skip in the response (offset). (optional)
  skip: 0,
    // How many items to return. No more than 100 items per request is recommended. (optional)
  limit: 100,
};

const data = await apiInstance.getOffers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | [**string**] | Branch identifier (branch_id). | defaults to undefined
 **skip** | [**number**] | How many items to skip in the response (offset). | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return. No more than 100 items per request is recommended. | (optional) defaults to undefined


### Return type

**OfferList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of offers created on the branch. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


