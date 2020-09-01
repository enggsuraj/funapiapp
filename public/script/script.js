url =
  "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist";

// IF CONTENT IS JOKE TYPE
let updateContent = (str) => {
  document.querySelector("#place-content").innerHTML = str;
};

// IF CONTENT IS SETUP AND DELIVERY TYPE
let updateContentOther = (setup, delivery) => {
  document.querySelector("#place-content").innerHTML =
    setup + "<br>" + delivery;
};

// READ DATA FROM API
document.querySelector(".button").addEventListener("click", () => {  
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.joke) {
        updateContent(data.joke);
      } else {
        let setup = data.setup;
        let delivery = data.delivery;
        updateContentOther(setup, delivery);
      }
    });
});
