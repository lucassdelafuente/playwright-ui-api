import { APIRequestContext, APIResponse } from 'playwright';

interface Book {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: {
    checkin: string;
    checkout: string;
  };
  additionalneeds: string;
}

export async function getBookingIds(
  apiContext: APIRequestContext
): Promise<APIResponse> {
  const response = apiContext.get(
    'https://restful-booker.herokuapp.com/booking'
  );

  return response;
}

export async function getBooks(
  apiContext: APIRequestContext,
  bookId: string
): Promise<APIResponse> {
  const response = apiContext.get(
    `https://restful-booker.herokuapp.com/booking/${bookId}`
  );

  return response;
}

export async function createBook(
  apiContext: APIRequestContext,
  tokenValue: string,
  payload: Book
): Promise<APIResponse> {
  const response = apiContext.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      headers: { Cookie: `token = ${tokenValue}` },
      data: { payload },
    }
  );

  return response;
}

export async function updateBook(
  apiContext: APIRequestContext,
  tokenValue: string,
  bookId: string,
  payload: Book
): Promise<APIResponse> {
  const response = apiContext.put(
    `https://restful-booker.herokuapp.com/booking/${bookId}`,
    {
      headers: { Cookie: `token = ${tokenValue}` },
      data: { payload },
    }
  );

  return response;
}

export async function updatePartialBook(
  apiContext: APIRequestContext,
  tokenValue: string,
  bookId: string,
  payload: Partial<Book>
): Promise<APIResponse> {
  const response = apiContext.put(
    `https://restful-booker.herokuapp.com/booking/${bookId}`,
    {
      headers: { Cookie: `token = ${tokenValue}` },
      data: { payload },
    }
  );

  return response;
}

export async function deleteBook(
  apiContext: APIRequestContext,
  tokenValue: string,
  bookId: string,
  payload: Partial<Book>
): Promise<APIResponse> {
  const response = apiContext.delete(
    `https://restful-booker.herokuapp.com/booking/${bookId}`,
    {
      headers: { Cookie: `token = ${tokenValue}` },
      data: { payload },
    }
  );

  return response;
}
