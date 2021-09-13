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

function button() {
  const sectionButton = document.querySelector('#button');
  const createButton = document.createElement('button');

  sectionButton.appendChild(createButton).id = 'clear-board';
  createButton.innerHTML = 'Limpar';

  return sectionButton;
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
    if (selected.id === 'black') {
      selection.target.style.backgroundColor = 'black';
      console.log('black');
    } else if (selected.id === 'cyan') {
      selection.target.style.backgroundColor = 'cyan';
      console.log('cyan');
    } else if (selected.id === 'green') {
      selection.target.style.backgroundColor = 'green';
      console.log('green');
    } else if (selected.id === 'red') {
      selection.target.style.backgroundColor = 'red';
      console.log('red');
    }
  }

  return selection;
}

function clickButton(selection) {
  const pixelWhite = document.querySelectorAll('.pixel');
  const clickedButton = document.querySelector('#clear-board');

  if (selection.target === clickedButton) {
    pixelWhite.forEach(function (item) {
      console.log('apagou')
      item.style.backgroundColor = 'white';
    });
  }

  return selection;
}

pixelBoard(25);
button();
paletteColor(5);
document.addEventListener('click', selectColor);
document.addEventListener('click', printBoard);
document.addEventListener('click', clickButton);
