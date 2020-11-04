(function() {
  
  'use strict';

  const initSetupPlayerValidation = () => {  

    const sendFormData = () => {
      event.preventDefault();
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

    const setErrorMessage = () => {
      switch(true) {
        case (event.target.validity.valueMissing):
          event.target.setCustomValidity('Укажите имя и фамилию вашего персонажа');
          break;
        case (event.target.validity.tooShort):
          event.target.setCustomValidity('Слишком коротие имя с фамилией');
          break;
        case (event.target.validity.tooLong):
          event.target.setCustomValidity('Слишком коротие имя с фамилией');
          break;
        case (event.target.validity.patternMismatch):
          event.target.setCustomValidity('Укажите имя и фамилию вашего персонажа в формате "Имя Фамилия" на русском языке');
          break;
        default:
          break;
      }
    }

    const cleanErrorMessage = () => {
      event.target.setCustomValidity('');
    }

    const formOnSubmit = () => sendFormData();
    const inputOnInvalid = () => setErrorMessage();
    const inputOnInput = () => cleanErrorMessage();

    const setupWizardFormElement = document.querySelector('.setup-wizard-form');
    const inputUsernameElement = document.querySelector('.setup-wizard-form  input[name="username"]');
    
    setupWizardFormElement.addEventListener('submit', formOnSubmit, true);
    inputUsernameElement.addEventListener('invalid', inputOnInvalid, true);
    inputUsernameElement.addEventListener('input', inputOnInput, true);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerValidation, false);

})()