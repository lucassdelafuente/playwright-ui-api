import { test, expect } from '@playwright/test';
import { getBookingIds } from '@endpoints/books';

type Booking = {
  bookingid: number;
};

test('It should return an array of booking objects', async ({ request }) => {
  const response = await getBookingIds(request);
  await expect(response).toBeOK();

  const bookings = (await response.json()) as Booking[];

  // Check if it's an array with values
  expect(Array.isArray(bookings)).toBeTruthy();
  expect(bookings.length).toBeGreaterThan(0);

  // Check the structure of each element
  for (const booking of bookings) {
    expect(booking).toHaveProperty('bookingid');
    expect(typeof booking.bookingid).toBe('number');
  }
});
