// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { StorageClientContext } from "./generated/lib/storageClientContext";
import { Pipeline } from "./Pipeline";
import { escapeURLPath } from "./utils/utils.common";

/**
 * A StorageClient represents a based URL class for BlobServiceClient, ContainerClient and etc.
 *
 * @export
 * @class StorageClient
 */
export abstract class StorageClient {
  /**
   * Encoded URL string value.
   *
   * @type {string}
   * @memberof StorageClient
   */
  public readonly url: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   * @ignore
   * @type {Pipeline}
   * @memberof StorageClient
   */
  protected readonly pipeline: Pipeline;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   *
   * @protected
   * @type {StorageClientContext}
   * @memberof StorageClient
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * Creates an instance of StorageClient.
   * @param {string} url url to resource
   * @param {Pipeline} pipeline request policy pipeline.
   * @memberof StorageClient
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.pipeline = pipeline;
    this.storageClientContext = new StorageClientContext(
      this.url,
      pipeline.toServiceClientOptions()
    );

    // Override protocol layer's default content-type
    const storageClientContext = this.storageClientContext as any;
    storageClientContext.requestContentType = undefined;
  }
}
