(function() {
  
  'use strict';

  const initSetupPlayerValidation = () => {  

    const setErrorMessage = () => {
      // if (event.target.validity.patternMismatch) {
      //   event.target.setCustomValidity('Укажите имя и фамилию вашего персонажа в формате "Имя Фамилия"');
      // } else if (event.target.validity.tooShort) {
      //   event.target.setCustomValidity('Слишком коротие имя с фамилией');
      // } else if (event.target.validity.tooLong) {
      //   event.target.setCustomValidity('Слишком длинные имя с фамилией');
      // } else if (event.target.validity.valueMissing) {
      //   event.target.setCustomValidity('Укажите имя и фамилию вашего персонажа');
      // }
    }

    const formOnInvalid = () => {
      setErrorMessage();
    }

    const isEverythingInFormValid = () => {
      Array.from(setupWizardFormElement.querySelectorAll('input')).forEach(function(inputElement) {
        if (!inputElement.validity.valid) return false;
      });
      return true;
    }

    const sendFormData = () => {
      const request = new XMLHttpRequest();
      const isAsync = false;
      const contentType = 'application/x-www-form-urlencoded';
      const url = 'post-wizards-data.php';
      const body = `` + 
        `username=${setupWizardFormElement.querySelector('input[name="username"]').value}&` + 
        `coat-color=${setupWizardFormElement.querySelector('input[name="coat-color"]').value}&` + 
        `eyes-color=${setupWizardFormElement.querySelector('input[name="eyes-color"]').value}&` + 
        `fireball-color=${setupWizardFormElement.querySelector('input[name="fireball-color"]').value}`;
      request.open('POST', url, isAsync);
      request.setRequestHeader('Content-Type', contentType);
      request.send(body);
      console.log(request.response);
    }

    const formOnSubmit = () => { event.preventDefault(); console.log(1);(isEverythingInFormValid() && sendFormData() || setErrorMessage()) }
  
    const setupElement = document.querySelector('.setup');
    const setupWizardFormElement = setupElement.querySelector('.setup-wizard-form');

    setupWizardFormElement.addEventListener('submit', formOnSubmit, true);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerValidation, false);

})()