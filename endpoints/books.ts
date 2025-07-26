import { Booking } from '@types/books';
import { APIRequestContext, APIResponse } from 'playwright';

export async function getBookingIds(
  apiContext: APIRequestContext
): Promise<APIResponse> {
  const response = apiContext.get(
    'https://restful-booker.herokuapp.com/booking'
  );

  return response;
}

export async function getBooking(
  apiContext: APIRequestContext,
  bookId: number
): Promise<APIResponse> {
  const response = apiContext.get(
    `https://restful-booker.herokuapp.com/booking/${bookId}`
  );

  return response;
}

export async function createBooking(
  apiContext: APIRequestContext,
  tokenValue: string,
  payload: Booking
): Promise<APIResponse> {
  const response = apiContext.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${tokenValue}`
      },
      data: payload,
    }
  );

  return response;
}

export async function updateBooking(
  apiContext: APIRequestContext,
  tokenValue: string,
  bookingId: number,
  payload: Booking
): Promise<APIResponse> {
  const response = apiContext.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${tokenValue}`
      },
      data: payload,
    }
  );

  return response;
}

export async function updatePartialBooking(
  apiContext: APIRequestContext,
  tokenValue: string,
  bookingId: number,
  payload: Partial<Booking>
): Promise<APIResponse> {
  const response = apiContext.patch(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${tokenValue}`
      },
      data: payload,
    }
  );

  return response;
}

export async function deleteBooking(
  apiContext: APIRequestContext,
  tokenValue: string,
  bookingId: number
): Promise<APIResponse> {
  const response = apiContext.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${tokenValue}`
      },
    }
  );

  return response;
}
