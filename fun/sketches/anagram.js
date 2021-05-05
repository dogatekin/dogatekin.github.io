let anagram = new p5(function (p) {

  p.preload = function () {
    sourceCodePro = p.loadFont('assets/SourceCodePro-Regular.otf')
  }

  let offsets, time = 1, frameRate = 60, animTime = 0, initOffset = 100

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

  p.setup = function () {
    parentDiv = p.canvas.parentElement
    p.createCanvas(400, 50)
    p.textFont(sourceCodePro)
    p.textSize(32)

    p.frameRate(frameRate)

    p.controls = p.createDiv()
    p.controls.class('controls')
    p.controls.style('width', `${p.width}px`)

    p.reset = p.createButton('<i class="fas fa-redo"></i>');
    p.reset.class('btn btn-link control')
    p.reset.parent('anagram-label')
    p.reset.mousePressed(p.newAnagram)

    let name = 'doga tekin';
    offsets = {}
    speeds = {}
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) != ' ') {
        offsets[name.charAt(i)] = initOffset + 20*i
        speeds[name.charAt(i)] = 0
      }
    }

    p.noLoop()
  }
  
  p.newAnagram = function () {
    let frames = time * frameRate
    
    const newName = anagrams[Math.floor(Math.random() * anagrams.length)];
    
    if (newName.length == 12) {
      initOffset = 80
    } else if (newName.length == 11) {
      initOffset = 90
    } else {
      initOffset = 100
    }

    for (let i = 0; i < newName.length; i++) {
      if (newName.charAt(i) != ' ') {
        speeds[newName.charAt(i)] = (initOffset + 20*i - offsets[newName.charAt(i)]) / frames
      }
    }

    animTime = frames
    p.loop()
  }
  
  p.draw = function () {
    p.clear()

    if (currentTheme == 'light') {
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
}, "anagram")