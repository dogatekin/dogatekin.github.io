const anagram = function (p) {

  let offsets, time = 1, frameRate = 60, animTime = 0, initOffset, i = 0

  let parentDiv, speeds, charWidth

  let anagrams = [
    'teak dingo',
    'intake god',
    'intake dog',
    'gonad kite',
    'taking ode',
    'tango dike',
    'inked goat',
    'tinged oak',
    'a knit doge',
    'a diet kong',
    'a dote king',
    'a dong kite',
    'egad i knot',
    'aged i knot',
    'i got naked',
    'i date kong',
    'go and kite',
    'kind to age',
    'take dog in',
    'do take gin',
    'kid go neat',
    'dog ate ink',
    'do king tea',
    'tan kid ego',
    'no get a kid'
  ]


  let shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  p.setup = function () {
    parentDiv = p.canvas.parentElement
    let canv = p.createCanvas(250, 50)
    canv.class('anagrammer')
    p.textFont('monospace')
    p.textSize(32)

    p.frameRate(frameRate)

    p.reset = p.createButton('<i class="fas fa-redo"></i>');
    p.reset.class('btn btn-link control')
    p.reset.parent('anagram-label')
    p.reset.mousePressed(p.newAnagram)

    let name = 'doga tekin';

    charWidth = p.textWidth(' ')
    let nameWidth = name.length * charWidth;
    initOffset = p.width / 2 - nameWidth / 2

    offsets = {}
    speeds = {}
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) != ' ') {
        offsets[name.charAt(i)] = initOffset + charWidth * i
        speeds[name.charAt(i)] = 0
      }
    }

    shuffleArray(anagrams)

    p.noLoop()
  }

  p.newAnagram = function () {
    let frames = time * frameRate

    const newName = anagrams[i];

    let nameWidth = newName.length * charWidth;
    initOffset = p.width / 2 - nameWidth / 2

    for (let i = 0; i < newName.length; i++) {
      if (newName.charAt(i) != ' ') {
        speeds[newName.charAt(i)] = (initOffset + charWidth * i - offsets[newName.charAt(i)]) / frames
      }
    }

    animTime = frames
    i = (i + 1) % anagrams.length
    p.loop()
  }

  p.draw = function () {
    p.clear()

    if (localStorage.getItem('theme') == 'light-theme') {
      p.stroke('#333')
      p.fill('#333')
    } else {
      p.stroke('#f0f2f3')
      p.fill('#f0f2f3')
    }

    if (animTime > 0) {
      for (const letter in offsets) {
        offsets[letter] += speeds[letter]
      }

      animTime -= 1
    } else {
      p.noLoop()
    }

    for (const letter in offsets) {
      p.text(letter, offsets[letter], p.height / 2)
    }
  }

  p.mouseClicked = function () {
    p.redraw();
  }
};

export { anagram };