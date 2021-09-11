function printPixelBoard(numberOfPixels) {
  const whitePixel = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfPixels; index += 1) {
    const onePixel = document.createElement('div');
    whitePixel.appendChild(onePixel).classList = 'pixel';
  }

  return whitePixel;
}

printPixelBoard(25);
