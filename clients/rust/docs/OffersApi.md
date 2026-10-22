# \OffersApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_offer**](OffersApi.md#create_offer) | **POST** /api/v1/acquirers/branch/{branchId}/offer | Create an offer on a branch
[**delete_offer**](OffersApi.md#delete_offer) | **DELETE** /api/v1/acquirers/branch/{branchId}/offer/{offerId} | Delete an offer on a branch
[**get_offers**](OffersApi.md#get_offers) | **GET** /api/v1/acquirers/branch/{branchId}/offers | Get the list of offers on a branch



## create_offer

> models::IdResponse create_offer(branch_id, offer_create_request)
Create an offer on a branch

Creates an offer (пропозиція) on the branch. Offers, like branches, must be reused — create them once and pass `offer_id` with each request. The offer scopes must be a subset of the scopes granted to the branch.  If `returnLink` is provided, the user is redirected to it after successful sharing/signing (see also the offer `returnLink` notes in the `OfferCreateRequest` schema).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |
**offer_create_request** | [**OfferCreateRequest**](OfferCreateRequest.md) |  | [required] |

### Return type

[**models::IdResponse**](IdResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_offer

> delete_offer(branch_id, offer_id)
Delete an offer on a branch

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |
**offer_id** | **String** | Offer identifier (offer_id). | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_offers

> models::OfferList get_offers(branch_id, skip, limit)
Get the list of offers on a branch

Do not request more than 100 offers per call — use `skip`/`limit` parameters.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |
**skip** | Option<**i32**> | How many items to skip in the response (offset). |  |
**limit** | Option<**i32**> | How many items to return. No more than 100 items per request is recommended. |  |

### Return type

[**models::OfferList**](OfferList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

