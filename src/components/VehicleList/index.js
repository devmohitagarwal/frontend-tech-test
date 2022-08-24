import React, { useState } from "react";
import useData from "./useData";
import Vehical from "../Vehical";
import "./style.scss";

export default function VehicleList() {
    // eslint-disable-next-line no-unused-vars

    //Define the current device type and set in state
    const size = window.outerWidth < 480 ? true : false;
    const [isMobileDevice, setDeviceType] = useState(size);

    const [loading, error, vehicles] = useData();

    function onWindowResize() {
        const isMobileDevice = window.outerWidth < 480 ? true : false;
        setDeviceType(isMobileDevice);
    }
    window.addEventListener("resize", onWindowResize);

    if (loading) {
        return (
            <div
                className="loading"
                aria-label="Fetching vehical information."
                data-testid="loading"
            />
        );
    }

    if (error) {
        return <div data-testid="error">{error}</div>;
    }

    return (
        <div
            className={"VehicleList " + (isMobileDevice ? "onMobile" : "")}
            data-testid="results"
        >
            {Array.isArray(vehicles) &&
                vehicles.map((vehical) => (
                    <Vehical
                        vehical={vehical}
                        isMobileDevice={isMobileDevice}
                        key={vehical.id}
                    ></Vehical>
                ))}
        </div>
    );
}
