# Diia.Client.Api.AuthApi

All URIs are relative to *https://api2.diia.gov.ua*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetSessionToken**](AuthApi.md#getsessiontoken) | **GET** /api/v1/auth/acquirer/{acquirer_token} | Get an acquirer session token |

<a id="getsessiontoken"></a>
# **GetSessionToken**
> SessionToken GetSessionToken (string acquirerToken)

Get an acquirer session token

Authorizes the partner server on the Diia server and returns a session token required by every other API call. The session token lives for 2 hours; several tokens may be used in parallel. Do not request a new token while the current one is still valid.  The `Authorization: Basic {auth_acquirer_token}` header is required **only in the test environment**; the token value is provided separately by ДП «Дія».

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class GetSessionTokenExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure HTTP basic authorization: basicAuth
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";

            var apiInstance = new AuthApi(config);
            var acquirerToken = bksoFji5v-test-token;  // string | Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ).

            try
            {
                // Get an acquirer session token
                SessionToken result = apiInstance.GetSessionToken(acquirerToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.GetSessionToken: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSessionTokenWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get an acquirer session token
    ApiResponse<SessionToken> response = apiInstance.GetSessionTokenWithHttpInfo(acquirerToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.GetSessionTokenWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **acquirerToken** | **string** | Acquirer token issued to the partner by ДП «Дія» for the specific environment (test and production tokens differ). |  |

### Return type

[**SessionToken**](SessionToken.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session token issued. Valid for 2 hours from this moment. |  -  |
| **401** | Unknown acquirer token (production environment). Contact the ДП «Дія» integration chat and report this error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

