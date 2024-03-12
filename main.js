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
    element.style.color = "blue";
}

function resetColor(element) {
    element.style.color = "white";
}

//Lab 6 starts here

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('feedback').addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    var formData = {
        FirstName: document.getElementById('fname').value,
        LastName: document.getElementById('lname').value,
        Occupation: document.getElementById('occ').value,
        PhoneNumber: document.getElementById('phone').value,
        DateOfBirth: document.getElementById('birthday').value,
        Email: document.getElementById('email').value,
        Rating: getRating(),
        Activities: getActivities(),
        Recommend: document.getElementById('like').value,
        AdditionalComments: document.getElementById('addf').value
    };
    
    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    
    // Optionally, you can reset the form after submission
    document.getElementById('feedback').reset();
    
    // Show a confirmation message to the user
    alert('Form submitted successfully!');
}

// Function to get the selected rating from radio buttons
function getRating() {
    var radios = document.getElementsByName('rating');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null; // Return null if no rating is selected
}

// Function to get the selected activities from checkboxes
function getActivities() {
    var activities = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        activities.push(checkboxes[i].name);
    }
    return activities;
}
