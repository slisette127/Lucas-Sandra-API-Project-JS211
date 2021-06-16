const addressBook = document.getElementById('userName');

const API = "https://randomuser.me/api/?results=10";

fetch(API)
.then((response) => response.json())
.then((data) => {
 
  data.results.forEach((person) => {
    
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = person.picture.thumbnail;
    img.alt = person.name.first;

    li.appendChild(img);

  //   const h4 = document.createElement("h4");
  //   h4.innerText = `${person.name.first} - ${person.name.last}`;
    

  //   li.innerText = `${person.name.first} - ${person.name.last}`;
  //   li.appendChild(h4);
  //      //append the li to the ul
  //   list.appendChild(li);
  // });
    
  // });
