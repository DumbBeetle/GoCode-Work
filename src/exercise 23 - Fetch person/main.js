'use strict'

// Get Cell
function setCell(user, userContainer) {
    const cell = document.createElement("p");
    cell.textContent = "Cellphone: " + user["cell"];
    userContainer.appendChild(cell);
}

// Get BirthDate
function setBirthDate(user, userContainer) {
    const age = document.createElement("p");
    age.textContent = "Age: " + user["dob"]["age"];
    userContainer.appendChild(age);

    const date = document.createElement("p");
    const userDate = user["dob"]["date"];
    date.textContent = "Date: ";
    date.textContent += userDate.replace("T", " ").slice(0, userDate.indexOf("."));
    userContainer.appendChild(date);
}

// Get Email
function setEmail(user, userContainer) {
    const email = document.createElement("p");
    email.textContent = "Email: " + user["email"];
    userContainer.appendChild(email);
}

// Get Gender
function setGender(user, userContainer) {
    const gender = document.createElement("p");
    gender.textContent = "Gender: " + user["gender"];
    userContainer.appendChild(gender);
}
// Set ID
function setId(user, userContainer) {
    const id = document.createElement("p");
    const str = Object.values(user["id"]).toString()
    id.textContent = "ID: "
    if (str !== ","){
        id.textContent += str.replace(",", "-");
    }
    userContainer.appendChild(id);
}
// Get Location
function setLocation(user, userContainer) {
    const container = document.createElement("div");
    for (const [key, value] of Object.entries(user["location"])) {
        const loc = document.createElement('p');
        if (typeof value === "object") {
            loc.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${Object.values(value)}`
        } else {
            loc.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        }
        container.appendChild(loc)
    }
    userContainer.appendChild(container);
}
// Get Login
function setLogin(user, userContainer) {
    const container = document.createElement("div");
    for (const [key, value] of Object.entries(user["login"])) {
        const login = document.createElement('p');
        login.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        container.appendChild(login)
    }
    userContainer.appendChild(container);
}
// Get Name
function setName(user, userContainer) {
    const userName = document.createElement("p");
    userName.textContent = "Name: ";
    for (const value of Object.values(user["name"])) {
        userName.textContent += value + " ";
    }
    userContainer.appendChild(userName);
}
// Get Nat
function setNat(user, userContainer) {
    const nat = document.createElement("p");
    nat.textContent = "Nat: " + user["nat"];
    userContainer.appendChild(nat);
}
// Get Phone
function setPhone(user, userContainer) {
    const phone = document.createElement("p");
    phone.textContent = "Phone: " + user["phone"];
    userContainer.appendChild(phone);
}
// Get Photo
function setPhoto(user, userContainer) {
    const photo = document.createElement("img");
    photo.src = user["picture"]["medium"];
    userContainer.appendChild(photo);
}
// Get Registered
function setRegistered(user, userContainer) {
    const reg = document.createElement("p");
    for (const value of Object.values(user['registered'])){
        reg.textContent += value + " ";
    }
    userContainer.appendChild(reg);
}

function addToDom(userContainer){
    document.body.appendChild(userContainer);
}


// Get user
const getUser = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data["results"]["0"];
        const userContainer = document.createElement("div");
        userContainer.className = "userContainer";
        document.body.appendChild(userContainer)
        setCell(user, userContainer)
        setBirthDate(user, userContainer)
        setEmail(user, userContainer)
        setGender(user, userContainer)
        setId(user, userContainer)
        setLocation(user, userContainer)
        setLogin(user, userContainer)
        setName(user, userContainer);
        setPhone(user, userContainer)
        setPhoto(user, userContainer)
        setRegistered(user, userContainer)
    } catch (e) {
        console.log("Error:", e);
    }
};

const button = document.createElement("button");
button.textContent = "fetch person";
document.body.appendChild(button);
button.addEventListener("click", () =>{
    const hasContainer = document.querySelector(".userContainer");
    if (hasContainer){
        document.body.removeChild(hasContainer)
    }
    getUser()
})


