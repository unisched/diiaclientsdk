# Diia.Client.Model.SuccessResponse
Response the Diia app expects from the partner endpoint on success. The full expected shape is `{\"success\": <boolean>, \"error\": <string>}` — on success only `success: true` is normally returned (within 30 seconds, HTTP 200).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **bool** | Operation result flag. | 
**Error** | **string** | Optional human-readable error description (the app expects the field in the contract; omit it on success). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

