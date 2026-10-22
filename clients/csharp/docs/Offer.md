# Diia.Client.Model.Offer
Offer as returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Service name shown to the user in the request (e.g. «Відкриття рахунку»). | 
**ReturnLink** | **string** | Optional link the user is redirected to after successful sharing/signing (your app, website or chatbot — do not point to third-party resources). Must start with &#x60;https://&#x60;. On Android 10+ the link must be allow-listed by ДП «Дія» — contact the integration team if the redirect does not happen. | [optional] 
**Scopes** | [**OfferScopes**](OfferScopes.md) |  | 
**Id** | **string** | Offer identifier (offer_id). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

