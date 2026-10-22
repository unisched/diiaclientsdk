# Diia.Client.Model.SignAlgo
Signature algorithm for signed copies of digital documents and hashed-file signing: * `DSTU` (default) — hashing with `HASH_ALGO_GOST34311`; * `ECDSA` — hashing with `SHA256`; * `DSTU4145-DSTU7564` — hashing with `HASH_ALGO_DSTU7564_256`. For `DSTU` and `DSTU4145-DSTU7564` a base64 hash string of 44 characters (32 bytes after decoding) is required; generation of such hashes is provided by the IIT library. With `DSTU` and `DSTU4145-DSTU7564` the decrypted data is in Cyrillic, with `ECDSA` — in Latin. Available from new versions of the Diia app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

