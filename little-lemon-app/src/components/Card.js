import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "./Card.css";

const Card = ({ image, title, price, description}) => {
    return (
        <div className="card">
            <img width="300px" src={image} alt="dish"/>
            <div className="dish-info">
                <div className="title">
                    <h4>{title}</h4>
                    <p className="price">${price}</p>
                </div>
                <p>{description}</p>
                <span
                    role = "button"
                    aria-label="On Click"
                    className="specials-order-btn"
                >
                    Order a delivery
                    <MdDeliveryDining
                        size={30}
                        style={{
                            color: "#333",
                            marginLeft: "15px",
                            marginBottom: "-10px"
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default Card;