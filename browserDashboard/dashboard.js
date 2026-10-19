//*Part 1: Browser Information*//

console.log(location.href);
console.log(navigator.onLine); 
console.log(navigator.language);
console.log(screen.width);
console.log(screen.height);

//*Part 2: Window Information*//

console.log(window.innerWidth);
console.log(window.innerHeight);

//*Part 3: Form Properties*//

const browserForm = document.querySelector('#browserForm');
const information = document.querySelector('#section');

browserForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = browserForm.name.value;
    const website = browserForm.website.value;
    
    information.textContent = `Your name is ${name} and your favorite website is ${website}.`;
    
    //*Part 5: URL Objects*//
    
    const websiteurl = new URL(website);

    console.log(websiteurl.hostname);
    console.log(websiteurl.protocol);
    console.log(websiteurl.pathname);
    
    //*Part 6: Local Storage*//
    
    localStorage.setItem('name', name);
    console.log(localStorage.getItem('name'));
    
    //*Part 7: Session Storage*//
    
    localStorage.setItem('website', website);
    console.log(localStorage.getItem('website'));
});

//*Part 4: Focus & Blur*//

const nameField = document.querySelector('#name');

nameField.onfocus = function() {
    console.log("Name selected.");
};

nameField.onblur = function() {
    console.log("Name no longer selected.");
};


