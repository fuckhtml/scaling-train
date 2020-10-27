(function() {

  'use strict';

  const initSetupOverlay = () => {

    const showSetup = () => {

      document.querySelector('.setup-open-icon').removeEventListener('click', setupOpenOnClick);
      document.querySelector('.setup-open-icon').removeEventListener('keydown', setupOpenOnEnterDown);
      document.querySelector('.setup-open-icon').removeEventListener('keydown', setupOpenOnSpaceDown);

      const hideSetup = () => {
        document.querySelector('.setup').style.transform = '';
        document.querySelector('.upload label').removeEventListener('mousedown', inputFileOnMouseDown)

        document.removeEventListener('keydown', documentOnEscapeDown);
        document.querySelector('.setup-close').removeEventListener('click', setupCloseOnClick);
        document.querySelector('.setup-close').removeEventListener('keydown', setupCloseOnEnterDown);
        document.querySelector('.setup-close').removeEventListener('keydown', setupCloseOnSpaceDown);

        document.querySelector('.setup-open-icon').addEventListener('click', setupOpenOnClick);
        document.querySelector('.setup-open-icon').addEventListener('keydown', setupOpenOnEnterDown);
        document.querySelector('.setup-open-icon').addEventListener('keydown', setupOpenOnSpaceDown);

        document.querySelector('.setup').classList.add('hidden');
      }

      const documentOnEscapeDown = () => {
        if (event.code === 'Escape') {
          hideSetup();
        }
      }

      const setupCloseOnClick = () => {
        hideSetup();
      }

      const setupCloseOnEnterDown = () => {
        if (event.code === 'Enter' || event.code === 'Space') {
          hideSetup();
        }
      }

      const setupCloseOnSpaceDown = () => {
        if (event.code === 'Space') {
          hideSetup();
        }
      }

      document.addEventListener('keydown', documentOnEscapeDown);
      document.querySelector('.setup-close').addEventListener('click', setupCloseOnClick);
      document.querySelector('.setup-close').addEventListener('keydown', setupCloseOnEnterDown);
      document.querySelector('.setup-close').addEventListener('keydown', setupCloseOnSpaceDown);

      const inputFileOnMouseDown = () => {
        const prevOffsetLeft = document.querySelector('.setup').offsetLeft;
        const prevOffsetTop = document.querySelector('.setup').offsetTop;
        const prevClientX = event.clientX;
        const prevClientY = event.clientY;

        let isDragged = false;

        const inputFileOnMouseUp = () => {
          document.removeEventListener('mousemove', inputFileOnMouseMove);
          document.removeEventListener('mouseup', inputFileOnMouseUp);
        }

        const inputFileOnMouseMove = () => {
          isDragged = true;

          const shiftX = event.clientX - prevClientX;
          const shiftY = event.clientY - prevClientY;

          document.querySelector('.setup').style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        }

        const inputFileOnClick = () => {
          isDragged && event.preventDefault();
          document.querySelector('.upload label').removeEventListener('click', inputFileOnClick);
        }

        document.addEventListener('mousemove', inputFileOnMouseMove);
        document.addEventListener('mouseup', inputFileOnMouseUp);
        document.querySelector('.upload label').addEventListener('click', inputFileOnClick);
      }

      document.querySelector('.upload label').addEventListener('mousedown', inputFileOnMouseDown)


      document.querySelector('.setup').classList.remove('hidden');
      event.preventDefault(); // not to send the form data at once
      document.querySelector('.upload label').focus();
    }

    const setupOpenOnClick = () => {
      showSetup();
    } 

    const setupOpenOnEnterDown = () => {
      if (event.code === 'Enter') {
        showSetup();
      }
    }

    const setupOpenOnSpaceDown = () => {
      if (event.code === 'Space') {
        showSetup();
      }
    }

    document.querySelector('.setup-open-icon').addEventListener('click', setupOpenOnClick);
    document.querySelector('.setup-open-icon').addEventListener('keydown', setupOpenOnEnterDown);
    document.querySelector('.setup-open-icon').addEventListener('keydown', setupOpenOnSpaceDown);
  }

  window.addEventListener('DOMContentLoaded', initSetupOverlay);

})()
