var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create variables for all the KEYS. For example
var keyC = createSprite(27,200,57,200);

var keyD = createSprite(54,200,114,200);
keyD.shapeColor="white";
var keyE = createSprite(135,200,57,200);

var keyF = createSprite(192,200,57,200);
keyF.shapeColor="white"
var keyG = createSprite(250,200,57,200);
var keyA = createSprite(305,200,57,200);
keyA.shapeColor="white"
var keyB = createSprite(27,200,57,200);



function draw() {
  
 background("yellow");
  
  if (mousePressedOver(keyC)) {
playSound("assets/piano_C_sharp.mp3");
    
}
if (mousePressedOver(keyD)) {
playSound("assets/piano_D.mp3");
        
  }
if (mousePressedOver(keyE)) {
  playSound("assets/piano_E.mp3");
          
    }
      if (mousePressedOver(keyF)) {
        playSound("assets/piano_F_sharp.mp3");
            
        }
if (mousePressedOver(keyG)) {
 playSound("assets/piano_G.mp3");
                       
          }
if (mousePressedOver(keyA)) {
             playSound("assets/piano_A_sharp.mp3");
                               
                    }
                                        
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
