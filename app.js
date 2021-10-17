// OBJECT ORIENTED
// Book Class instantiate

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class

class UI {
    static displayBooks(){
        const StoredBooks = [
            {title: 'Coldplay is Amazing', author: 'Jordan Tanaliga', isbn: 12345},
            {title: 'The Script is Amazing', author: 'Deanna Wong', isbn: 12345},
            {title: 'U2 is Amazing', author: 'Chris Martin', isbn: 12345},
            {title: 'Oasis is Amazing', author: 'Chris Martin', isbn: 12345},
            {title: 'Nirvana is Amazing', author: 'John Doe', isbn: 12345},
        ]
        const books = StoredBooks;
        books.forEach((book)=> {
            UI.addBooktoList(book)
        })
    }

    static addBooktoList(book) {
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title} </td>
        <td>${book.author} </td>
        <td>${book.isbn} </td>
        <td> <a href="#" class="btn btn-sm btn-danger delete"> Delete</a></td>
        `
        list.appendChild(row)
    }
    static clearFields(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    static removeItem(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
    static validate(mess, addClass){
        const message = document.createElement('p');
        message.className += `validate ${addClass}`;
        message.appendChild(document.createTextNode(mess))
        const container = document.querySelector('.container')
        const form = document.querySelector('form')

        container.insertBefore(message, form)

        setTimeout(()=> {document.querySelector('.validate').remove()},1000)
    }
}
// Events to display/edit/remove

document.addEventListener('DOMContentLoaded', UI.displayBooks)
// Submit Event
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault()

    //target value
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instantiate book
    const book = new Book(title, author, isbn)

    // Validate 
    if(title === "" || author === "" || isbn === ""){
        UI.validate("Fill all the Fields", "failed")

    }else{
        UI.addBooktoList(book)
        UI.clearFields()
        UI.validate("Book has been added...", "succeed")
    }
})

// Remove Item

document.querySelector('#book-list').addEventListener('click', (e)=> {
    const x =  UI.removeItem(e.target)
    const y =  UI.validate("Book has been removed...", "succeed")

})





