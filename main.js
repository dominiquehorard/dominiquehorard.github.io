/*creating a request object*/
let xhr = new XMLHttpRequest();

/*function that defines what to do with the JSON data*/
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
}

/*the request that states where to get the information from and if it's asynchronous*/
xhr.open('GET', 'degrees_earned.json',true);

/*send the request to the server*/
xhr.send(null);
