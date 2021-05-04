function love() {
  var love = document.querySelector('#love');
  if (love.innerHTML === '❤️') {
    love.innerHTML = '💩';
  } else {
    love.innerHTML = '❤️';
  }
}

function speak(language = 'en') {
  var audio = new Audio('./assets/audio/' + language + '.mp3');
  audio.play();
}
