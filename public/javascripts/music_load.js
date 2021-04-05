let amp; // current volume of the sound
let sound;
let poly;

function preload() {
  sound = loadSound('assets/dazed_and_confused.mp3');
}

function setup() {
  cnv = createCanvas(400, 400);
  cnv.mouseClicked(playMusic);
  amp = new p5.Amplitude();
  poly = new p5.PolySynth();
}

function draw() {
  background(220);
  // getLevel : Returns a single Amplitude reading at the moment it is called. For continuous readings, run in the draw loop.

  let level = amp.getLevel();
  //console.log(level);
}

function playMusic() {
  console.log("mouseClicked");
  if (sound.isPlaying()) {
    sound.stop()
  }
  else {
    sound.play();
    console.log(sound.getPeaks());
    // getPeaks :
    /*Returns an array of amplitude peaks in a p5.SoundFile that can be used to draw a static waveform.
    Scans through the p5.SoundFile's audio buffer to find the greatest amplitudes. Accepts one parameter, 'length',
    which determines size of the array. Larger arrays result in more precise waveform visualizations.*/
  }
}

// osc, amp
