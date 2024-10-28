const scrollbtn = document.querySelector(".scroll");
const workingMessage = document.querySelector(".chat-conversation");
const notWorkingMessage = document.querySelector(".not-working--message");
const chatWindow = document.querySelector(".chat-window");
const chatButton = document.querySelector(".chat-button");
const chatClose = document.querySelector(".chat__header--close");
const startChatBtn = document.querySelector(".start-chat");
const chatForm=document.querySelector('.chat-form')

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

// // const chatWindow = document.querySelector(".chat-window");
// const secondChat = document.querySelector(".second-chat--window");
// const registrationBtn = document.querySelector(".registration-btn");
// const startChat = document.querySelector(".start-chat");
// const registrationItems = document.querySelector(".registration-btn--item");

// // Close the chat window when clicking the chat button

// chatButton.addEventListener("click", () => {
//   chatWindow.style.display = "none";
//   secondChat.style.display = "block";
// });

// startChat.addEventListener("click", function () {
//   secondChat.style.display = "none";
//   startChat.style.display = "none";
//   registrationBtn.style.display = "flex";
//   console.log(inputName.value);
//   document.querySelector(".registration-btn--item").textContent =
//     inputName.value;
// });

// set time zone

const timeNow = new Date();
let currentHours = timeNow.getHours();
let currentMinutes = timeNow.getMinutes();
console.log(timeNow);
currentHours = 10;

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
  chatForm.style.display='block';
});


