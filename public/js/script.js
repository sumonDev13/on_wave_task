$(document).ready(function () {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (response) {
      console.log(response);

      $("#fact").text(response.text);
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });
});
