let listBook = document.querySelectorAll('.books');
let books = document.querySelectorAll('.book');
books[0].before(books[1]);
books[4].after(books[0]);
console.log('books[4].textContent: ', books[4].textContent);
