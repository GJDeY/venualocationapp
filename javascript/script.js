

var eventfulURL = "http://api.eventful.com/json/events/search?...&location=Chicago"

var eventfulCall =
    $.ajax({
        url: eventfulURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

function isZip(zip) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
}



$("#submit").on("click", function () {
    var zipCode = $("#zipBox").val();
    if (isZip(zipCode)) {
        // Do search function
        console.log("That is a valid Zip Code");
        card = $("<button>");
        card.text("Hello!");
        $("#cardContainer").append(card);

    }
});
// $("#submit").on("click", function () {

// });

$(document).ready(function () {
    $('.datepicker').datepicker()
});

