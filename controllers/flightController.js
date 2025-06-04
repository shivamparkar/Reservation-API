


import Booking from "../models/FlightBooking.js";
import Flight from "../models/Flight.js"


export const getAvailableFlights = async (req, res) => {
  const { departureAirport, arrivalAirport, date } = req.query; 

  try {
    const query = {
      departureAirport,
      arrivalAirport,
      departureTime: {
        $gte: new Date(date), 
      },
      status: "On Time", 
    };

    const flights = await Flight.find(query);
    if (flights.length === 0) {
      return res.status(404).json({ message: "No flights found." });
    }

    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights", error });
  }
};


export const bookFlight = async (req, res) => {
  const { userId, flightId, seat } = req.body;

  try {
    const flight = await Flight.findById(flightId);

    if (!flight) {
      return res.status(404).json({ message: "Flight not found." });
    }

    
    if (flight.seats.get(seat) === "booked") {
      return res.status(400).json({ message: "Seat is already booked." });
    }

    
    const newBooking = new Booking({
      userId,
      flightId,
      seat,
      bookingStatus: "Confirmed",
      paymentStatus: "Pending", 
      totalAmount: flight.price,
    });

    await newBooking.save();

    
    flight.seats.set(seat, "booked");
    await flight.save();

    res.status(200).json({ message: "Booking confirmed!" });
  } catch (error) {
    res.status(500).json({ message: "Error booking flight", error });
  }
};
