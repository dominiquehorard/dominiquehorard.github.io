/*creating a request object*/
let xhr = new XMLHttpRequest();

/*storing the button element in a variable for later use with event handler*/
let button = document.getElementById('get_degrees');

/*storing the div where the json data will be displayed in a variable for use later*/
let div = document.getElementById('degrees_div');

/*setting click variable so if the button is clicked once it gets disabled*/
let clicks = 0

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
        }
    };
    /*send the request to the server*/
    xhr.send();

    clicks++;
    if (clicks >= 1){
        button.setAttribute('disabled', 'disabled');
    }
});

/*function that is called in the anon function for the event listener*/
function displayData(responseObject) {
    /*variable that will store the strings created out of json data*/
    let dataContent = '';
    dataContent += '<table> <tr> <th>School</th> <th>Degree</th> <th>Major</th> <th>Year</th> </tr>';
    /*for loop that goes through the json data*/
    /*for each element in the file, it creates an html element*/
    for (let i = 0; i < responseObject.degrees_earned.length; i++) {
        /*creates html element for each object in the json file*/
        dataContent += '<div class="degree_container">';
        dataContent += '<tr>';
        dataContent += '<td>' + responseObject.degrees_earned[i].school + '</td>';
        dataContent += '<td>' + responseObject.degrees_earned[i].type + '</td>' 
        dataContent += '<td>' + responseObject.degrees_earned[i].major + '</td>';
        dataContent += '<td>' + responseObject.degrees_earned[i].year + '</td>';
        dataContent += '</tr>'
    }
    dataContent += '</table>';
    div.insertAdjacentHTML('afterbegin',dataContent);
    console.log(dataContent);
}
