# OfferCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Service name shown to the user in the request (e.g. «Відкриття рахунку»). | 
**return_link** | Option<**String**> | Optional link the user is redirected to after successful sharing/signing (your app, website or chatbot — do not point to third-party resources). Must start with `https://`. On Android 10+ the link must be allow-listed by ДП «Дія» — contact the integration team if the redirect does not happen. | [optional]
**scopes** | [**models::OfferScopes**](OfferScopes.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


