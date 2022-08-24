import React from "react";
import "./style.scss";

function Modal(props) {
    const { id, modelYear, meta, setPopupVisible } = props.vehicalDetails || {};
    function onCloseClick(event) {
        event.preventDefault();
        event.stopPropagation();
        setPopupVisible(false);
    }
    return (
        <div className="modal-wrapper">
            <div tabindex="0"></div>
            <div
                className="details-modal"
                role="dialog"
                aria-hidden="true"
                aria-labelledby="dialog1_label"
            >
                <div
                    className="details-modal__header"
                    aria-label="Vehical details"
                >
                    Vehical details
                </div>
                <div className="vehical-details">
                    {id && (
                        <>
                            <div
                                className="vehical-details__label-text"
                                aria-label="Name"
                            >
                                Name
                            </div>
                            <div
                                className="vehical-details__label-value"
                                aria-label={id}
                                data-testid="name"
                            >
                                {id}
                            </div>
                        </>
                    )}
                    {modelYear && (
                        <>
                            <div
                                className="vehical-details__label-text"
                                aria-label="Model year"
                            >
                                Model year
                            </div>
                            <div
                                className="vehical-details__label-value"
                                aria-label={modelYear}
                                data-testid="modelYear"
                            >
                                {modelYear}
                            </div>
                        </>
                    )}
                    {meta && meta.passengers && (
                        <>
                            <div
                                className="vehical-details__label-text"
                                aria-label="Passengers"
                            >
                                Parrengers
                            </div>
                            <div
                                className="vehical-details__label-value"
                                aria-label={meta.passengers}
                                data-testid="passengers"
                            >
                                {meta.passengers}
                            </div>
                        </>
                    )}
                </div>
                <div
                    className="vehical-details__close"
                    aria-label="Close"
                    role="button"
                    onClick={onCloseClick}
                >
                    CLOSE
                </div>
            </div>
        </div>
    );
}
export default Modal;
