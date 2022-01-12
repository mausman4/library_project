let myLibrary = [];
const document_library = document.querySelector('#library');
const img_path = "./images/";
const generic_img = "./images/book_icon.png";
//button to add a new book
const add_book_obj = new new_book;
add_book_obj.cover_img = img_path + "add_icon.png";



function new_book(title, pages, genre, author_first_name, author_last_name, publish_date, cover_img) {
    //constructor
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.author_first_name = author_first_name;
    this.author_last_name = author_last_name;
    this.publish_date = publish_date;
    this.cover_img = cover_img;
}

function addBookToLibrary(book){
    //do stuff here
    myLibrary.push(book);
}

function get_cover(book){
    if (book.hasOwnProperty('cover_img')){
        return book.cover_img;
    }
    else{
        return generic_img;
    }
}

function make_div(){
    return document.createElement('div');
}

function make_img(){
    return document.createElement('img');
}

function make_p(){
    return document.createElement('p');
}

function book_info(book, prop){
    const p = make_p();
    p.textContent = prop + ": " + book[prop];
    return p;
}

function add_complete_description(book){
    const div_info = make_div();

    //title
    div_info.append(book_info(book, "title"));

    //number of pages
    div_info.append(book_info(book, "pages"));

    //genre
    div_info.append(book_info(book, "genre"));

    //author first name
    div_info.append(book_info(book, "author_first_name"));
    
    //author last name
    div_info.append(book_info(book, "author_last_name"));

    //publish date
    div_info.append(book_info(book, "publish_date"));

    return div_info;
}


function display_book(book){
    //do stuff here
    const div_book = make_div();
    div_book.classList.add('book');

    //PART 1: Cover Image
    //if book has cover image loaded, link to the image
    //otherwise, use generic grey cover
    const div_img = make_div();
    const cover_img = make_img();
    cover_img.src = get_cover(book);

    if ((book.title !== undefined) && (book.hasOwnProperty('title'))){
        //PART 2: Book info
        div_img.append(cover_img);
        //add the cover image to div
        div_book.append(div_img); 
        div_book.append(add_complete_description(book));
    }
    else{
        //last div if here
        div_book.classList.add('add-item');
        const add_btn = document.createElement('button');
        add_btn.setAttribute('id', 'add-item');
        add_btn.innerHTML="";
        add_btn.appendChild(cover_img);
        div_book.append(add_btn);
    }
    document_library.append(div_book);
    return;
}

function display_library(){
    for (let i = 0; i < myLibrary.length; i++){
        display_book(myLibrary[i]);
    }
    if ((myLibrary.length) % 5 != 0){
        for (let i = 0; i < 5-((myLibrary.length)%5); i++){
            const div_placeholder = make_div();
            div_placeholder.classList.add('book', 'placeholder');
            document_library.append(div_placeholder);
        }
    }
}

let book1 = new new_book("Title", 100, "Sci-Fi", "First_name", "Last_name", 2021, generic_img);
let book2 = new new_book("Clean Code", 200, "software", "Robert", "Martin", 2014, img_path + "clean_code.jpg");

addBookToLibrary(book2);
addBookToLibrary(book1);
addBookToLibrary(add_book_obj);
display_library();
document.getElementById("add-item").addEventListener("click", function(){
    console.log("Hello");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


