/*creating a request object*/
let xhr = new XMLHttpRequest();

/*storing the button element in a variable for later use with event handler*/
let button = document.getElementById('get_degrees');

/*storing the div where the json data will be displayed in a variable for use later*/
let div = document.getElementById('degrees_div');


/*function that is called in the anon function for the event listener*/
function displayData(responseObject) {
    /*variable that will store the strings created out of json data*/
    let dataContent = '';
    /*for loop that goes through the json data*/
    /*for each element in the file, it creates an html element*/
    for (let i = 0; i < responseObject.length; i++) {
        /*creates html element for each object in the json file*/
        dataContent += '<h3>' + responseObject[i].school + '</h3>';
        dataContent += '<p class="type">' + responseObject[i].type + '</p>';
        dataContent += '<p class="major">' + responseObject[i].major + '</p>';
        dataContent += '<p class="year">' + responseObject[i].year + '</p>';
    }
    /*div.insertAdjacentHTML(dataContent);*/
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
            
            /*calling the function and using response object as a function*/
            displayData(responseObject);
            div.insertAdjacentHTML(dataContent);
        }
    };
    /*send the request to the server*/
    xhr.send();
});
