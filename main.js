/*creating a request object*/
let xhr = new XMLHttpRequest();

/*function that defines what to do with the JSON data*/
xhr.onload = function () {
    if (xhr.status === 200) {
        /*storing the response text in the JSON file in a variable for later use*/
        responseObject = JSON.parse(xhr.responseText);
    }
}

/*the request that states where to get the information from and if it's asynchronous*/
xhr.open('GET', 'degrees_earned.json',true);

/*send the request to the server*/
xhr.send(null);
