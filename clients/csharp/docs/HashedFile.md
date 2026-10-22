# Diia.Client.Model.HashedFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | **string** | File name shown to the user in the Diia app. | 
**FileHash** | **string** | Base64-encoded hash to be signed — 44 characters long (32 bytes after decoding). Per §2.1.2 of the guide the hash is computed according to ДСТУ 7564:2014; §3.5 additionally defines the hash function per &#x60;signAlgo&#x60; (&#x60;HASH_ALGO_GOST34311&#x60; for &#x60;DSTU&#x60;, &#x60;SHA256&#x60; for &#x60;ECDSA&#x60;, &#x60;HASH_ALGO_DSTU7564_256&#x60; for &#x60;DSTU4145-DSTU7564&#x60;). Generation of such hashes is provided by the IIT library. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

