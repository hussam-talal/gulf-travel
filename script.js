document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let departureDate = document.getElementById('departure-date').value;
    let passengers = document.getElementById('passengers').value;

    if (origin && destination && departureDate && passengers) {
        // Implement the search functionality here
        alert(`Searching for tickets from ${origin} to ${destination} on ${departureDate} for ${passengers} passenger(s).`);
    } else {
        alert('Please fill in all fields.');
    }
});



// Booking page


// destination page
function bookDestination(destination) {
    // Redirect to the booking page with the selected destination
    window.location.href = 'booking.html?destination=' + encodeURIComponent(destination);
}

