import { APIRequestContext, expect } from '@playwright/test';

export async function createToken(
  apiContext: APIRequestContext
): Promise<string> {
  const response = await apiContext.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin',
        password: 'password123',
      },
    }
  );

  await expect(response).toBeOK();

  const responseJson: { token: string } = await response.json();
  const token: string = responseJson.token;

  return token;
}
