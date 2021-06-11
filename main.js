/*creating a request object*/
let xhr = new XMLHttpRequest();

/*storing the button element in a variable for later use with event handler*/
let button = document.getElementById('get_degrees');

/*event handler for click event on the button*/
/*contains and IIFE that has the function for parsing/displaying JSON data and get request*/
button.addEventListener("click", function (e){
    /*function that defines what to do with the JSON data*/
    xhr.onload = function () {
        if (xhr.status === 200) {        
        /*the request that states where to get the information from and if it's asynchronous*/
        /*not sure why this open request is in here, DOUBLE CHECK WHERE THIS SHOULD BE....MAYBE OUTSIDE OF THIS FUNC*/
        xhr.open('GET', 'degrees_earned.json',true);
            /*storing the response text in the JSON file in a variable for later use*/
            let responseObject = JSON.parse(xhr.responseText);
            /*log the response object to the console*/
            console.log(resposnseObject);
        }
    };

    /*send the request to the server*/
    xhr.send();
});
