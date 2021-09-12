window.onload = function init() {
  document.querySelector('.black').classList.add('selected');
};

function paletteColor(numberOfColors) {
  const colorItem = document.querySelector('#color-palette');

  for (let index = 1; index < numberOfColors; index += 1) {
    const color = document.createElement('div');
    if (index === 1) {
      color.classList.add('black');
    } else if (index === 2) {
      color.classList.add('cyan');
    } else if (index === 3) {
      color.classList.add('green');
    } else {
      color.classList.add('red');
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
  const black = document.querySelector('.black');
  const cyan = document.querySelector('.cyan');
  const green = document.querySelector('.green');
  const red = document.querySelector('.red');

  if (selection.target === black) {
    cyan.classList.remove('selected');
    green.classList.remove('selected');
    red.classList.remove('selected');
    selection.target.classList.add('selected');
  } else if (selection.target === cyan) {
    black.classList.remove('selected');
    green.classList.remove('selected');
    red.classList.remove('selected');
    selection.target.classList.add('selected');
  } else if (selection.target === green) {
    black.classList.remove('selected');
    cyan.classList.remove('selected');
    red.classList.remove('selected');
    selection.target.classList.add('selected');
  } else if (selection.target === red) {
    black.classList.remove('selected');
    cyan.classList.remove('selected');
    green.classList.remove('selected');
    selection.target.classList.add('selected');
  }

  return selection;
}

function printBoard(selection) {
  const selected = document.querySelector('.selected');
  const containPixel = selection.target.classList.contains('pixel');

  if (containPixel) {
    if (selected.classList.contains('black')) {
      selection.target.style.backgroundColor = 'black'
      console.log('black');
    } else if (selected.classList.contains('cyan')) {
      selection.target.style.backgroundColor = 'cyan';
      console.log('cyan');
    } else if (selected.classList.contains('green')) {
      selection.target.style.backgroundColor = 'green';
      console.log('green');
    } else if (selected.classList.contains('red')) {
      selection.target.style.backgroundColor = 'red';
      console.log('red');
    }
  }

  return selection;
}

pixelBoard(25);
paletteColor(5);
document.addEventListener('click', selectColor);
document.addEventListener('click', printBoard);
