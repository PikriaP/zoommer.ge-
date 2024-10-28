const scrollbtn = document.querySelector(".scroll");
const workingMessage = document.querySelector(".chat-conversation");
const notWorkingMessage = document.querySelector(".not-working--message");
const chatWindow = document.querySelector(".chat-window");
const chatButton = document.querySelector(".chat-button");
const chatClose = document.querySelector(".chat__header--close");
const startChatBtn = document.querySelector(".start-chat");
const chatForm = document.querySelector(".chat-form");
const chatinputs = document.querySelectorAll(".form__inputs");
const nameInput = document.getElementById("name"); // სახელი
const telInput = document.getElementById("tel"); // ტელეფონის ნომერი
const startChatButton = document.getElementById("start-chat"); // დაწყების ღილაკი
const inputLable = document.querySelectorAll(".input--label");

// Initially hide the button
scrollbtn.style.display = "none";

// Function to show/hide the button based on scroll position
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    // Change 100 to your desired threshold
    scrollbtn.style.display = "flex"; // Show the button when scrolling down
  } else {
    scrollbtn.style.display = "none"; // Hide the button when at the top
  }
});

// Smooth scroll to top on button click
scrollbtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log(scrollbtn);
});

// set time zone

const timeNow = new Date();
let currentHours = timeNow.getHours();
let currentMinutes = timeNow.getMinutes();
console.log(timeNow);


console.log(currentHours + ", " + currentMinutes);

// working hourse = 09:30-19:30

// if (
//   currentHours > 19 ||
//   (currentHours === 19 && currentMinutes > 30) ||
//   currentHours < 9 ||
//   (currentHours === 9 && currentMinutes <= 30)
// ) {
//   console.log("not working hours");
//   workingMessage.style.display = "none";
//   notWorkingMessage.style.display = "flex";
// } else {
//   console.log("working hours");
//   startConversation();
// }

// open chat window
chatButton.addEventListener("click", function () {
  chatWindow.classList.add("show");

  if (
    currentHours > 19 ||
    (currentHours === 19 && currentMinutes > 30) ||
    currentHours < 9 ||
    (currentHours === 9 && currentMinutes <= 30)
  ) {
    console.log("not working hours");
    workingMessage.style.display = "none";
    notWorkingMessage.style.display = "flex";
  } else {
    console.log("working hours");
    startConversation();
  }
});

//close chat
// chatClose.addEventListener("click", function () {
//   chatWindow.classList.remove("show");

// });

function closeWindow() {
  chatWindow.classList.remove("show");
  workingMessage.style.display = "none";
}

function startConversation() {
  workingMessage.style.display = "flex";
  notWorkingMessage.style.display = "none";
}

startChatBtn.addEventListener("click", function () {
  startChatBtn.style.display = "none";
  chatForm.style.display = "block";
});

// function formvalidation

function toggleSubmitButton() {
  inputLable.forEach((lable) => {
    lable.classList.add("clicked");
  });

  if (nameInput.checkValidity() && telInput.checkValidity()) {
    startChatButton.classList.add("ready");
    startChatButton.addEventListener("click", function () {
      alert("hello");
    });
  } else {
    startChatButton.classList.remove("ready");
  }
}

// Listen for input events on both fields to recheck validity
nameInput.addEventListener("input", toggleSubmitButton);
telInput.addEventListener("input", toggleSubmitButton);

// function moveLable() {
//   inputLable.classList.add("clicked");
// }
