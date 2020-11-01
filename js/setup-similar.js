(function() {

  'use strict';

  const initSetupSimilar = () => {

    const renderWizards = (wizardsData) => {
      let wizardDataList = [];
      for (const id in wizardsData) {
        wizardDataList.push(wizardsData[id]);
      }

      for (let i = 0; i < 4; i++) {
        const wizardData = wizardDataList[Math.floor(Math.random() * wizardDataList.length)];
        wizardDataList.splice(wizardDataList.indexOf(wizardData), 1);      
        const wizardElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizardData.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;

        document.querySelector('.setup-similar-list').append(wizardElement);        
      }

      document.querySelector('.setup-similar').classList.remove('hidden');
    }

    // get wizards data
    const request = new XMLHttpRequest();
    const method = 'GET';
    const url = 'get-wizards-data.php';
    const isAsync = true;
    const data = null;
    request.addEventListener('readystatechange', function() {
      if (request.readyState === 4 && request.status === 200) {
        renderWizards(JSON.parse(request.responseText));
      }
    })
    request.open(method, url, isAsync);
    request.send(data);
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