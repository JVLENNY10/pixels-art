window.onload = function () {
  document.querySelector('#black').classList.add('selected');
};

function paletteColor(numberOfColors) {
  const colorItem = document.querySelector('#color-palette');

  for (let index = 1; index < numberOfColors; index += 1) {
    let color = document.createElement('div');
    if (index === 1) {
      color.id = 'black';
    } else if (index === 2) {
      color.id = 'cyan';
    } else if (index === 3) {
      color.id = 'green';
    } else {
      color.id = 'red';
    }
    colorItem.appendChild(color).classList.add('color');
  }

  return colorItem;
}

function pixelBoard(numberOfPixels) {
  const whitePixel = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfPixels; index += 1) {
    let onePixel = document.createElement('div');
    whitePixel.appendChild(onePixel).classList.add('pixel');
  }

  return whitePixel;
}

// function selectColor(selection) {
//   const select = document.querySelector('.color');

//   if (selection.target.id === 'black') {
//     selection.target.classList.toggle('selected');
//   } else if (selection.target.id === 'cyan') {
//     selection.target.classList.toggle('selected');
//   } else if (selection.target.id === 'green') {
//     selection.target.classList.toggle('selected');
//   } else if (selection.target.id === 'red') {
//     selection.target.classList.toggle('selected');
//   }

//   return selection;
// }

// document.addEventListener('click', selectColor);

pixelBoard(25);
paletteColor(5);
