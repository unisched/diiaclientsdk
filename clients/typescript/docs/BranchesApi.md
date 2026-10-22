# .BranchesApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBranch**](BranchesApi.md#createBranch) | **POST** /api/v2/acquirers/branch | Create a new branch
[**deleteBranch**](BranchesApi.md#deleteBranch) | **DELETE** /api/v2/acquirers/branch/{branchId} | Delete an existing branch
[**getBranch**](BranchesApi.md#getBranch) | **GET** /api/v2/acquirers/branch/{branchId} | Get a branch by identifier
[**getBranches**](BranchesApi.md#getBranches) | **GET** /api/v2/acquirers/branches | Get the list of branches
[**updateBranch**](BranchesApi.md#updateBranch) | **PUT** /api/v2/acquirers/branch/{branchId} | Update an existing branch


# **createBranch**
> IdResponse createBranch(branchCreateRequest)

Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.

### Example


```typescript
import { createConfiguration, BranchesApi } from '';
import type { BranchesApiCreateBranchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BranchesApi(configuration);

const request: BranchesApiCreateBranchRequest = {
  
  branchCreateRequest: {
    customFullName: "Повна назва запитувача документа",
    customFullAddress: "Повна адреса відділення",
    name: "Назва відділення",
    email: "test@email.com",
    region: "Київська обл.",
    district: "Києво-Святошинський р-н",
    location: "м. Вишневе",
    street: "вул. Київська",
    house: "2г",
    deliveryTypes: [
      "api",
    ],
    offerRequestType: "dynamic",
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

const data = await apiInstance.createBranch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchCreateRequest** | **BranchCreateRequest**|  |


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
**200** | Branch created. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**422** | Parameters validation error on branch creation/update. Make sure the body follows the documented structure (all fields are required, field names are case-sensitive). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBranch**
> void deleteBranch()


### Example


```typescript
import { createConfiguration, BranchesApi } from '';
import type { BranchesApiDeleteBranchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BranchesApi(configuration);

const request: BranchesApiDeleteBranchRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
};

const data = await apiInstance.deleteBranch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | [**string**] | Branch identifier (branch_id). | defaults to undefined


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
**204** | Branch deleted. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBranch**
> Branch getBranch()


### Example


```typescript
import { createConfiguration, BranchesApi } from '';
import type { BranchesApiGetBranchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BranchesApi(configuration);

const request: BranchesApiGetBranchRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
};

const data = await apiInstance.getBranch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | [**string**] | Branch identifier (branch_id). | defaults to undefined


### Return type

**Branch**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Branch JSON. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Branch identifier does not exist or the branch has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBranches**
> BranchList getBranches()


### Example


```typescript
import { createConfiguration, BranchesApi } from '';
import type { BranchesApiGetBranchesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BranchesApi(configuration);

const request: BranchesApiGetBranchesRequest = {
    // How many items to skip in the response (offset). (optional)
  skip: 0,
    // How many items to return. No more than 100 items per request is recommended. (optional)
  limit: 100,
};

const data = await apiInstance.getBranches(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | [**number**] | How many items to skip in the response (offset). | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return. No more than 100 items per request is recommended. | (optional) defaults to undefined


### Return type

**BranchList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of branches in the acquirer account. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBranch**
> IdResponse updateBranch(branchCreateRequest)

Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.

### Example


```typescript
import { createConfiguration, BranchesApi } from '';
import type { BranchesApiUpdateBranchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BranchesApi(configuration);

const request: BranchesApiUpdateBranchRequest = {
    // Branch identifier (branch_id).
  branchId: "5e8decccb92d8d73ad838c5d",
  
  branchCreateRequest: {
    customFullName: "Повна назва запитувача документа",
    customFullAddress: "Повна адреса відділення",
    name: "Назва відділення",
    email: "test@email.com",
    region: "Київська обл.",
    district: "Києво-Святошинський р-н",
    location: "м. Вишневе",
    street: "вул. Київська",
    house: "2г",
    deliveryTypes: [
      "api",
    ],
    offerRequestType: "dynamic",
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

const data = await apiInstance.updateBranch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchCreateRequest** | **BranchCreateRequest**|  |
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
**200** | Branch updated. |  -  |
**401** | Session token is missing, invalid or expired (session tokens live 2 hours from the moment they are issued). Alternatively the &#x60;Authorization: Bearer {session_token}&#x60; header was not provided correctly. |  -  |
**404** | Branch identifier does not exist or the branch has been deleted. |  -  |
**422** | Parameters validation error on branch creation/update. Make sure the body follows the documented structure (all fields are required, field names are case-sensitive). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


