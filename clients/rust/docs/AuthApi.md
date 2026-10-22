# \AuthApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_session_token**](AuthApi.md#get_session_token) | **GET** /api/v1/auth/acquirer/{acquirer_token} | Get an acquirer session token



## get_session_token

> models::SessionToken get_session_token(acquirer_token)
Get an acquirer session token

Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**acquirer_token** | **String** | Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ). | [required] |

### Return type

[**models::SessionToken**](SessionToken.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

