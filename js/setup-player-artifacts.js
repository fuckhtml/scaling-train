(function() {

  'use strict';

  const initSetupPlayerArtifacts = () => {
    
    const artifactsShopOnMouseDown = () => {

      if (event.target.classList.contains('artifact-item')) {

        const documentOnMouseMove = () => {
          artifactElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
          Array.from(setupArifactsCellElementList).map(cellElement => cellElement.style.border = '');
          if (event.target.parentElement.className === 'setup-artifacts' && event.target.className === 'setup-artifacts-cell') {
            event.target.style.border = '5px solid white';
          }
        }

        const documentOnMouseUp = () => {
          document.body.style = '';
          if (event.target.parentElement.className === 'setup-artifacts' && event.target.className === 'setup-artifacts-cell') {
            Array.from(setupArifactsCellElementList).map(cellElement => cellElement.style.border = '');
            artifactElement.classList.remove('artifact-item');
            artifactElement.classList.remove('artifact-item-on-drag');
            artifactElement.style = '';
            event.target.appendChild(artifactElement);
          } else {
            document.body.removeChild(artifactElement);
          }
          document.removeEventListener('mousemove', documentOnMouseMove);
          document.removeEventListener('mouseup', documentOnMouseUp);
        }

        let artifactElement = event.target.cloneNode(false);
        artifactElement.classList.add('artifact-item-on-drag');
        artifactElement.style.transform = `translate(${event.clientX}px, ${event.clientY})`;

        document.body.style = 'position: relative; cursor: grabbing';
        document.body.appendChild(artifactElement);

        document.addEventListener('mousemove', documentOnMouseMove, false)
        document.addEventListener('mouseup', documentOnMouseUp, false)
      }
    }

    const setupElement = document.querySelector('.setup');
    const setupArtifactsShopElement = setupElement.querySelector('.setup-artifacts-shop');
    const setupArifactsCellElementList = setupElement.querySelectorAll('.setup-artifacts-cell');
    setupArtifactsShopElement.addEventListener('mousedown', artifactsShopOnMouseDown, false);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerArtifacts, false);

})()
