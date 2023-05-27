//clear scores area
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Retreives info
let allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

  for (let i = 0; i < allScores.length; i++) {

      let createLi = document.createElement("li");
      createLi.textContent = allScores[i].initials + " " + allScores[i].score;
      highScore.appendChild(createLi);

  }
}
// Event listener to move to index.html
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});