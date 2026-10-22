# Diia.Client.Model.RequestStatus
Sharing / Diia.Sign request status: * `initialized` — (online only) the deeplink was issued, the user has not opened it yet, the deeplink is not expired; * `processing` — the request reached the app: for barcode sharing the push was sent to the user; for online scenarios the user opened the deeplink; or the user dropped out without completing; * `done` — data successfully delivered to the partner endpoint and the partner replied `200 {\"success\": true}`; * `refuse` — the user declined, the code/deeplink was reused, or delivery to the partner endpoint failed; * `notUsed` — (online only) the user did not open the deeplink within 3 minutes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

