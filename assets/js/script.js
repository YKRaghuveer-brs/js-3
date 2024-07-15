/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: Letter Type Effect
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
const containerDiv = document.getElementById("content");
const resetBtn = document.getElementById("resetBtn");

// Default theme
let chathams_blue = "#1A4B84";

// function that sets the content
function setContent() {
  const content = `
  <div class="container">
  <div class="row">
    <h2 data-type data-type-min="100" data-type-max="300">
     Main Heading
    </h2>
    <p class="text-start lh-lg" data-type data-type-min="1" data-type-max="6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi 
    labore blanditiis dolores voluptas aut eligendi exercitationem perferendis autem 
    distinctio dolorum magni a quae, facilis excepturi debitis, corrupti suscipit odio. 
    Recusandae temporibus nobis quod sunt distinctio! Temporibus architecto amet saepe nostrum 
    ullam dolor nihil soluta magni natus modi nam quasi alias vero ipsa iusto ea, adipisci iure 
    libero quae numquam, illum animi assumenda voluptas tempora. 
    Numquam impedit voluptatum ipsam ducimus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi 
    labore blanditiis dolores voluptas aut eligendi exercitationem perferendis autem 
    distinctio dolorum magni a quae, facilis excepturi debitis, corrupti suscipit odio. 
    Recusandae temporibus nobis quod sunt distinctio! Temporibus architecto amet saepe nostrum 
    ullam dolor nihil soluta magni natus modi nam quasi alias vero ipsa iusto ea, adipisci iure 
    libero quae numquam, illum animi assumenda voluptas tempora. 
    Numquam impedit voluptatum ipsam ducimus.
    </p>
  </div>
</div>
  `;
  containerDiv.innerHTML = content;
}

// delay
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// get random number
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

// restart the effect
function restartTypeEffect(params) {
  containerDiv.innerHTML = "";
  setContent();
  document.querySelectorAll("[data-type]").forEach(draw);
}

// event listener for restart
resetBtn.addEventListener("click", restartTypeEffect);

// Init content 
setContent();
document.querySelectorAll("[data-type]").forEach(draw);

// theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);