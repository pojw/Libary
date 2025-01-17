const libary = [
  
  
  {Author:"John fed",Title:"Diary of a Wimpy", Pages:420, Read:"yes"},
  {Author:"Perry Wood", Title:"Hunting Bird", Pages:30, Read:"Yes"},
  {Author:"Luffy", Title:"One piece", Pages:1000,Read:"Yes"}
]



function addBookToLibary(book){
  libary.push(book)
   for(var index in libary){
    console.log(libary[index]["Author"])
   }
    

}
a=0

function book(){
    const inputAuthor = document.getElementById("author");
    const author=inputAuthor.value;
    document.getElementById("author").value=""

    const inputTitle = document.getElementById("title")
    const title= inputTitle.value
  document.getElementById("title").value=""

    const inputPages = document.getElementById("pages")
    const pages = inputPages.value;
  document.getElementById("pages").value=""

    const inputRead = document.getElementById("read")
    const read = inputRead.value
  document.getElementById("read").value=""

  const book = {
    Author: author,
    Title : title,
    Pages: pages,
    Read: read
  }
  addBookToLibary(book)
 

}