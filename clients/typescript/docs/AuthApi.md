# .AuthApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSessionToken**](AuthApi.md#getSessionToken) | **GET** /api/v1/auth/acquirer/{acquirer_token} | Get an acquirer session token


# **getSessionToken**
> SessionToken getSessionToken()

Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».

### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiGetSessionTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiGetSessionTokenRequest = {
    // Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).
  acquirerToken: "bksoFji5v-test-token",
};

const data = await apiInstance.getSessionToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acquirerToken** | [**string**] | Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ). | defaults to undefined


### Return type

**SessionToken**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session token issued. Valid for 2 hours from this moment. |  -  |
**401** | Unknown acquirer token (production environment). Contact the ДП «Дія» integration chat and report this error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


