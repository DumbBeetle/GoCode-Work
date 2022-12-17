function setName(user) {
  const userName = document.createElement("p");
  userName.textContent = "Name: ";
  for (const value of Object.values(user["name"])) {
    userName.textContent += value + " ";
  }
  document.body.appendChild(userName);
}

// Get user
const getUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    console.log("ASDsa");
    const data = await response.json();
    return data["results"]["0"];
  } catch (e) {
    console.log("Error:", e);
  }
};

getUser().then((user) => {
  console.log(user["name"]);
  setName(user);
});
