# SessionToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | Acquirer session token. Valid for 2 hours from the moment it is issued. Pass it as `Authorization: Bearer {session_token}` in every other API call. Several session tokens may be obtained and used in parallel (e.g. when the partner service runs on multiple nodes); do not request a new token while the current one is still valid. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


