// jQuery UI Initialization
$(document).ready(function() {
    // Navigation functionality
    $("nav ul li a[href='q2.html']").click(function() {
    });

    $("nav ul li a").click(function(e) {
        e.preventDefault();
        var targetSection = $(this).attr("href");
        $("section").hide();
        $(targetSection).show();
    });

    // Leaflet Map Initialization
    var map = L.map('map').setView([52.246636, -113.8113], 13); // Set your initial coordinates and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for your pet studio's location
    var marker = L.marker([52.246636, -113.8113]).addTo(map); // Set your specific coordinates

    // Back to Blog Button Functionality
    $("#backButton").click(function() {
        $("section").hide();
        $("#blog").show();
    });
});