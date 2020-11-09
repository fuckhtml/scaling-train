(function() {

  'use strict';

  const initSetupSimilar = () => {

    const orderSimilarWizards = () => {
      let wizardDataList = window.wizardDataList;

      const eyesColor = document.querySelector('.setup-player input[name="eyes-color"]').value;
      const coatColor = document.querySelector('.setup-player input[name="coat-color"]').value;
      const fireballColor = document.querySelector('.setup-player input[name="fireball-color"]').value;

      for (let i = 0; i < window.wizardDataList.length; i++) {
        wizardDataList[i].similarityIndex = 0;
        if (wizardDataList[i].colorEyes === eyesColor) {
          wizardDataList[i].similarityIndex += 2;
        }
        if (wizardDataList[i].colorCoat === coatColor) {
          wizardDataList[i].similarityIndex += 3;
        }
        if (wizardDataList[i].colorFireball  === fireballColor) {
          wizardDataList[i].similarityIndex += 0;
        }
      }

      for (let i = 1; i < wizardDataList.length; i++) {
        for (let j = i; j > 0 && wizardDataList[j].similarityIndex > wizardDataList[j-1].similarityIndex; j--) {
          const buff = wizardDataList[j];
          wizardDataList[j] = wizardDataList[j-1];
          wizardDataList[j-1] = buff;
        }
      }

      window.wizardDataList = wizardDataList;
    }

    const renderSimilarWizards = () => {
      document.querySelector('.setup-similar-list').innerHTML = '';

      for (let i = 0; i < 4; i++) {
        const wizardElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);
        const wizardData = window.wizardDataList[i];

        wizardElement.querySelector('.setup-similar-label').textContent = wizardData.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;

        document.querySelector('.setup-similar-list').append(wizardElement);        
      }

      document.querySelector('.setup-similar').classList.remove('hidden');
    }

    const formatWizardsData = (wizardsData) => {
      // object of objects into list of objects
      let similarWizardsList = [];
      for (const prop in wizardsData) {
        similarWizardsList.push(wizardsData[prop]);
      }
      return similarWizardsList;  
    }

    window.showSimilarWizards = () => {
      orderSimilarWizards();
      renderSimilarWizards();
    }

    const getWizardsData = () => {
      const request = new XMLHttpRequest();
      const method = 'GET';
      const url = 'get-wizards-data.php';
      const isAsync = true;
      const data = null;
      const timeout = 10 * 1000;
      request.addEventListener('load', function() {
        window.wizardDataList = formatWizardsData(JSON.parse(request.responseText));
        showSimilarWizards();
      })
      request.addEventListener('timeout', function() {
        console.log('Response expectation is running out of the time limit');
      })
      request.addEventListener('error', function() {
        console.log(request.statusText);
      })
      request.timeout = timeout;
      request.open(method, url, isAsync);
      request.send(data);      
    }

    getWizardsData();
  }

  document.addEventListener('DOMContentLoaded', initSetupSimilar);

})()

// jsonp

// function x(data) {
//   debugger
//   console.log(data);
// }

// var script = document.createElement('script');
// script.src='https://javascript.pages.academy/code-and-magick/data?callback=x';
// document.head.appendChild(script);