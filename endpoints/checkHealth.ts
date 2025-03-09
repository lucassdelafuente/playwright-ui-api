import { APIRequestContext, APIResponse } from '@playwright/test';

export async function healthCheck(
  apiContext: APIRequestContext
): Promise<APIResponse> {
  const response = apiContext.get('https://restful-booker.herokuapp.com/ping');

  return response;
}
