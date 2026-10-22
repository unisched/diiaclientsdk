# Diia.Client.Model.BranchCreateRequest
Branch (відділення) request body, used both for creation and update. Field names are case-sensitive; data must be sent in UTF-8 encoding. Before updating a branch, delete the offers created on it.  `customFullName` / `customFullAddress` override what the Diia app shows to the user in the sharing/signing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFullName** | **string** | Full name of the document requester. If set, it is shown in the Diia app request instead of the concatenation of the partner name and the branch &#x60;name&#x60;. | [optional] 
**CustomFullAddress** | **string** | Full branch address in your own format. If set, it is shown in the Diia app request instead of the &#x60;region&#x60;, &#x60;district&#x60;, &#x60;location&#x60;, &#x60;street&#x60;, &#x60;house&#x60; concatenation. | [optional] 
**Name** | **string** | Branch name. | 
**Email** | **string** | Branch e-mail address. | 
**Region** | **string** | Region (область). | 
**District** | **string** | District (район). | 
**Location** | **string** | City. The sharing integration guide states minLength 2 while the Diia.Sign guide states minLength 4 — the stricter bound is used here. | 
**Street** | **string** | Street. | 
**House** | **string** | Building number. | 
**DeliveryTypes** | [**List&lt;DeliveryType&gt;**](DeliveryType.md) | Delivery types; must contain &#x60;api&#x60; for API integration. | 
**OfferRequestType** | **OfferRequestType** |  | 
**Scopes** | [**BranchScopes**](BranchScopes.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

