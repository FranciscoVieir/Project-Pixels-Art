function verificarSelected() {
  let pixelColor = document.querySelectorAll('.color');
  for (let i = 0; i < pixelColor.length; i++) {
    pixelColor[i].addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
verificarSelected();

function pixelColor() {
  let pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', function(event) {
     let selected = document.querySelector('.selected');
      let getColor = getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = getColor;
    })
  }
}
pixelColor();

function button() {
  let pixel = document.querySelectorAll('.pixel');
  let button = document.querySelector('#clear-board');
  button.addEventListener('click', function() {
    for (let i= 0; i < pixel.length; i +=1) {
      pixel[i].style.backgroundColor = 'white';
    }
  })
}
button();