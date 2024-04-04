<?php
// Allow CORS for all domains (insecure, only for development/testing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if it's an OPTIONS request (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Real request
$url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?lang=en&station=UT&dateTime=2024-03-27T12%3A00%3A00Z&maxJourneys=10';

// Set up cURL
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = [
    'Content-Type: application/json',
    'Ocp-Apim-Subscription-Key: 169e5449fa58436bb7138e9262972223'
];
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

// Execute the request
$response = curl_exec($curl);

// Close cURL resource
curl_close($curl);

// Output the response
header('Content-Type: application/json');
echo $response;
?>
