/*creating a request object*/
let xhr = new XMLHttpRequest();

/*storing the button element in a variable for later use with event handler*/
let button = document.getElementById('get_degrees');

/*storing the div where the json data will be displayed in a variable for use later*/
let displayDiv = document.getElementById('degrees_div');

/*function that is called in the anon function for the event listener*/
function displayData(data) {
    /*variable that will store the strings created out of json data*/
    let dataContent = '';
    /*for loop that goes through the json data*/
    /*for each element in the file, it creates an html element*/
    for (i = 0; i < data.length; i++) {
        /*creates html element for each object in the json file*/
        dataContent += '<h3>' + data[i].school + '</h3>';
        dataContent += '<p class="type">' + data[i].type + '</p>';
        dataContent += '<p class="major">' + data[i].major + '</p>';
        dataContent += '<p class="year">' + data[i].year + '</p>';
    }
    displayDiv.insertAdjacentHTML('afterbegin',dataContent);
}

/*event handler for click event on the button*/
/*contains and anon func that has the function for parsing/displaying JSON data and get request*/
button.addEventListener("click", function (e){
    /*the request that states where to get the information from and if it's asynchronous*/
    xhr.open('GET', 'degrees_earned.json',true);
    /*function that defines what to do with the JSON data*/
    xhr.onload = function () {
        if (xhr.status === 200) {
            /*storing the response text in the JSON file in a variable for later use*/
            let responseObject = JSON.parse(xhr.responseText);
            /*log the response object to the console*/
            /*console.log(responseObject);*/
            displayData(responseObject);
        }
    };
    /*send the request to the server*/
    xhr.send();
});

