let listBook = document.querySelectorAll('.books');
let books = document.querySelectorAll('.book');
listBook[0].prepend(books[1]);
listBook[0].append(books[2]);
books[4].after(books[3]);
document.body.style.backgroundImage = "url('./image/adv.jpg')";
let adv = document.querySelector('.adv');
adv.remove();
update();
console.log();
let itemChapt = books[1].querySelectorAll('li')
itemChapt[3].after(itemChapt[6]);
itemChapt[6].after(itemChapt[8]);
itemChapt[7].after(itemChapt[2]);


function update(){
    listBook = document.querySelectorAll(".books");
    books = document.querySelectorAll(".book");
}
