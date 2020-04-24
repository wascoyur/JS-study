let listBook = document.querySelectorAll('.books');
let books = document.querySelectorAll('.book');

listBook[0].prepend(books[1]);
listBook[0].append(books[2]);
books[4].after(books[3]);
document.body.style.backgroundImage = "url('./image/adv.jpg')";
let adv = document.querySelector('.adv');
adv.remove();

let tileBook = document.createElement('h2');
let href = document.createElement("a");
  href.setAttribute('href',
    "https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes");
href.textContent = "Книга 3. this и Прототипы Объектов";
// tileBook.textContent = ;
let delH2 = books[4].querySelector('h2');
delH2.remove()
tileBook.append(href);
books[4].prepend(tileBook);

let chapters = books[0].querySelectorAll('li')
chapters[3].after(chapters[6]);

chapters[6].after(chapters[8]);

chapters[9].after(chapters[2]);


chapters = books[4].querySelectorAll('li');
chapters[1].after(chapters[9]);
chapters[5].after(chapters[3]);
chapters[8].after(chapters[6]);
chapters = books[5].querySelectorAll('li');
const myChapt = document.createElement("li");
myChapt.textContent = 'Глава 8: За пределами ES6';
let last = books[2].querySelectorAll('li');
last[8].append(myChapt)
