export type BookingIdResponse = {
  bookingid: number;
};

export type Booking = {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: {
    checkin: string;
    checkout: string;
  };
  additionalneeds: string;
};

export type BookingResponse = {
  bookingid: number;
  booking: Booking;
};
