let listBook = document.querySelectorAll('.books');
let books = document.querySelectorAll('.book');
listBook[0].prepend(books[1]);
listBook[0].append(books[2]);
books[4].after(books[3]);
document.body.style.backgroundImage = "url('./image/adv.jpg')";
let adv = document.querySelector('.adv');
adv.remove();

books.forEach((el, i) =>{
    let parent = el.querySelector('a');
    let nodeArr = Array.from(el);
    console.log('nodeArr: ', nodeArr);
    let item = el.querySelector('h2 a')/* .innerHTML */;
    if (item.innerHTML.includes ("Книга 3. this и Пропопипы Объектов")){
        // el.innerHTML = 'Книга 3. this и Прототипы Объектов';
        let ul = item.toString()

        item.replaceWith('Пропопипы', 'Прототипы');
    }
})

// Array.from(listBook).forEach((el) => {

//     console.dir(el.textContent.);
// })
