// Function to prompt the user for their name
function promptForName() {
    var name = prompt("Please enter your name:");
    return name;
}

// Function to display the user's name in an HTML element
function displayUserName() {
    var userName = promptForName();
    var outputElement = document.getElementById("output");
    outputElement.innerText = "Hello, " + userName + "!";
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("nameButton");
    button.addEventListener("click", displayUserName);
});

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("myImage");
    image.addEventListener("click", function() {
        if (image.style.width === "200px") {
            image.style.width = "400px";
        } else {
            image.style.width = "200px";
        }
    });
});

function changeColor(element) {
    element.style.color = "red";
}

function resetColor(element) {
    element.style.color = "white";
}