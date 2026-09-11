// Alize Jackson WEB 124 September 7th, 2026

"use strict";

//  PET CONSTRUCTOR FUNCTION

//  Complete the constructor function to assign parameter values to instance properties using 'this'.
function Pet(name, type, age, owner = null, id = " ", image = "") {
  this.name = name;
  this.type = type;
  this.age = age;
  this.owner = owner;
  this.id = id;
  this.image = image;
}

// PROTOTYPE METHODS
// Complete each prototype method according to its instructions.

Pet.prototype.getDescription = function () {
  return `${this.name} is a ${this.type} and is ${this.age} years old.`;
};

Pet.prototype.haveBirthday = function () {
  this.age += 1;
};

Pet.prototype.getOwnerName = function () {
  return this.owner?.name ?? "none";
};

Pet.prototype.getOwnerPhone = function () {
  // Return owner's phone using optional chaining (?.), or "No phone on file"
  return this.owner?.phone ?? "No phone on file.";
};

Pet.prototype.getID = function () {
  // Return the pet's id property
  return this.id;
};


// OBJECT INSTANTIATION & CONSOLE LOGGING

const owner1 = { name: "Dolly", phone: "555-0119" };
const owner2 = { name: "Tim", phone: "555-0419" };

// Instantiate 2 Pet objects using 'new Pet(...)' with image filenames for the dog and parrot
const pet1 = new Pet("Stanley", "cat", 6, owner1, "pet1", "cat.webp");
const pet2 = new Pet( "Margo", "dog", 4, owner2, "pet2", "dog.webp");
const pet3 = new Pet("Polly", "parrot", 25, null, "pet3", "parrots.jpg");

const pets = [pet1, pet2, pet3];

//  Use Array.prototype.forEach() to log each pet's details to the browser console.
// Log Name, Type, Age, Owner Name, Owner Phone, and ID.
pets.forEach(function (pet) {
  // Write your console.log statements here:
  console.log(`Name: ${pet.name}`);
  console.log(`Type: ${pet.type}`);
  console.log(`Age: ${pet.age}`);
  console.log(`Owner Name: ${pet.getOwnerName()}`);
  console.log(`Owner Phone: ${pet.getOwnerPhone()}`);
  console.log(`ID: ${pet.getID()}`);
});

pet1.haveBirthday();

console.log(`Updated age for ${pet1.name}: ${pet1.age}`);


// DOM SELECTION

let currentIndex = 0;

// Select the DOM elements using document.querySelector().
// Double check that element IDs match your HTML file exactly!
const headingElement = document.querySelector("#galleryHeading");
const image = document.querySelector("#PetImage");
const petName = document.querySelector("#petName");
const petInfo = document.querySelector("#petType");
const petOwner = document.querySelector("#petOwner");
const ownerPhone = document.querySelector("#OwnerPhone");
const petID = document.querySelector("#petID");
//finish the DOM definitions for PetImage, petName, petDetails, petOwner,OwnerPhone, and petID



const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

// DISPLAY LOGIC & NAVIGATION

//  Write the showPet function to update DOM elements with current pet data.
function showPet(index) {
  const currentPet = pets[index];
  
headingElement.textContent = `Pet ${index + 1} of ${pets.length}`;
  
if (image) {

    image.src = currentPet.image;

    image.alt = `Photo of ${currentPet.name}`;
}
  
petName.textContent = currentPet.name;
  
petInfo.textContent = currentPet.getDescription();
  
petOwner.textContent = currentPet.getOwnerName();
  
ownerPhone.textContent = currentPet.getOwnerPhone();

petID.textContent = currentPet.id;

  
  // 1. Update gallery heading text content (e.g., "Pet 1 of 3")


  // 2. Update pet image src and alt attributes safely if petImageElement exists


  // 3. Update text content for name, details, owner, phone, and ID elements using prototype methods

}

// Complete button handlers to update currentIndex and loop at boundaries.
function handleNextClick() {
  // Increment index. If index exceeds array length, reset to 0. Then update display.
    currentIndex++;
    if(currentIndex >= pets.length) {
      currentIndex = 0;
    }
  showPet(currentIndex);
}

function handlePrevClick() {
    currentIndex--;
    if(currentIndex < 0) {
      currentIndex = pets.length - 1
    }
  showPet(currentIndex);
}
  // Decrement index. If index is less than 0, wrap to last item. Then update display.

// Event Listeners
nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

// Initial display on page load
showPet(currentIndex);