/**
 * A utility function to make a network api call
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(originalDetails) {
    let response = {};
    try {
        const extraDetails = await fetch(originalDetails.apiUrl);
        const jsonDetails = await extraDetails.json();
        response = {
            ...originalDetails,
            ...jsonDetails,
        };
    } catch (error) {
        console.log(error);
    }
    return response;
}
