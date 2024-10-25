export interface RestApi {
  fetch: <RestResponse>(endpoint: string) => Promise<RestResponse>;
  post: <RestResponse, Payload = object>(
    endpoint: string,
    data: Payload
  ) => Promise<RestResponse>;
  delete: <RestResponse>(endpoint: string) => Promise<RestResponse>;
}
