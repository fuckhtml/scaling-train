(function(){

  'use strict';

  const initSetupPlayerAvatar = () => {

    const inputFileElementOnChange = () => {

      const file = inputFileElement.files[0];
      const extention = file.name.slice(file.name.lastIndexOf('.')); 
      

      if (['.jpg', '.jpeg', '.png', '.ico'].some(ext => (ext === extention))) {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', function() {
          imgElementOne.src = imgElementTwo.src = fileReader.result;
        })
        fileReader.readAsDataURL(file);        
      }
    }

    const imgElementOne = document.querySelector('.setup-open img');
    const imgElementTwo = document.querySelector('.upload img');
    const inputFileElement = document.querySelector('.upload input[type="file"]');

    const fileReader = new FileReader();

    inputFileElement.addEventListener('change', inputFileElementOnChange);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerAvatar);
  
})()