let myLibrary = [];
const document_library = document.querySelector('#library');
const img_path = "./images/";
const generic_img = "./images/book_icon.png";

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
    div_img.append(cover_img);
    //add the cover image to div
    div_book.append(div_img); 

    //PART 2: Book info
    div_book.append(add_complete_description(book));

    document_library.append(div_book);

    return
}

function display_library(){
    for (let i = 0; i < myLibrary.length; i++){
        display_book(myLibrary[i]);
    }
}

let book1 = new new_book("Title", 100, "Sci-Fi", "First_name", "Last_name", 2021, generic_img);
let book2 = new new_book("Clean Code", 200, "software", "Robert", "Martin", 2014, img_path + "clean_code.jpg");
addBookToLibrary(book2);
addBookToLibrary(book1);

display_library();


