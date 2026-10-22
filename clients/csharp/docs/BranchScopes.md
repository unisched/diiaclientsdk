# Diia.Client.Model.BranchScopes
Scopes granted to the branch. Use `sharing` for document sharing and `diiaId` for Diia.Sign. `diiaId` accepts a single value — combining `hashedFilesSigning` and `auth` on one branch is rejected with `403 \"Only one scope value could be provided for the diiaId scope\"`; create a separate branch per Diia.Sign scenario.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sharing** | [**List&lt;DocumentType&gt;**](DocumentType.md) | Document types that may be shared from this branch. | [optional] 
**DiiaId** | [**List&lt;DiiaIdScope&gt;**](DiiaIdScope.md) | Diia.Sign scenario enabled for this branch. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

