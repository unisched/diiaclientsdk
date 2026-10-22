# \BranchesApi

All URIs are relative to *https://api2.diia.gov.ua*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_branch**](BranchesApi.md#create_branch) | **POST** /api/v2/acquirers/branch | Create a new branch
[**delete_branch**](BranchesApi.md#delete_branch) | **DELETE** /api/v2/acquirers/branch/{branchId} | Delete an existing branch
[**get_branch**](BranchesApi.md#get_branch) | **GET** /api/v2/acquirers/branch/{branchId} | Get a branch by identifier
[**get_branches**](BranchesApi.md#get_branches) | **GET** /api/v2/acquirers/branches | Get the list of branches
[**update_branch**](BranchesApi.md#update_branch) | **PUT** /api/v2/acquirers/branch/{branchId} | Update an existing branch



## create_branch

> models::IdResponse create_branch(branch_create_request)
Create a new branch

Creates a branch (відділення) of the partner organization from which document sharing requests are made. Branches are reusable — create the required number of branches once (separately in the test and production environments). Mass creation may be blocked by the service.  For API integration `deliveryTypes` must be `[\"api\"]` and `offerRequestType` must be `\"dynamic\"`. Field names are case-sensitive; send data in UTF-8.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_create_request** | [**BranchCreateRequest**](BranchCreateRequest.md) |  | [required] |

### Return type

[**models::IdResponse**](IdResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_branch

> delete_branch(branch_id)
Delete an existing branch

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_branch

> models::Branch get_branch(branch_id)
Get a branch by identifier

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |

### Return type

[**models::Branch**](Branch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_branches

> models::BranchList get_branches(skip, limit)
Get the list of branches

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**skip** | Option<**i32**> | How many items to skip in the response (offset). |  |
**limit** | Option<**i32**> | How many items to return. No more than 100 items per request is recommended. |  |

### Return type

[**models::BranchList**](BranchList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_branch

> models::IdResponse update_branch(branch_id, branch_create_request)
Update an existing branch

Updates the branch. **Important:** delete the offers created on the branch before editing it. Field names are case-sensitive; send data in UTF-8.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**branch_id** | **String** | Branch identifier (branch_id). | [required] |
**branch_create_request** | [**BranchCreateRequest**](BranchCreateRequest.md) |  | [required] |

### Return type

[**models::IdResponse**](IdResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

