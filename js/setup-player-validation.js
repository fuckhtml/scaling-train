(function() {
  
  'use strict';

  const initSetupPlayerValidation = () => {  

    const setErrorMessage = () => {
      if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity('Укажите имя и фамилию вашего персонажа в формате "Имя Фамилия"');
      } else if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Слишком коротие имя с фамилией');
      } else if (event.target.validity.tooLong) {
        event.target.setCustomValidity('Слишком длинные имя с фамилией');
      } else if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Укажите имя и фамилию вашего персонажа');
      }
    }

    const formOnInvalid = () => {
      setErrorMessage();
    }
  
    const setupElement = document.querySelector('.setup');
    const setupWizardFormElement = setupElement.querySelector('.setup-wizard-form');

    setupWizardFormElement.addEventListener('invalid', formOnInvalid, true);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerValidation, false);

})()