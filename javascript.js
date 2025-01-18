const libary = [
  
  
  {Author:"John Fed",Title:"Diary of a Wimpy Kid", Pages:420, Read:"on"},
  {Author:"Perry Wood", Title:"Hunting Bird", Pages:30, Read:"off"},
  {Author:"Luffy", Title:"One Piece", Pages:1000,Read:"on"}
]


// libary[index]["Author"]

function addBookToLibary(book){
  libary.push(book)
  const book_reset = document.getElementById("books")
  book_reset.innerHTML = ""
   for(var index in libary){
    const container = document.getElementById("books")

    const card = document.createElement('div')
    card.classList.add("card")

// Author Section
    const author_section = document.createElement("div")
    author_section.classList.add("description")

    const author_title = document.createElement("div")
    author_title.textContent="Author"
    author_section.appendChild(author_title)

    const author_name = document.createElement("div")
    author_name.textContent = libary[index]["Author"]
    author_section.appendChild(author_name)

// Title section
    const title_section = document.createElement("div")
    title_section.classList.add("description")

    const title_name = document.createElement("div")
    title_name.textContent="Title"
    title_section.appendChild(title_name)

    const title_realname = document.createElement("div")
    title_realname.textContent= libary[index]["Title"]
    title_section.appendChild(title_realname)

// Page section

    const pages = document.createElement("div")
    pages.classList.add("description")

    const pages_name =document.createElement("div")
    pages_name.textContent="Pages"
    pages.appendChild(pages_name)

    const page_real = document.createElement("div")
    page_real.textContent= libary[index]["Pages"]
    pages.appendChild(page_real)

// Read section 
    const read = document.createElement("div")
    read.classList.add("description")

    const read_text = document.createElement("div")
    read_text.textContent="Read"
    read.appendChild(read_text)

    const read_real = document.createElement("input")
    read_real.type="checkbox"
    if(libary[index]["Read"]=="on"){
      read_real.checked=true
    }
    else{
      read_real.checked=false
    }
  
    read.appendChild(read_real)



// adding to card container 
    card.appendChild(title_section)
    card.appendChild(author_section)
    card.appendChild(pages)
    card.appendChild(read)
    container.appendChild(card)
   }
    

}


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
    console.log(inputRead.value)
    inputRead.checked=false;

  const book = {
    Author: author,
    Title : title,
    Pages: pages,
    Read: read
  }
  addBookToLibary(book)
 

}