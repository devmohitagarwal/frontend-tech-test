// eslint-disable-next-line no-unused-vars
import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
const URL = "/api/vehicles.json";

export default async function getData() {
    try {
        //Fetch List of vehicals
        const response = await fetch(URL);
        const vehicalList = await response.json();

        if (response.status !== 200) {
            throw "Error ";
        }

        //Fetch details of individual vehical
        const vehidalDetails = await Promise.all(
            vehicalList.map((details) => request(details))
        );

        //Remove any vehical that doesn't have a price
        return vehidalDetails.filter(
            (vehicalDetails) => vehicalDetails && vehicalDetails.price
        );
    } catch (error) {
        console.log("Error while fetchin data: ", error);
    }
    return [];
}
