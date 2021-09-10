function printPixelBoard(numberOfPixels) {

  let whitePixel = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfPixels; index += 1) {
    if (whitePixel.children.length < numberOfPixels) {
      let onePixel = document.createElement('div');
      whitePixel.appendChild(onePixel).className = 'pixel';
    }
  }

  return whitePixel;
}

printPixelBoard(25);
