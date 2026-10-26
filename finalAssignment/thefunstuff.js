//*Alize Jackson WEB 124 FINAL PROJECT 10/24/2026*//
//*NavBar Change*//

const navLinks = document.querySelectorAll("nav a");

const ghoulDivs = document.querySelectorAll(
    ".frankiediv, .dracdiv, .clawdiv, .lagdiv, .cleodiv, .messageboard"
);

document.querySelector(".frankiediv").classList.add("active");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        ghoulDivs.forEach(function(div) {
            div.classList.remove("active");
        });

        const targetId = link.getAttribute("href").substring(1);

        const targetDiv = document.getElementById(targetId);

        if (targetDiv) {
            targetDiv.classList.add("active");
        }
    });
});

//*Message Focus and Blur*//

const messageField = document.querySelector('#message');
const note = document.querySelector('#funnynote');

messageField.onfocus = function() {
    note.textContent = `You're leaving me a message? Thank you!`;
};

messageField.onblur = function() {
    note.textContent =`Awww...`;
};

//*Form Event and Storage*//

const messageForm = document.querySelector('#form');
const information = document.querySelector('#section');

messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = messageForm.name.value;
    const message = messageForm.message.value;
    
    information.textContent = `${name} said: ${message}`;
    
    localStorage.setItem('name', name);
    console.log(localStorage.getItem('name'));
    
    localStorage.setItem('message', message);
    console.log(localStorage.getItem('message'));
});

//*Browser Objects*//

window.alert("Welcome to Monster High! Meet the Ghouls!");
document.getElementById("window").textContent =
    "Current Window Width: " + window.innerWidth;

//*
//Which Javascript feature was the easiest for you to use?
//
//The Javascript feature that was the easiest for me was the browser objects. They are very simple to figure out and a nice and easy way to get information about your browser. For me, know the size of the window helped me figure out the best size to display everything for my project.
//
//Which Javascript feature was the most challenging?
//
//The Javascript feature that was the hardest for me was the events, especially the NavBar event. When you click on a different section i the navbar, it would show the corresponding section without displaying the other sections. This took about two hours to figure out after searching through my notes and many, many tutorials and forums.
//
//How did you use events in your project?
//
//I used events to create my navigation bar, but hiding certain sectiosn when they are not active and only showing new sections when a button is clicked. The other event is for the forms, where clicking the submit button will post whatever message was left in the form input below the submit button.
//
//How did you use storage in your project?
//
//I used storage to simply store the information the user typed when submitting their message in the form section. It posts the information on the page itself and in the console.
//
//*//