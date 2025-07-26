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

export type BookResponse = {
    bookingid: number;
    booking: Book
};
