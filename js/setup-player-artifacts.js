(function() {

  'use strict';

  const initSetupPlayerArtifacts = () => {
    
    const artifactsShopOnMouseDown = () => {

      if (event.target.classList.contains('artifact-item')) {

        const documentOnMouseMove = () => {
          artifactElement.style.transform = `translate(${event.clientX + 32}px, ${event.clientY + 30}px)`;
          Array.from(setupArifactsCellElementList).map(cellElement => cellElement.style.border = '');
          // calculations activate on mouse in
          if (
            event.clientX >= setupArtifactsElement.getBoundingClientRect().x &&
            event.clientX <= setupArtifactsElement.getBoundingClientRect().x + setupArtifactsElement.getBoundingClientRect().width &&
            event.clientY >= setupArtifactsElement.getBoundingClientRect().y &&
            event.clientY <= setupArtifactsElement.getBoundingClientRect().y + setupArtifactsElement.getBoundingClientRect().height
          ) {
            mouseInsideSetupArtifactCellIndex = 
              Math.floor((event.clientY - setupArtifactsElement.getBoundingClientRect().y) /
              setupArifactsCellElementList[0].getBoundingClientRect().width) * 4 +
              Math.floor((event.clientX - setupArtifactsElement.getBoundingClientRect().x) /
              setupArifactsCellElementList[0].getBoundingClientRect().width);
          } else {
            mouseInsideSetupArtifactCellIndex = null;
          }

          if (mouseInsideSetupArtifactCellIndex !== null) {
            setupArifactsCellElementList[mouseInsideSetupArtifactCellIndex].style.border = '5px solid white';
          }
        }

        const documentOnMouseUp = () => {
          if (mouseInsideSetupArtifactCellIndex !== null) {
            setupArifactsCellElementList[mouseInsideSetupArtifactCellIndex].innerHTML = '';
            setupArifactsCellElementList[mouseInsideSetupArtifactCellIndex].appendChild(artifactElement);              
            artifactElement.classList.remove('artifact-item-on-drag');
            artifactElement.style = '';
          } else {
            document.body.removeChild(artifactElement);
          }
          document.body.style = '';

          Array.from(setupArifactsCellElementList).map(cellElement => cellElement.style.border = '');

          document.removeEventListener('mousemove', documentOnMouseMove);
          document.removeEventListener('mouseup', documentOnMouseUp);
        }

        let artifactElement = event.target.cloneNode(false);
        artifactElement.classList.add('artifact-item-on-drag');
        artifactElement.style.transform = `translate(${event.clientX + 32}px, ${event.clientY + 30}px)`;

        document.body.style = 'position: relative;';
        document.body.appendChild(artifactElement);

        let isMouseInsideSetupArtifactsElement = false;
        let mouseInsideSetupArtifactCellIndex = null;

        document.addEventListener('mousemove', documentOnMouseMove, false)
        document.addEventListener('mouseup', documentOnMouseUp, false)
      }
    }

    const setupElement = document.querySelector('.setup');
    const setupArtifactsShopElement = setupElement.querySelector('.setup-artifacts-shop');
    const setupArtifactsElement = setupElement.querySelector('.setup-artifacts');
    const setupArifactsCellElementList = setupArtifactsElement.querySelectorAll('.setup-artifacts-cell');
    setupArtifactsShopElement.addEventListener('mousedown', artifactsShopOnMouseDown, false);
  }

  document.addEventListener('DOMContentLoaded', initSetupPlayerArtifacts, false);

})()
