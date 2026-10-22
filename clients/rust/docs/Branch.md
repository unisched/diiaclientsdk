# Branch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_full_name** | Option<**String**> | Full name of the document requester. If set, it is shown in the Diia app request instead of the concatenation of the partner name and the branch `name`. | [optional]
**custom_full_address** | Option<**String**> | Full branch address in your own format. If set, it is shown in the Diia app request instead of the `region`, `district`, `location`, `street`, `house` concatenation. | [optional]
**name** | **String** | Branch name. | 
**email** | **String** | Branch e-mail address. | 
**region** | **String** | Region (область). | 
**district** | **String** | District (район). | 
**location** | **String** | City. The sharing integration guide states minLength 2 while the Diia.Sign guide states minLength 4 — the stricter bound is used here. | 
**street** | **String** | Street. | 
**house** | **String** | Building number. | 
**delivery_types** | [**Vec<models::DeliveryType>**](DeliveryType.md) | Delivery types; must contain `api` for API integration. | 
**offer_request_type** | [**models::OfferRequestType**](OfferRequestType.md) |  | 
**scopes** | [**models::BranchScopes**](BranchScopes.md) |  | 
**_id** | **String** | Branch identifier (branch_id). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


