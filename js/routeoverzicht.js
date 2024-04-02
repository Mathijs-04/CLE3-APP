// Function to fetch arrivals from NS Reisinformatie API
async function fetchArrivals(stationCode) {
    try {
        // Construct the URL with the station code
        const apiUrl = `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=${stationCode}`;

        // Make the API request
        const response = await fetch(apiUrl, {
            headers: {
                'Ocp-Apim-Subscription-Key': '170eb13476b34cdb85bd821092afde6c', // Replace with your API key
            },
        });

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Return the arrivals data
        return data;
    } catch (error) {
        console.error('Error fetching arrivals:', error);
        return null;
    }
}

// Example usage
const stationCode = 'AMF'; // Example station code (replace with your desired station code)
fetchArrivals(stationCode)
    .then(arrivals => {
        console.log('Arrivals:', arrivals);
        // Process the arrivals data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });



