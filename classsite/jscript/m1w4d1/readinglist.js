const books = [
    {
        title:"The Hobbit",
        author:"J.R.R. Tolkien",
        alreadyRead: false
    },
    {
        title:"Semper Fi",
        author:"W.E.B. Griffin",
        alreadyRead: true
    },
    {
        title:"The Fountainhead",
        author:"Ayn Rand",
        alreadyRead: true
    }
];

books.forEach((book)=>{
    let infoStr = `${book.title} by ${book.author}`;
    console.log(infoStr)
    if(book.alreadyRead)
        console.log(`You already read ${infoStr}`);
    else
        console.log(`You still need to read ${infoStr}`);
});