let arrayOfUsers = []

window.onload = function () {
  fetchUser()
}

const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => data.results.forEach(item => arrayOfUsers.push(item)))
  console.log(arrayOfUsers)
}


const loadUsers = () => {
  const allUsers = document.getElementById("users")
  arrayOfUsers.map(user => {
    
    //user
    const li = document.createElement("li")
    li.innerText = `${user.name.last}, ${user.name.first}`
    allUsers.appendChild(li)

   //img
    const img = document.createElement("img")
    img.setAttribute("src", user.picture.large)
    allUsers.appendChild(img)

    //Show info button
    const displayBtn = document.createElement("button")
    displayBtn.innerHTML = "More Info"
    displayBtn.addEventListener("click", function () {
      showInfo(user, li, displayBtn)
    })
    li.appendChild(displayBtn)
  })
}


const showInfo = (user, li, displayBtn) => {
  displayBtn.innerHTML = ""
  li.innerText += ` Age: ${user.dob.age}
  Gender: ${user.gender} Email: ${user.email}`
}