console.log('Its Running')
class myBook {
    constructor(Book, Author, type) {
        this.name = Book;
        this.author = Author;
        this.type = type;
    }
}
class Display {
    add(book) {
        let tableBody = document.getElementById('tableBody');
        let uiString = ` <tr>
       <td>${book.name}</td>
       <td>${book.author}</td>
       <td>${book.type}</td>
     </tr>`
        tableBody.innerHTML += uiString;
    }
    validate(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            return false;
        }
        else return true;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    show(type,displayMessage) {
        let message=document.getElementById('message');
        message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${displayMessage}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`
        setTimeout(() => {
            message.innerHTML=""
        }, 5000);
    }
    
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    e.preventDefault();
    let Book = document.getElementById('addBook').value;
    let Author = document.getElementById('addAuthor').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new myBook(Book, Author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success',"Success:Your Book has been successfully added to the library");
    }
    else {
        display.show('danger',"Error:Some error has occured!PLease Try again");
    }

}