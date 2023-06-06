import * as THREE from 'three';
import { gsap } from 'gsap';
import loadScene from './SceneLoader.js';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
console.log(sizes)


class SceneManager {
 
  constructor(tb, bm) {
    
    this.textBox = tb;
    this.buttonManger = bm;
    this.planets = [];      
    this.objectsDistance = 20;    // how much is the difference in planets x position
    this.toSectionSteps = 10;     // number of scrolls to get to the next object
    this.scrollCount = 0;         // how man scrolls in current section
    this.toSectionSteps = 10;     
    this.nextSection = false;
    this.section = 0;             // current section
    this.startScreen = true;
    this.nightMode = false;
    this.noScroll = false;
    this.loading = false;
    
    this.pressed = false;
    this.pressedPlanet = undefined;

    // planets
    this.planetNames = [
      'Sun', 'Mercury', 'Venus', 'Moon', 'Earth', 
      'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'
    ];
    this.earthDayTex = undefined;
    this.earthNightTex = undefined;
    
    this.initScene();
  }

  initScene() {

    // scene
    this.scene = new THREE.Scene();

    // camera
    this.cameraGroup = new THREE.Group()
    this.scene.add(this.cameraGroup)

    // raycaster
    this.raycaster = new THREE.Raycaster();

    this.camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);
    this.camera.position.z = 5;
    this.cameraGroup.add(this.camera);

    loadScene(this)
  }

  renderScene(deltaTime, x, y)  {
    
    // rotate planets
    if(this.planets.length > 0 && !this.pressed) {
      this.planets.forEach((planet) => {
        planet.rotation.y += 0.0015;
      })
    }

    // hide textbox when scrolled
    this.textBox.element.style.opacity = this.textBox.opacity.value;
    
    // parallax effect
    if(!this.pressed && document.hasFocus()) {
      const amplitude = 0.1;
      const parallaxX = x * amplitude;
      const parallaxY = y * amplitude;
      this.cameraGroup.position.x += (parallaxX - this.cameraGroup.position.x) * 0.5 * deltaTime;
      this.cameraGroup.position.y += (parallaxY - this.cameraGroup.position.y) * 0.5 * deltaTime;
    }

  }

  goToSection(newSec) {

    this.buttonManger.setVisibility(newSec);
    this.section = newSec;
    this.nextSection = true;
    this.scrollCount = 0;
    this.noScroll = true;
    this.textBox.setTextBox(newSec, this.planetNames);
    this.planets[newSec+4].rotation.x = 0;

    gsap.to(this.camera.position, {
      x: (this.section * this.objectsDistance),
      duration: 1.2,
      ease: "circ.out",
      //ease: 'slow(0.1, 0.1, false)', // Easing function
      onComplete: ()=>{
        this.nextSection = false;
        this.noScroll = false;
        this.textBox.opacity.value = (this.startScreen) ? 0 : 1;
      }
    });
  }

  moveLeftSection() {
    if(this.section > -4) {
      gsap.to(this.textBox.opacity, {value: 0, duration: 0.5, ease: "power2.out", onComplete:(()=>{
        this.goToSection(this.section - 1);
      })})
    }  
  }

  moveRightSection() {
    if(this.section < 5) {
      gsap.to(this.textBox.opacity, {value: 0, duration: 0.5, ease: "power2.out", onComplete:(()=>{
        this.goToSection(this.section + 1);
      })})
    }
  }

  returnToEarth() {
    gsap.to(this.textBox.opacity, {value: 0, duration: 0.5, ease: "power2.out", onComplete:(()=>{
      this.goToSection(0);
    })})
  }

  rotatePlanet(deltaX, deltaY) {
    if(this.pressed) {
      this.pressedPlanet.rotation.x += deltaY * 2;
      this.pressedPlanet.rotation.y += deltaX * 4;
    }
  }

  clickPlanet(mouse) {
    this.raycaster.setFromCamera(mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if(intersects.length > 0) {
      //console.log(intersects[0].object)
      if (intersects[0].object.type === 'Mesh') {
        this.pressed = true;
        this.pressedPlanet = intersects[0].object;
      } 
    }
  }

  setNightMode() {
    this.nightMode = (this.nightMode) ? false : true;
    if(this.nightMode){
      this.planets[4].material.map = this.earthNightTex;
    }else{
      this.planets[4].material.map = this.earthDayTex;
    }  
  }
  
  scrollEvent(deltaY) {
    
    if(this.noScroll || this.startScreen) {
      return;
    }
    
    let scrollDirection = (deltaY > 0) ? 1 : -1;

    if(!this.nextSection) {  // disable during transition to new section
      //scrollY += scrollDirection;
      if(this.section > -4 && this.section < 5) {
        this.scrollCount += scrollDirection;
      }else if(this.section == -4 && (scrollDirection < 0 || this.scrollCount < this.toSectionSteps - 2 )) {  // limit to the left
        this.scrollCount += scrollDirection;
      }else if(this.section == 5 && (scrollDirection > 0 || this.scrollCount > -this.toSectionSteps +2)) {   // limit to the right
        this.scrollCount += scrollDirection;
      }
      
    }
    // hide textbox after 3 steps
    if(this.scrollCount <= 3 && this.scrollCount >= -3) {

      // texbox opacity
      const opc = (this.scrollCount==0) ? 1 : (this.scrollCount %2==0) ? 0.6 : (this.scrollCount%3==0) ? 0 : 0.85;
      gsap.to(this.textBox.opacity, {value: opc, duration: 0.5, ease: "power2.out",})
      
    }

    // move to new section after a few scrolls
    if( (this.scrollCount >= this.toSectionSteps || this.scrollCount <= -this.toSectionSteps)) {
    
      // change section 
      const newSection = (this.scrollCount > 0) ? this.section-1 : this.section + 1;
      this.goToSection(newSection);      
    
    } else {

      // small move camera
      gsap.to(this.camera.position, {
        x: (this.section * this.objectsDistance - this.objectsDistance * this.scrollCount / 8 / this.toSectionSteps),
        duration: 1,
        ease: 'slow(0.1, 0.1, false)', // Easing function
      });
    }
  
    
  }

  removeStartScreen() {
    if(this.startScreen && !this.loading) {
      document.querySelector('.startScreen').remove();
      this.startScreen = false;
      this.goToSection(0);
      gsap.from(this.planets[4].scale, {z: 0.5, x: 0.5, y: 0.5, duration: 1.75, ease: "power2.out",})
  }
  
}

  resetRotation() {
    gsap.to(this.planets[this.section+4].rotation, {x: 0, duration: 2, ease: "power1.out"})
  }

}


export default SceneManager;