const myForm = document.getElementById("myForm")
// Get the modal
const modal = document.getElementById("myModal")

// Get the button that opens the modal
const btn = document.getElementById("myBtn")

// Get the <button> element with the class name 'cancel-button that closes the modal
const cancelButton = document.getElementsByClassName("cancel-button")[0]

//Get the submit button with the id name 'submi-form-button'
const submitButton = document.getElementById('submit-form-button')

// let titleValue = document.getElementById('title').value
// console.log(titleValue);


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cancelButton.onclick = function() {
  modal.style.display = "none"
}

submitButton.onclick = function() {
  console.log('clicked');
  // titleValue = document.getElementById('title').value
  // console.log(titleValue);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
myForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  // myForm.submit();
  let title = document.getElementById("title").value
  console.log(title);
  console.log('clicked on the submit form');
})

// console.log(titleValue);
const myLibrary = [];

// function Book(title, author, pages, year, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.year = year
//   this.read = read
// }


// function addBookToLibrary() {
//   let title = document.getElementById("title").value
//   let author = document.getElementById('author').value
//   let pages = document.getElementById("pages").value
//   let year = document.getElementById("year").value
//   let read = document.getElementById("read").value
//   let book = new Book(title, author, pages, year, read)
//   myLibrary.push(book)
// }

// console.log(myLibrary)


//3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// function viewBookArray(array) {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }

//4.  Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

//when user sees website, they see the button
//big button, when user presses the button, modal pops up, Add New Book
//title
//author
//Total Pages
//Completed
//read 

//these save into localstorage and then it closes and saves a card on the DOM
//card has edit, remove,
//card has title, author, 
//card has subtract counter button, read button, add counter button 
//card has currentPagesRead | totalPagesRead 

//FIXED SIDEBAR INFORMATION 
//Number of Books in the Library
//Completed Books in the Library
//Total Pages Read 
//Total Pages Completed

//Storage Options
//delete local button


//5. Add a button on each book’s display to remove the book from the library.
//You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.


//6.Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


//7 Optional -we haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page all of their books will disappear! If you want, you are capable of adding some persistence to this library app using one of the following techniques: