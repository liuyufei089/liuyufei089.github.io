const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://images.icon-icons.com/2415/PNG/512/firefox_original_wordmark_logo_icon_146524.png") {
    myImage.setAttribute("src", "https://img.doooor.com/img/forum/201110/16/224348ssv14w1idnyy11bi.png");
  } else {
    myImage.setAttribute("src", "https://images.icon-icons.com/2415/PNG/512/firefox_original_wordmark_logo_icon_146524.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = function () {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}