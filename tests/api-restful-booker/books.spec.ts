import { test, expect } from '@playwright/test';
import { createBooking, deleteBooking, getBookingIds, getBooking, updateBooking, updatePartialBooking } from '@endpoints/books';
import { createToken } from '@endpoints/createToken';
import { Booking, BookingIdResponse, BookingResponse } from '@custom-types/books';

test.describe('Resfull booker features', () => {
  let token: string;
  let bookingId: number;
  const bookingData: Booking = {
    firstname: 'John',
    lastname: 'Doe',
    totalprice: 100,
    depositpaid: true,
    bookingdates: { checkin: '2025-01-01', checkout: '2025-01-02' },
    additionalneeds: 'Breakfast',
  }
  const updatedBookingData: Booking = {
    firstname: 'Lucas',
    lastname: 'de la Fuente',
    totalprice: 200,
    depositpaid: false,
    bookingdates: { checkin: '2025-01-02', checkout: '2025-01-02' },
    additionalneeds: 'Other',
  }
  const updatedBookingFirstName: Partial<Booking> = {
    firstname: 'Sebastian',
  }

  test.beforeAll('Get token', async ({ request }) => {
    token = await createToken(request);
  })

  test.afterEach('Remove created booking to clean new data', async ({ request }) => {
    if (bookingId) {
      await deleteBooking(request, token, bookingId)
    }
  })

  test('It should return an array of booking objects', async ({ request }) => {
    const response = await getBookingIds(request);
    await expect(response).toBeOK();

    const bookings = (await response.json()) as BookingIdResponse[];

    // Check if it's an array with values
    expect(Array.isArray(bookings)).toBeTruthy();
    expect(bookings.length).toBeGreaterThan(0);

    // Check the structure of each element
    for (const booking of bookings) {
      expect(booking).toHaveProperty('bookingid');
      expect(typeof booking.bookingid).toBe('number');
    }
  });

  test('It should return a specific booking', async ({ request }) => {
    // Create booking
    const responseCreateBooking = await createBooking(request, token, bookingData);
    await expect(responseCreateBooking).toBeOK();
    const bookingJson: BookingResponse = await responseCreateBooking.json();

    // Get Specific Book
    const responseSpecificBook = await getBooking(request, bookingJson.bookingid);
    const specificBookingJson: Booking = await responseSpecificBook.json();

    // Check response for specific booking
    expect.soft(bookingJson.booking.firstname).toBe(specificBookingJson.firstname);
    expect.soft(bookingJson.booking.lastname).toBe(specificBookingJson.lastname);
    expect.soft(bookingJson.booking.totalprice).toBe(specificBookingJson.totalprice);
    expect.soft(bookingJson.booking.depositpaid).toBe(specificBookingJson.depositpaid);
    expect.soft(bookingJson.booking.bookingdates.checkin).toBe(specificBookingJson.bookingdates.checkin);
    expect.soft(bookingJson.booking.bookingdates.checkout).toBe(specificBookingJson.bookingdates.checkout);
    expect.soft(bookingJson.booking.additionalneeds).toBe(specificBookingJson.additionalneeds);

  })

  test('It should create a new booking', async ({ request }) => {
    // Create booking
    const response = await createBooking(request, token, bookingData);
    await expect(response).toBeOK();

    const bookingJson: BookingResponse = await response.json();
    bookingId = bookingJson.bookingid;
    expect.soft(bookingJson.booking.firstname).toBe(bookingData.firstname);
    expect.soft(bookingJson.booking.lastname).toBe(bookingData.lastname);
    expect.soft(bookingJson.booking.totalprice).toBe(bookingData.totalprice);
    expect.soft(bookingJson.booking.depositpaid).toBe(bookingData.depositpaid);
    expect.soft(bookingJson.booking.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
    expect.soft(bookingJson.booking.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
    expect.soft(bookingJson.booking.additionalneeds).toBe(bookingData.additionalneeds);
  });

  test('It should update a booking', async ({ request }) => {
    // Create a new booking
    const responseNewBook = await createBooking(request, token, bookingData);

    // Check the response
    await expect(responseNewBook).toBeOK();
    const bookingJson: BookingResponse = await responseNewBook.json();

    // Update the booking
    const responseUpdateBook = await updateBooking(request, token, bookingJson.bookingid, updatedBookingData);

    // Check the response
    await expect(responseUpdateBook).toBeOK();
    const bookUpdatedJson: Booking = await responseUpdateBook.json();
    bookingId = bookingJson.bookingid;

    // Check the updated booking
    expect.soft(bookUpdatedJson.firstname).toBe(updatedBookingData.firstname);
    expect.soft(bookUpdatedJson.lastname).toBe(updatedBookingData.lastname);
    expect.soft(bookUpdatedJson.totalprice).toBe(updatedBookingData.totalprice);
    expect.soft(bookUpdatedJson.depositpaid).toBe(updatedBookingData.depositpaid);
    expect.soft(bookUpdatedJson.bookingdates.checkin).toBe(updatedBookingData.bookingdates.checkin);
    expect.soft(bookUpdatedJson.bookingdates.checkout).toBe(updatedBookingData.bookingdates.checkout);
    expect.soft(bookUpdatedJson.additionalneeds).toBe(updatedBookingData.additionalneeds);
  });

  test('It should update a partial booking', async ({ request }) => {
    // Create a new booking
    const responseNewBook = await createBooking(request, token, bookingData);

    // Check the response
    await expect(responseNewBook).toBeOK();
    const bookingJson: BookingResponse = await responseNewBook.json();

    // Update the booking
    const responseUpdateBook = await updatePartialBooking(request, token, bookingJson.bookingid, updatedBookingFirstName);

    // Check the response
    await expect(responseUpdateBook).toBeOK();
    const bookUpdatedJson: Booking = await responseUpdateBook.json();
    bookingId = bookingJson.bookingid;

    // Check the updated booking
    expect(bookUpdatedJson.firstname).toBe(updatedBookingFirstName.firstname);
  });

  test('It should delete a booking', async ({ request }) => {
    // Create a new booking
    const responseNewBook = await createBooking(request, token, bookingData);

    // Check the response
    await expect(responseNewBook).toBeOK();
    const bookingJson: BookingResponse = await responseNewBook.json();

    // Delete booking
    const resonseDelete = await deleteBooking(request, token, bookingJson.bookingid);

    // Check the deleted booking response
    await expect(resonseDelete).toBeOK();

  });
});
