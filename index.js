'use strict';

function watchForm() {
  $('form').submit(function(event) {
    event.preventDefault();
    console.log("submit");
    let number = $('.dogNum').val();
    console.log(number);
    getDogImg(number);
  })
}

function getDogImg(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
  .then(res => res.json())
  .then(imgResult => { 
    console.log(imgResult)
  })
  .catch(error => console.log(error))
}

$(
  watchForm()
)