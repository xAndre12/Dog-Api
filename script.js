//https://dog.ceo/api/breed/Akita/images/random
const getPhoto = document.querySelector(".getPhoto");
const dogPhoto = document.querySelector(".dogPhoto");
const dogBreed = document.querySelector(".dogBreed");

const getAPIData = (value) => {
    fetch(`https://dog.ceo/api/breed/${value}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message)
      dogPhoto.src = data.message;
    });
  }
  getPhoto.addEventListener("click", () => {
    getAPIData(dogBreed.value)
  })