// Base URL from the API
URL = 'https://rickandmortyapi.com/api/'

// Function that retrieves the json of the specified section and invokes the function to display the data.
function getData(section, printData) {
    fetch(URL + section)
        .then(result => result.json())
        .then(data => {
            printData(data, section);
        }); 
}

