import React, { useState } from "react";
import Modal from "../Modal";
import "./style.scss";

function Vehical(props) {
    const { vehical, isMobileDevice } = props;
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [vehicalDetails, setVehicalDetails] = useState({});

    function onReadMoreClick(event, details) {
        if (event.currentTarget) {
            setVehicalDetails({ ...details, setPopupVisible });
            setPopupVisible(true);
        }
    }

    return (
        <div
            className="vehical-item"
            key={vehical.id}
            role="button"
            onClick={(event) => {
                onReadMoreClick(event, vehical);
            }}
        >
            <div aria-hidden="true" className="vehical-item__poster">
                {isMobileDevice ? (
                    <img src={vehical.media[1].url}></img>
                ) : (
                    <img src={vehical.media[0].url}></img>
                )}
            </div>
            <div className="vehical-item__details">
                <div
                    aria-label={"Vehical name " + vehical.id}
                    className="vehical-item__details__name"
                >
                    {vehical.id}
                </div>
                <div
                    aria-label={"Vehical price " + vehical.price}
                    className="vehical-item__details__price"
                >
                    From {vehical.price}
                </div>
                <div
                    aria-label={"Vehical description " + vehical.description}
                    className="vehical-item__details__description"
                >
                    {vehical.description}
                </div>
            </div>
            {isPopupVisible && <Modal vehicalDetails={vehicalDetails}></Modal>}
        </div>
    );
}

export default Vehical;
