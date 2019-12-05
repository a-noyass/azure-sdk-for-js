let nock = require('nock');

module.exports.testInfo = {"uniqueName":{"filesystem":"filesystem157534378810205525","dir":"dir157534378924906886"},"newDate":{}}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem157534378810205525')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:50 GMT',
  'ETag',
  '"0x8D777A0379AE7D4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '758f5baa-001e-0040-4189-a96c70000000',
  'x-ms-client-request-id',
  '7519794f-9d08-4f5c-a2b5-7800387c4f1c',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Tue, 03 Dec 2019 03:23:50 GMT' ]);

nock('https://fakestorageaccount.dfs.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem157534378810205525/dir157534378924906886')
  .query(true)
  .reply(201, "", [ 'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-HDFS/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2c35c5f6-f01f-0038-5489-a904c7000000',
  'x-ms-version',
  '2019-02-02',
  'x-ms-client-request-id',
  '1359af1f-cef0-42d7-b53e-bef17f0d9ec5',
  'Date',
  'Tue, 03 Dec 2019 03:23:51 GMT',
  'Content-Length',
  '0' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem157534378810205525/dir157534378924906886')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2d0a770d-701e-0029-1c89-a933dc000000',
  'x-ms-client-request-id',
  'a609df09-f9f6-4cab-98f8-715f856798ee',
  'x-ms-version',
  '2019-02-02',
  'x-ms-lease-id',
  'ca761232-ed42-11ce-bacd-00aa0057b223',
  'Date',
  'Tue, 03 Dec 2019 03:23:53 GMT' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/filesystem157534378810205525/dir157534378924906886')
  .reply(200, "", [ 'Content-Length',
  '0',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '967e17a3-a01e-0020-6089-a92952000000',
  'x-ms-client-request-id',
  'dc56502a-084f-466e-b2bd-96649eea92a0',
  'x-ms-version',
  '2019-02-02',
  'x-ms-meta-hdi_isfolder',
  'true',
  'x-ms-creation-time',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'x-ms-lease-status',
  'locked',
  'x-ms-lease-state',
  'leased',
  'x-ms-lease-duration',
  'fixed',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-meta-hdi_isfolder,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-lease-duration,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 03 Dec 2019 03:23:54 GMT' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/filesystem157534378810205525/dir157534378924906886')
  .reply(200, "", [ 'Content-Length',
  '0',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '967e417d-a01e-0020-0d89-a92952000000',
  'x-ms-client-request-id',
  '41ec5324-e6b4-4fec-b68d-ab83279af91e',
  'x-ms-version',
  '2019-02-02',
  'x-ms-meta-hdi_isfolder',
  'true',
  'x-ms-creation-time',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'x-ms-lease-status',
  'locked',
  'x-ms-lease-state',
  'expired',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-meta-hdi_isfolder,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 03 Dec 2019 03:24:14 GMT' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem157534378810205525/dir157534378924906886')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2d0aa799-701e-0029-0589-a933dc000000',
  'x-ms-client-request-id',
  '8105f69b-f862-4eaf-aa30-65e224ce56d1',
  'x-ms-version',
  '2019-02-02',
  'x-ms-lease-id',
  'ca761232-ed42-11ce-bacd-00aa0057b223',
  'Date',
  'Tue, 03 Dec 2019 03:24:14 GMT' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/filesystem157534378810205525/dir157534378924906886')
  .reply(200, "", [ 'Content-Length',
  '0',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '967e4286-a01e-0020-7c89-a92952000000',
  'x-ms-client-request-id',
  'a6fd8bef-66f5-4449-9836-0526e708932d',
  'x-ms-version',
  '2019-02-02',
  'x-ms-meta-hdi_isfolder',
  'true',
  'x-ms-creation-time',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'x-ms-lease-status',
  'locked',
  'x-ms-lease-state',
  'leased',
  'x-ms-lease-duration',
  'fixed',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-meta-hdi_isfolder,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-lease-duration,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Tue, 03 Dec 2019 03:24:14 GMT' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem157534378810205525/dir157534378924906886')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 03 Dec 2019 03:23:52 GMT',
  'ETag',
  '"0x8D777A0385F7EB4"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2d0aa901-701e-0029-4e89-a933dc000000',
  'x-ms-client-request-id',
  'd699b9ee-58c6-4c75-82d2-bb16cc724cf7',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Tue, 03 Dec 2019 03:24:15 GMT' ]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/filesystem157534378810205525')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '758fa6ae-001e-0040-5d89-a96c70000000',
  'x-ms-client-request-id',
  'ded22a34-5a60-4511-a3ad-e78dc7c1cb49',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Tue, 03 Dec 2019 03:24:15 GMT' ]);
