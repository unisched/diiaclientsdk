# OfferRequestDynamicCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **String** | Identifier of the offer (offer_id). The offer must belong to the branch specified in the path and its scopes must be allowed for that branch. | 
**return_link** | Option<**String**> | Optional link the user is redirected to after successful sharing/signing. Must start with `https://`. An empty string is rejected with `Return link should be provided`. | [optional]
**request_id** | **String** | Partner-generated request identifier used to track the request. Returned in the `X-Document-Request-Trace-Id` header of the callback package. uuid v4 is the reference format, but any string between 10 and 255 characters is accepted. For the Diia.Sign authorization scenario the guide (§4.2.3.4) requires passing a base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId here; the same value is returned in the `X-Document-Request-Trace-Id` header. | 
**use_diia_id** | Option<**bool**> | Optional (sharing scenario). If `true`, the user is additionally asked to sign the document hashes with Diia.Sign. | [optional]
**sign_algo** | Option<[**models::SignAlgo**](SignAlgo.md)> |  | [optional]
**sign_type** | Option<[**models::SignType**](SignType.md)> |  | [optional]
**no_signing_time** | Option<**bool**> | `true` — do not add the signing time to the signature; `false` (default) — add it. | [optional][default to false]
**no_content_timestamp** | Option<**bool**> | `true` — do not receive a content timestamp; `false` (default) — receive it. | [optional][default to false]
**data** | Option<[**models::HashedFilesSigningData**](HashedFilesSigningData.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


