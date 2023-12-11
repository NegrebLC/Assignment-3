// jQuery UI Initialization
$(document).ready(function() {
    // Navigation functionality
    $("nav ul li a").click(function(e) {
        e.preventDefault();
        var targetSection = $(this).attr("href");
        $("section").hide();
        $(targetSection).show();

        // If the target section is q2, fetch and display XML and JSON data
        if (targetSection === "#q2") {
            fetchXMLData();
            fetchJSONData();
        }
    });

    // Leaflet Map Initialization
    var map = L.map('map').setView([52.246636, -113.8113], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for your pet studio's location
    var marker = L.marker([52.246636, -113.8113]).addTo(map);

    // Back to Blog Button Functionality
    $("#backButton").click(function() {
        $("section").hide();
        $("#blog").show();
    });

    // Function to fetch and display XML data
    function fetchXMLData() {
        fetch('data.xml')
            .then(response => response.text())
            .then(data => {
                let xmlDataElement = $("#xmlData");
                xmlDataElement.html("<h3>XML Data:</h3><pre>" + data + "</pre>");
            })
            .catch(error => console.log(error));
    }

    // Function to fetch and display JSON data
    function fetchJSONData() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                let jsonDataElement = $("#jsonData");
                jsonDataElement.html("<h3>JSON Data:</h3><pre>" + JSON.stringify(data, null, 2) + "</pre>");
            })
            .catch(error => console.log(error));
    }
});