async function fetchArrivals() {
    const apiUrl = 'http://localhost/proxy.php'; // Adjust the URL accordingly
    // Make fetch request to apiUrl...

    const params = {
        lang: 'en',
        station: 'UT',
        dateTime: '2024-03-27T12:00:00Z',
        maxJourneys: 10
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${apiUrl}?${queryString}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Arrivals:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchArrivals();
