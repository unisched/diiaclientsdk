# Diia.Client.Api.BranchesApi

All URIs are relative to *https://api2.diia.gov.ua*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateBranch**](BranchesApi.md#createbranch) | **POST** /api/v2/acquirers/branch | Create a new branch |
| [**DeleteBranch**](BranchesApi.md#deletebranch) | **DELETE** /api/v2/acquirers/branch/{branchId} | Delete an existing branch |
| [**GetBranch**](BranchesApi.md#getbranch) | **GET** /api/v2/acquirers/branch/{branchId} | Get a branch by identifier |
| [**GetBranches**](BranchesApi.md#getbranches) | **GET** /api/v2/acquirers/branches | Get the list of branches |
| [**UpdateBranch**](BranchesApi.md#updatebranch) | **PUT** /api/v2/acquirers/branch/{branchId} | Update an existing branch |

<a id="createbranch"></a>
# **CreateBranch**
> IdResponse CreateBranch (BranchCreateRequest branchCreateRequest)

Create a new branch

Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class CreateBranchExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new BranchesApi(config);
            var branchCreateRequest = new BranchCreateRequest(); // BranchCreateRequest | 

            try
            {
                // Create a new branch
                IdResponse result = apiInstance.CreateBranch(branchCreateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BranchesApi.CreateBranch: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateBranchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a new branch
    ApiResponse<IdResponse> response = apiInstance.CreateBranchWithHttpInfo(branchCreateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BranchesApi.CreateBranchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchCreateRequest** | [**BranchCreateRequest**](BranchCreateRequest.md) |  |  |

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
| **200** | Branch created. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **422** | Parameters validation error on branch creation/update. Make sure the body follows the documented structure (all fields are required, field names are case-sensitive). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletebranch"></a>
# **DeleteBranch**
> void DeleteBranch (string branchId)

Delete an existing branch

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class DeleteBranchExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new BranchesApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).

            try
            {
                // Delete an existing branch
                apiInstance.DeleteBranch(branchId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BranchesApi.DeleteBranch: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteBranchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an existing branch
    apiInstance.DeleteBranchWithHttpInfo(branchId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BranchesApi.DeleteBranchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |

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
| **204** | Branch deleted. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getbranch"></a>
# **GetBranch**
> Branch GetBranch (string branchId)

Get a branch by identifier

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class GetBranchExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new BranchesApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).

            try
            {
                // Get a branch by identifier
                Branch result = apiInstance.GetBranch(branchId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BranchesApi.GetBranch: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBranchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a branch by identifier
    ApiResponse<Branch> response = apiInstance.GetBranchWithHttpInfo(branchId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BranchesApi.GetBranchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |

### Return type

[**Branch**](Branch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Branch JSON. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getbranches"></a>
# **GetBranches**
> BranchList GetBranches (int? skip = null, int? limit = null)

Get the list of branches

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class GetBranchesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new BranchesApi(config);
            var skip = 0;  // int? | How many items to skip in the response (offset). (optional) 
            var limit = 100;  // int? | How many items to return. No more than 100 items per request is recommended. (optional) 

            try
            {
                // Get the list of branches
                BranchList result = apiInstance.GetBranches(skip, limit);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BranchesApi.GetBranches: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBranchesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get the list of branches
    ApiResponse<BranchList> response = apiInstance.GetBranchesWithHttpInfo(skip, limit);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BranchesApi.GetBranchesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **skip** | **int?** | How many items to skip in the response (offset). | [optional]  |
| **limit** | **int?** | How many items to return. No more than 100 items per request is recommended. | [optional]  |

### Return type

[**BranchList**](BranchList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of branches in the acquirer account. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatebranch"></a>
# **UpdateBranch**
> IdResponse UpdateBranch (string branchId, BranchCreateRequest branchCreateRequest)

Update an existing branch

Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Diia.Client.Api;
using Diia.Client.Client;
using Diia.Client.Model;

namespace Example
{
    public class UpdateBranchExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api2.diia.gov.ua";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new BranchesApi(config);
            var branchId = 5e8decccb92d8d73ad838c5d;  // string | Branch identifier (branch_id).
            var branchCreateRequest = new BranchCreateRequest(); // BranchCreateRequest | 

            try
            {
                // Update an existing branch
                IdResponse result = apiInstance.UpdateBranch(branchId, branchCreateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BranchesApi.UpdateBranch: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateBranchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an existing branch
    ApiResponse<IdResponse> response = apiInstance.UpdateBranchWithHttpInfo(branchId, branchCreateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BranchesApi.UpdateBranchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **branchId** | **string** | Branch identifier (branch_id). |  |
| **branchCreateRequest** | [**BranchCreateRequest**](BranchCreateRequest.md) |  |  |

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
| **200** | Branch updated. |  -  |
| **401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
| **404** | Branch identifier does not exist or the branch has been deleted. |  -  |
| **422** | Parameters validation error on branch creation/update. Make sure the body follows the documented structure (all fields are required, field names are case-sensitive). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

