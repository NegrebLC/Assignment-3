// Fetch and display data from XML file
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

// Fetch and display data from JSON file
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