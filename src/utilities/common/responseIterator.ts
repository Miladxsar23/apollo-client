import { Response as NodeResponse } from "node-fetch";
import { Readable as NodeReadableStream } from "stream";

export const hasIterator =
  typeof Symbol !== "undefined" && Symbol.asyncIterator;

export function isNodeResponse(value: any): value is NodeResponse {
  return !!(value as NodeResponse).body;
}

export function isReadableStream(value: any): value is ReadableStream<any> {
  return !!(value as ReadableStream<any>).getReader;
}

export function isAsyncIterableIterator(
  value: any
): value is AsyncIterableIterator<any> {
  return (
    hasIterator && !!(value as AsyncIterableIterator<any>)[Symbol.asyncIterator]
  );
}

export function isBlob(value: any): value is Blob {
  return !!(value as Blob).arrayBuffer;
}

export function isNodeReadableStream(value: any): value is NodeReadableStream {
  return !!(value as NodeReadableStream).pipe;
}
