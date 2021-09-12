window.onload = function init() {
  document.querySelector('#black').classList.add('selected');
};

function paletteColor(numberOfColors) {
  const colorItem = document.querySelector('#color-palette');

  for (let index = 1; index < numberOfColors; index += 1) {
    const color = document.createElement('div');
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
    const onePixel = document.createElement('div');
    whitePixel.appendChild(onePixel).classList.add('pixel');
  }

  return whitePixel;
}

function selectColor(selection) {
  const black = document.querySelector('#black');
  const cyan = document.querySelector('#cyan');
  const green = document.querySelector('#green');
  const red = document.querySelector('#red');

  if (selection.target.id === 'black') {
    cyan.classList.remove('selected');
    green.classList.remove('selected');
    red.classList.remove('selected');
    selection.target.classList.toggle('selected');
  } else if (selection.target.id === 'cyan') {
    black.classList.remove('selected');
    green.classList.remove('selected');
    red.classList.remove('selected');
    selection.target.classList.toggle('selected');
  } else if (selection.target.id === 'green') {
    black.classList.remove('selected');
    cyan.classList.remove('selected');
    red.classList.remove('selected');
    selection.target.classList.toggle('selected');
  } else if (selection.target.id === 'red') {
    black.classList.remove('selected');
    cyan.classList.remove('selected');
    green.classList.remove('selected');
    selection.target.classList.toggle('selected');
  }

  return selection;
}

document.addEventListener('click', selectColor);

pixelBoard(25);
paletteColor(5);
