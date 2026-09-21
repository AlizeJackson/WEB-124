const books = [
    {title: "Native Son", author: "Richard Wright", pages: 504},
    {title: "To Kill A Mockingbird", author: "Harper Lee", pages: 323},
    {title: "Of Mice and Men", author: "John Steinbeck", pages: 107},
    {title: "The Joy Luck Club", author: "Amy Tan", pages: 288},
    {title: "The Last Book in the Universe", author: "Rodman Philbrick", pages: 223}
];

//--------//

console.log(`\n Console Output`);

books.forEach(book =>{
    console.log(`${book.title} by ${book.author} (${book.pages} pages)`);
});

//--------//

console.log(`\n DOM Tree Exploration`);

console.log(`Entire document: ${document.documentElement}`);
console.log(`The body of document: ${document.body}`);
console.log(`First Child of body: ${document.body.firstElementChild}`);
console.log(`All children of body: ${document.body.children}`);

//--------//

console.log(`\n DOM Tree Exploration`);

const ulElement = document.body.children[2].children[1];
const firstLi = ulElement.children[0];
const parentOfLi = firstLi.parentElement;
const siblingLi = firstLi.nextElementSibling;

console.log(`UL Element: ${ulElement}`);
console.log(`First LI: ${firstLi}`);
console.log(`Parent of LI: ${parentOfLi}`);
console.log(`Sibling LI: ${siblingLi}`);

//--------//

console.log(`\n Node Properties`);

console.log(`Node Property: ${ulElement.children[0].textContent}`);

//--------//

console.log(`\n Styles & Classes`);

const listItems = ulElement.children;

books.forEach((book, index) => {
    if (book.pages > 300) {
        listItems[index].classList.add("featured");
        console.log(`'featured' class was added to ${book.title}`);
    }
});

