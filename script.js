function changeText() {
  const mainText = document.getElementById("main-text");
  mainText.textContent = "I am a Frontend Developer";
}

document
  .getElementById("textbtn")
  .addEventListener("click", changeText);
