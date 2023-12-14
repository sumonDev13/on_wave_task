$(document).ready(function() {
    $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        method: 'GET',
        success: function(response) {
            console.log(response); // Do something with the response
            // Update the content of the element with ID 'fact'
            $('#fact').text(response.text);
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
});