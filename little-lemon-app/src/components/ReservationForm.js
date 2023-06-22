import React from "react";
import useForm from "../hooks/useForm";
import "./ReservationForm.css";

const ReservationForm = ({ navigate}) => {
    const {
        form,
        timeSlots,
        isFormValid,
        changeNameHandler,
        changeEmailHandler,
        changeDateHandler,
        changeTimeHandler,
        changeGuestsHandler,
        changeTableHandler,
        changeOccasionHandler,
        changeMessageHandler,
        submitHandler
    } = useForm();

    function handleSubmit() {
        const response = submitHandler();
        return response ? navigate("/booking-confirmation") : null;
    }

    return(
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="column">
                <label htmlFor="name">
                    <p>Name</p>
                    <input
                        value={form.name}
                        onChange={changeNameHandler}
                        type="text"
                        id="name"
                    />
                </label>
                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        value={form.email}
                        onChange={changeEmailHandler}
                        type="email"
                        id="email"
                    />
                </label>
                <label htmlFor="res-date">
                    <p>Choose the date</p>
                    <input
                        value={form.date}
                        onChange={changeDateHandler}
                        type="date"
                        id="res-date"
                        placeholder="Date"
                    />
                </label>
                <label htmlFor="res-time">
                    <p>Choose the timeslot</p>
                    <select value={form.time} onChange={changeTimeHandler} id="res-time">
                        {timeSlots.map((slot)=>(
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="guests">
                    <p>Guests number</p>
                    <input
                        value={form.numberOfGuests}
                        onChange={changeGuestsHandler}
                        id="guests"
                        type="number"
                        placeholder="2"
                        min="1"
                        max="15"
                        required
                    />
                </label>
                <label htmlFor="occasion">
                    <p>Occasion</p>
                    <select value={form.occasion} onChange={changeOccasionHandler} id="occasion">
                        <option value="">None</option>
                        <option value="">Birthday</option>
                        <option value="">Anniversary</option>
                        <option value="">Engagement</option>
                        <option value="">Other</option>
                    </select>
                </label>
                <label htmlFor="table">
                    <p>Table location</p>
                    <select value={form.table} onChange={changeTableHandler} id="table">
                        <option value="">None</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </select>
                </label>
                <label htmlFor="message">
                    <p>Comments</p>
                    <textarea
                        value={form.message}
                        onChange={changeMessageHandler}
                        id="message"
                        name="message"
                        cols="40"
                        rows="10"
                    ></textarea>
                </label>
            </div>
            <div>
                <button disabled={!isFormValid}>Reserve</button>
            </div>
        </form>
    )
};

export default ReservationForm;