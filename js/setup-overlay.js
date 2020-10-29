(function() {

  'use strict';

  const initSetupOverlay = () => {

    const setupOpenIconElement = document.querySelector('.setup-open-icon');

    const setupElement = document.querySelector('.setup');
    const setupCloseElement = setupElement.querySelector('.setup-close'); 
    const uploadElement = setupElement.querySelector('.upload label');

    const showSetup = () => {

      setupOpenIconElement.removeEventListener('click', setupOpenOnClick);
      setupOpenIconElement.removeEventListener('keydown', setupOpenOnEnterDown);
      setupOpenIconElement.removeEventListener('keydown', setupOpenOnSpaceDown);

      const hideSetup = () => {
        setupElement.style.transform = '';
        uploadElement.removeEventListener('mousedown', uploadElementOnMouseDown)

        document.removeEventListener('keydown', documentOnEscapeDown);
        setupCloseElement.removeEventListener('click', setupCloseOnClick);
        setupCloseElement.removeEventListener('keydown', setupCloseOnEnterDown);
        setupCloseElement.removeEventListener('keydown', setupCloseOnSpaceDown);

        setupOpenIconElement.addEventListener('click', setupOpenOnClick);
        setupOpenIconElement.addEventListener('keydown', setupOpenOnEnterDown);
        setupOpenIconElement.addEventListener('keydown', setupOpenOnSpaceDown);

        setupElement.classList.add('hidden');
      }

      const documentOnEscapeDown = () => {
        if (event.code === 'Escape') {
          hideSetup();
        }
      }
      document.addEventListener('keydown', documentOnEscapeDown);

      const setupCloseOnClick = () => {
        hideSetup();
      }
      setupCloseElement.addEventListener('click', setupCloseOnClick);

      const setupCloseOnEnterDown = () => {
        if (event.code === 'Enter' || event.code === 'Space') {
          hideSetup();
        }
      }
      setupCloseElement.addEventListener('keydown', setupCloseOnEnterDown);

      const setupCloseOnSpaceDown = () => {
        if (event.code === 'Space') {
          hideSetup();
        }
      }
      setupCloseElement.addEventListener('keydown', setupCloseOnSpaceDown);

      const uploadElementOnMouseDown = () => {
        const prevClientX = event.clientX;
        const prevClientY = event.clientY;
        const prevTranslateX = parseInt(setupElement.style.transform.match(/\d+/g)[0]);
        const prevTranslateY = parseInt(setupElement.style.transform.match(/\d+/g)[1]);

        let isDragged = false;

        const uploadElementOnMouseMove = () => {
          isDragged = true;

          const shiftX = event.clientX - prevClientX;
          const shiftY = event.clientY - prevClientY;

          setupElement.style.transform = `translate(` + 
            `${prevTranslateX + shiftX}px,` + 
            `${prevTranslateY + shiftY}px)`;
        }
        document.addEventListener('mousemove', uploadElementOnMouseMove);

        const uploadElementOnMouseUp = () => {
          document.removeEventListener('mousemove', uploadElementOnMouseMove);
          document.removeEventListener('mouseup', uploadElementOnMouseUp);
        }        
        document.addEventListener('mouseup', uploadElementOnMouseUp);

        const uploadElementOnClick = () => {
          isDragged && event.preventDefault();
          uploadElement.removeEventListener('click', uploadElementOnClick);
        }
        uploadElement.addEventListener('click', uploadElementOnClick);
      }

      setupElement.style.transform = 'translate(0px, 0px)';
      uploadElement.addEventListener('mousedown', uploadElementOnMouseDown)

      setupElement.classList.remove('hidden');
      event.preventDefault(); // not to send the form data at once
      uploadElement.focus();

    }

    const setupOpenOnClick = () => {
      showSetup();
    } 
    setupOpenIconElement.addEventListener('click', setupOpenOnClick);

    const setupOpenOnEnterDown = () => {
      if (event.code === 'Enter') {
        showSetup();
      }
    }
    setupOpenIconElement.addEventListener('keydown', setupOpenOnEnterDown);

    const setupOpenOnSpaceDown = () => {
      if (event.code === 'Space') {
        showSetup();
      }
    }
    setupOpenIconElement.addEventListener('keydown', setupOpenOnSpaceDown);

  }
  document.addEventListener('DOMContentLoaded', initSetupOverlay);

})()