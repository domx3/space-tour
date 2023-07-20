

class ButtonManager {
  constructor() {
    
    this.isReturnButton = false;    // return: true - nightmode: false
    this.earthImg = document.getElementById( 'earthImg' );
    this.leftArrow = document.getElementById( 'left-arrow' );
    this.rightArrow = document.getElementById( 'right-arrow' );
  }

  getEarthState() {
    return this.isReturnButton;
  }

  setVisibility(newSec) {
    // navigation buttons
    this.leftArrow.style.visibility = (newSec == -4) ? "hidden" : 'visible';
    this.rightArrow.style.visibility = (newSec == 5) ? "hidden" : 'visible'; 

    // earth button
    if(newSec == 0) {
      this.earthImg.src = "icons/night-mode-icon.svg";
      this.earthImg.title = "Night mode";
      this.isReturnButton = false;
    } else {
      this.earthImg.src = "icons/planet-earth-icon.svg";
      this.earthImg.title = "Return to earth";
      this.isReturnButton = true;
    }
    
  }
}

export default ButtonManager;