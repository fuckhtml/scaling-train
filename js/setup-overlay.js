(function() {

  'use strict';

  const initSetupOverlay = () => {

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

        setupOpenIconElement.addEventListener('click', setupOpenOnClick, false);
        setupOpenIconElement.addEventListener('keydown', setupOpenOnEnterDown, false);
        setupOpenIconElement.addEventListener('keydown', setupOpenOnSpaceDown, false);

        setupElement.classList.add('hidden');
      }

      const documentOnEscapeDown = () => (event.code === 'Escape' && hideSetup()) 

      const setupCloseOnClick = () => hideSetup()
      const setupCloseOnEnterDown = () => ((event.code === 'Enter' || event.code === 'Space') && hideSetup()) 
      const setupCloseOnSpaceDown = () => (event.code === 'Space' && hideSetup())

      document.addEventListener('keydown', documentOnEscapeDown, false);
      setupCloseElement.addEventListener('click', setupCloseOnClick, false);
      setupCloseElement.addEventListener('keydown', setupCloseOnEnterDown, false);
      setupCloseElement.addEventListener('keydown', setupCloseOnSpaceDown, false);

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
        document.addEventListener('mousemove', uploadElementOnMouseMove, false);

        const uploadElementOnMouseUp = () => {
          document.removeEventListener('mousemove', uploadElementOnMouseMove);
          document.removeEventListener('mouseup', uploadElementOnMouseUp);
        }        
        document.addEventListener('mouseup', uploadElementOnMouseUp, false);

        const uploadElementOnClick = () => {
          (isDragged && event.preventDefault());
          uploadElement.removeEventListener('click', uploadElementOnClick);
        }
        uploadElement.addEventListener('click', uploadElementOnClick, false);
      }

      setupElement.style.transform = 'translate(0px, 0px)';
      uploadElement.addEventListener('mousedown', uploadElementOnMouseDown, false)

      setupElement.classList.remove('hidden');
      event.preventDefault(); // not to send the form data at once
      uploadElement.focus();
    }

    const setupOpenOnClick = () => showSetup();
    const setupOpenOnEnterDown = () => (event.code === 'Enter' && showSetup())
    const setupOpenOnSpaceDown = () => (event.code === 'Space' && showSetup())

    const setupOpenIconElement = document.querySelector('.setup-open-icon');
    const setupElement = document.querySelector('.setup');
    const setupCloseElement = setupElement.querySelector('.setup-close'); 
    const uploadElement = setupElement.querySelector('.upload label');

    setupOpenIconElement.addEventListener('click', setupOpenOnClick, false);
    setupOpenIconElement.addEventListener('keydown', setupOpenOnEnterDown, false);
    setupOpenIconElement.addEventListener('keydown', setupOpenOnSpaceDown, false);
  }

  document.addEventListener('DOMContentLoaded', initSetupOverlay, false);

})()