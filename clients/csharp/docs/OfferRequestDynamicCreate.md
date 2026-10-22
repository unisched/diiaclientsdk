# Diia.Client.Model.OfferRequestDynamicCreate
Body of `POST /api/v2/acquirers/branch/{branchId}/offer-request/dynamic`. The same operation serves three scenarios and the scenario is determined by the branch/offer scopes, not by the body shape:  * **Online sharing** — the offer has `sharing` scopes; `useDiiaId` is optional; the user   gets a deeplink to open in the Diia app and share the requested documents. * **Diia.Sign — signing a file hash** — the offer has `diiaId: [hashedFilesSigning]`;   `data.hashedFilesSigning` is required; `signType`, `noSigningTime`, `noContentTimestamp`   control the CAdES signature. * **Diia.Sign — authorization** — the offer has `diiaId: [auth]`; `data` is not sent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OfferId** | **string** | Identifier of the offer (offer_id). The offer must belong to the branch specified in the path and its scopes must be allowed for that branch. | 
**ReturnLink** | **string** | Optional link the user is redirected to after successful sharing/signing. Must start with &#x60;https://&#x60;. An empty string is rejected with &#x60;Return link should be provided&#x60;. | [optional] 
**RequestId** | **string** | Partner-generated request identifier used to track the request. Returned in the &#x60;X-Document-Request-Trace-Id&#x60; header of the callback package. uuid v4 is the reference format, but any string between 10 and 255 characters is accepted. For the Diia.Sign authorization scenario the guide (§4.2.3.4) requires passing a base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId here; the same value is returned in the &#x60;X-Document-Request-Trace-Id&#x60; header. | 
**UseDiiaId** | **bool** | Optional (sharing scenario). If &#x60;true&#x60;, the user is additionally asked to sign the document hashes with Diia.Sign. | [optional] 
**SignAlgo** | **SignAlgo** |  | [optional] 
**SignType** | **SignType** |  | [optional] 
**NoSigningTime** | **bool** | &#x60;true&#x60; — do not add the signing time to the signature; &#x60;false&#x60; (default) — add it. | [optional] [default to false]
**NoContentTimestamp** | **bool** | &#x60;true&#x60; — do not receive a content timestamp; &#x60;false&#x60; (default) — receive it. | [optional] [default to false]
**Data** | [**HashedFilesSigningData**](HashedFilesSigningData.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

