# Diia.Client.Model.ApiError
Error envelope returned by the Diia API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Error name: &#x60;Error&#x60;, &#x60;UnauthorizedError&#x60;, &#x60;ModelNotFoundError&#x60;, &#x60;NotFoundError&#x60;, &#x60;ValidationError&#x60;, etc. | 
**Message** | **string** | Human-readable error message. | 
**Code** | **int** | Error code (HTTP-like). | 
**Type** | **string** | Machine-readable error type; present in some errors (e.g. &#x60;NOT_FOUND&#x60;, &#x60;VALIDATION_ERROR&#x60;). | [optional] 
**Data** | **Object** | Additional error payload. Depends on the error kind: an empty object &#x60;{}&#x60;, &#x60;null&#x60;, an object with details (e.g. &#x60;{\&quot;barcode\&quot;: \&quot;1111111111111\&quot;}&#x60; or &#x60;{\&quot;now\&quot;: \&quot;...\&quot;, \&quot;expirationDate\&quot;: \&quot;...\&quot;}&#x60;), or an array of field errors (see &#x60;ValidationFieldError&#x60;). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

