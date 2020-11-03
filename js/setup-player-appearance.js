(function(){

  'use-strict';

  const initSetupPlayerAppearance = () => {

    const setPlayerAppearance = () => {

      switch (event.target.attributes.class.value) {
        case ('setup-fireball'):
          (currentFireballColorIndex < (fireballColorList.length - 1) ? currentFireballColorIndex++ : currentFireballColorIndex = 0);
          setupPlayerElement.querySelector('input[name="fireball-color"').value = fireballColorList[currentFireballColorIndex];
          event.target.parentElement.style.backgroundColor = fireballColorList[currentFireballColorIndex];
          break;

        case ('wizard-coat'): 
          (currentCoatColorIndex < (coatColorList.length - 1) ? currentCoatColorIndex++ : currentCoatColorIndex = 0);
          setupPlayerElement.querySelector('input[name="coat-color"').value = coatColorList[currentCoatColorIndex];
          event.target.style.fill = coatColorList[currentCoatColorIndex];
          break;

        case ('wizard-eyes'):
          (currentEyesColorIndex < (eyesColorList.length - 1) ? currentEyesColorIndex++ : currentEyesColorIndex = 0);
          setupPlayerElement.querySelector('input[name="eyes-color"').value = eyesColorList[currentEyesColorIndex];
          event.target.style.fill = eyesColorList[currentEyesColorIndex];
          break;

        default:
          break;
      }
    }

    const setupPlayerElementOnClick = () => setPlayerAppearance();

    const setupElement = document.querySelector('.setup');
    const setupPlayerElement = setupElement.querySelector('.setup-player');

    const fireballColorList = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848',];
    const coatColorList = ['rgb(101,137,164)','rgb(241,43,107)','rgb(146,100,107)','rgb(56,159,117)','rgb(215,210,55)','rgb(0,0,0)',];
    const eyesColorList = ['black','red','blue','yellow','green',];

    let currentFireballColorIndex = 0;
    let currentCoatColorIndex = 0;
    let currentEyesColorIndex = 0;

    setupPlayerElement.addEventListener('click', setupPlayerElementOnClick, false);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerAppearance, false);

})()