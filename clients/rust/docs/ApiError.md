# ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Error name: `Error`, `UnauthorizedError`, `ModelNotFoundError`, `NotFoundError`, `ValidationError`, etc. | 
**message** | **String** | Human-readable error message. | 
**code** | **i32** | Error code (HTTP-like). | 
**r#type** | Option<**String**> | Machine-readable error type; present in some errors (e.g. `NOT_FOUND`, `VALIDATION_ERROR`). | [optional]
**data** | Option<**serde_json::Value**> | Additional error payload. Depends on the error kind: an empty object `{}`, `null`, an object with details (e.g. `{\"barcode\": \"1111111111111\"}` or `{\"now\": \"...\", \"expirationDate\": \"...\"}`), or an array of field errors (see `ValidationFieldError`). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


