# Diia.Client.Model.OfferScopes
Scopes of the offer; must be a subset of the scopes granted to the branch. `sharing` — documents that the user will be asked to share; `diiaId` — the Diia.Sign scenario (`hashedFilesSigning` or `auth`).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sharing** | [**List&lt;DocumentType&gt;**](DocumentType.md) | Document types requested within this offer. | [optional] 
**DiiaId** | [**List&lt;DiiaIdScope&gt;**](DiiaIdScope.md) | Diia.Sign scenario of this offer. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

