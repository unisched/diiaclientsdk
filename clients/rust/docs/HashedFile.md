# HashedFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **String** | File name shown to the user in the Diia app. | 
**file_hash** | **String** | Base64-encoded hash to be signed — 44 characters long (32 bytes after decoding). Per §2.1.2 of the guide the hash is computed according to ДСТУ 7564:2014; §3.5 additionally defines the hash function per `signAlgo` (`HASH_ALGO_GOST34311` for `DSTU`, `SHA256` for `ECDSA`, `HASH_ALGO_DSTU7564_256` for `DSTU4145-DSTU7564`). Generation of such hashes is provided by the IIT library. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


