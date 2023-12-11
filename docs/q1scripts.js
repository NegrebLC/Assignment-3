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
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                const people = xmlDoc.getElementsByTagName('person');
                const list = document.getElementById('xmlPeopleList');

                for (let person of people) {
                    const name = person.getElementsByTagName('name')[0].textContent;
                    const age = person.getElementsByTagName('age')[0].textContent;
                    const city = person.getElementsByTagName('city')[0].textContent;

                    const listItem = document.createElement('li');
                    listItem.textContent = `${name}, Age: ${age}, City: ${city}`;
                    list.appendChild(listItem);
                }
            })
            .catch(error => console.error('Error fetching XML:', error));
    }

    // Function to fetch and display JSON data
    function fetchJSONData() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById('jsonPeopleList');

                data.forEach(person => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${person.name}, Age: ${person.age}, City: ${person.city}`;
                    list.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }
});