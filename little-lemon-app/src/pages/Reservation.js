import React from "react";
import { useNavigate } from "react-router-dom";
import Tables from "../images/Tables.jpeg";
import ReservationForm from "../components/ReservationForm"
import "./Reservation.css";

const Reservation =() => {
    const navigate = useNavigate();

    return (
        <main className="booking">
            <h1>Booking</h1>
            <section>
                <img
                src={Tables}
                alt="Restaurant Patio"
                style={{ borderRadius: "8px", width: "65%" }}
                />
            </section>
            <section>
                <ReservationForm navigate = {navigate} />
            </section>
        </main>
    );
};

export default Reservation;