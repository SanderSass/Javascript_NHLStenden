class Book{
	constructor(name) {
		this.bookname = name;
	}

	getBookName(){
		return this.bookname;
	}
	setBookName(name){
		this.bookname = name;
	}


	info(){
		return "The name of the book is "+  this.bookname;
	}

}

class BookShelf{
	constructor(){
		this.books = new Array();
	}

	addBook(bookname){
		this.books.push(bookname);
	}
	info(){
		if(this.books.length <= 0){
			return "There is no books";
		}else{
			var str = "The books in the shelf: <br>";
			for (var i = this.books.length  - 1; i >= 0; i--) {
				str +=  this.books[i] + "<br>";
			}
			return str;
		}
	}
}

class Library{
	constructor(bookAmount){
		this.bookAmount = bookAmount;
	}

	get BookAmount(){
		return this.bookAmount;
	}

	set BookAmount(bookAmount){
		this.bookAmount = bookAmount;
	}

	info(){
		return	"the amount of books in the library is"+ this.bookAmount;
	}


}


class Librarian
{
	constructor(name)
	{
		this.name = name;
	}

	get librarianName()
	{
		return this.name;
	}

	set librarianName(name)
	{
		this.number = number;
	}

	info()
	{
		return "Hello, my name is " + " " + this.name;
	}



}

myBookShelf = new BookShelf();
myBookShelf.addBook("war and piece");
myBookShelf.addBook("Crime and punishment");
mybook = new Book("picnic on a country road");
lib = new Library(120);
librarian = new Librarian("karl");

document.getElementById('class1').innerHTML = mybook.info();
document.getElementById('class2').innerHTML = myBookShelf.info();
document.getElementById('class3').innerHTML = lib.info();
document.getElementById('class4').innerHTML = librarian.info();