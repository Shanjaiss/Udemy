var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll('.drum')
    [i].addEventListener('click', function handleclick() {
      var innerHtml = this.innerHTML;

      makeSound(innerHtml);
      activeButton(innerHtml);
    });

  document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    activeButton(event.key);
  });

  function makeSound(key) {
    switch (key) {
      case 'w':
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
      case 'a':
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
      case 's':
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
      case 'd':
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
      case 'j':
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;
      case 'k':
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
      case 'l':
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break;
      default:
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    }
  }

  function activeButton(currentkey) {
    var activeButtonClick = document.querySelector('.' + currentkey);

    activeButtonClick.classList.add('pressed');

    setTimeout(() => {
      activeButtonClick.classList.remove('pressed');
    }, 100);
  }
}
