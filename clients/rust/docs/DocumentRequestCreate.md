# DocumentRequestCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_id** | **String** | Identifier of the branch that requests the documents. | 
**barcode** | **String** | 13-digit Code128 barcode generated when the user flips a document in the Diia app (shown in the app and read by the operator). Valid for 3 minutes and single-use. | 
**request_id** | **String** | Partner-generated request identifier used to track the request. Returned in the `X-Document-Request-Trace-Id` header of the callback package. uuid v4 is the reference format, but any string between 10 and 255 characters is accepted. For the Diia.Sign authorization scenario the guide (§4.2.3.4) requires passing a base64-encoded DSTU 7564:2014 hash of the uuid v4 requestId here; the same value is returned in the `X-Document-Request-Trace-Id` header. | 
**use_diia_id** | Option<**bool**> | Optional. If `true`, the user is additionally asked to sign the document hashes with Diia.Sign (an active Diia.Sign certificate is required). | [optional]
**sign_algo** | Option<[**models::SignAlgo**](SignAlgo.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


