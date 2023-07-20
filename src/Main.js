import * as THREE from 'three';
import SceneManager from "./SceneManager.js";
import TextBox from "./TextBox.js";
import { closeFullscreen, openFullscreen, resizeRendererToDisplaySize } from './Utils.js';
import ButtonManager from './ButtonManager.js';

// set background
const body = document.querySelector('#main-canvas');
body.style.backgroundImage = 'url("background/2k_stars.jpg")';

// variables
let startX = 0;
let distX = 0;
let previousTime = 0;
let fullScreen = false;
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
let portraitMode = (sizes.width <= sizes.height) ? 
  false : true; // reversed so it sets it at the start

// text box
const textBox = new TextBox();

// buttons manager
const buttonManager = new ButtonManager();

// scene manager
let sm = new SceneManager(textBox, buttonManager);


// renderer
const canvas = document.querySelector('#main-canvas');
const renderer = new THREE.WebGLRenderer({canvas, 
  antialias: true, 
  alpha: true, 
});
renderer.setPixelRatio(window.devicePixelRatio);


// return to earth button
const earthButton = document.getElementById( 'earthButton' );
earthButton.addEventListener( 'click', function ( event ) {
  if(buttonManager.getEarthState()) {
    sm.returnToEarth();
  } else {
    sm.setNightMode();
  }
}, false );

// left arrow button
const leftArrow = document.getElementById( 'left-arrow' );
leftArrow.addEventListener( 'click', function ( event ) {
  //console.log('at section'+section+' going left')
  sm.moveLeftSection();
}, false );

// right arrow button
const rightArrow = document.getElementById( 'right-arrow' );
rightArrow.addEventListener( 'click', function ( event ) {
  sm.moveRightSection();
}, false );


// remove start screen
document.addEventListener('keydown', function(event) {
  if(sm.startScreen){
    sm.removeStartScreen();
  } else {
    if(event.key === 'ArrowLeft') sm.moveLeftSection();
    if(event.key === 'ArrowRight') sm.moveRightSection();
  }
});

// reset rotation x when clicked on div textbox
document.getElementById('textBox').onclick = () => {
  sm.resetRotation();
}

// info section
const infoButton = document.getElementById('infoBtn');
const infoDiv = document.querySelector('.info');
const infoEsc = document.querySelector('.esc');

infoButton.addEventListener('click', function() {
  //infoDiv.style.display = 'block';
  if(!infoDiv.classList.contains('fly-in')) {
    infoDiv.classList.add('fly-in');
  } else {
    infoDiv.classList.remove('fly-in');
    infoDiv.classList.add('fly-out');
  }
});
infoEsc.addEventListener('click', function() {
  infoDiv.classList.remove('fly-in');
  infoDiv.classList.add('fly-out');
});

infoDiv.addEventListener('transitionend', function(event) {
  if (event.propertyName === 'transform' && infoDiv.classList.contains('fly-out')) {
    infoDiv.classList.remove('fly-out');
  }
});

// Debounce function
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function handleWheel (event) {
  //scrollY += event.deltaY;
  sm.scrollEvent(event.deltaY);
}

// debounced wheel event handler
document.addEventListener('wheel', debounce(handleWheel, 10));


// mouse, pointer events
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseup, false);
document.addEventListener('mouseleave', onMouseup,false);
document.addEventListener("mousemove", onMouseMove, false);
document.addEventListener('touchstart', onTouchDown, false);
document.addEventListener('touchend', onTouchup, false);
document.addEventListener("touchmove", onTouchMove, false);
document.addEventListener('touchcancel', onMouseup, false);


function onMouseDown(event) {
  sm.removeStartScreen();
  
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  sm.clickPlanet(mouse);
}

function onTouchDown(event) {
  sm.removeStartScreen();

  const touch = event.touches[0];
  
  startX = event.touches[0].clientX;  // for swipe 

  const mouse = new THREE.Vector2(
    (touch.clientX / window.innerWidth) * 2 - 1,
    -(touch.clientY / window.innerHeight) * 2 + 1
  );
  sm.clickPlanet(mouse);
}

function onMouseup(event) {
    sm.pressed = false;
}

function onTouchup(event) {
  // swipe
  if (!sm.pressed && Math.abs(distX) > 200) {
    if (distX > 0) {
      // Right swipe move left
      sm.moveLeftSection();
    } else {      
      // Left swipe move right
      sm.moveRightSection();
    }
  }
  startX = 0;
  distX = 0;

  sm.pressed = false;
}

let prevMouseX = 0, prevMouseY = 0;
let deltaX = 0, deltaY = 0;

function onMouseMove(event) {
  
  const currentMouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const currentMouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  deltaX = currentMouseX - prevMouseX;
  deltaY = currentMouseY - prevMouseY;
  
  // Update the rotation based on the delta
  sm.rotatePlanet(deltaX, deltaY, 2, 4)
  
  prevMouseX = currentMouseX;
  prevMouseY = currentMouseY;
}

function onTouchMove(event) {
  const touch = event.touches[0];
  const currentMouseX = (touch.clientX / window.innerWidth) * 2 - 1;
  const currentMouseY = -(touch.clientY / window.innerHeight) * 2 + 1;

  deltaX = currentMouseX - prevMouseX;
  deltaY = currentMouseY - prevMouseY;
  
  distX = touch.clientX - startX; // for swipe
  
  // some deltas are too big and it causes huge leaps in rotations
  if(Math.abs(deltaX) < 0.05 && Math.abs(deltaY) < 0.05) 
    sm.rotatePlanet(deltaX, deltaY, 1.5, 3);
  
  prevMouseX = currentMouseX;
  prevMouseY = currentMouseY;
}


//full screen
const fullScreenButton = document.getElementById('fullScreenBtn');
const fullScreenImg = document.getElementById('fsImg');
fullScreenButton.addEventListener('click', () => {
  if(!fullScreen) {
    openFullscreen();
    fullScreen = true;
    fullScreenImg.src = 'icons/min-screen.svg'
  }
  else {
    closeFullscreen();
    fullScreen = false;
    fullScreenImg.src = 'icons/full-screen.svg'
  }
})

/*                                    render                                                */

function render(time) {
  
  time *= 0.001;
  const deltaTime = time - previousTime;
  previousTime = time;
  
 
  if (resizeRendererToDisplaySize(renderer, sizes)) {
      
      const canvas = renderer.domElement;
      sm.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      sm.camera.updateProjectionMatrix();
      
      if(!portraitMode && sizes.width <= sizes.height) {
        sm.setPortraitMode();
        portraitMode = true;
      } else if(portraitMode && sizes.width > sizes.height) {
        sm.setLandscapeMode();
        portraitMode = false;
      }
  }

  sm.renderScene(deltaTime, prevMouseX, prevMouseY);

  // render call
  renderer.render(sm.scene, sm.camera);
  
  requestAnimationFrame(render);
}

requestAnimationFrame(render);