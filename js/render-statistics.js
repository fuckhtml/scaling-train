(function() {

  'use strict';

  const renderStatistics = (ctx, nameList, timeList) => {

    const setup = {
      "area": {
        "pos": {
          "indentLeft": 100,
          "indentTop": 10,
        },
        "size": {
          "width": 520,
          "height": 270,
        },
        "color": 'white',
        "shadowColor": 'rgba(0, 0, 0, .7)',
      },
      "histogram": {
        "pos": {
          "startX": 100 + 150, // area.indentLeft + 
          "startY": 10 + 45,   // area.indentTop + 
          "indentY": 30 + 20,  // height + actual indent
        },
        "size": {
          "maxWidth": 300,
          "height": 30,          
        },
        "color": 'black',
      },
      "name": {
        "fontSize": "18px",
        "fontFamily": "Arial",
        "pos": {
          "startX": 50 + 130,    // area.indentLeft + 
          "startY": 10 + 45 + 30,      // area.indentTop + 
          "indentY": 30 + 20,     // height + actual indent
        }
      }
    }

    ctx.canvas.style.border = '2px solid red';

    ctx.fillStyle = setup.area.shadowColor;
    ctx.fillRect(setup.area.pos.indentLeft + 10, setup.area.pos.indentTop + 10, setup.area.size.width, setup.area.size.height);
    ctx.fillStyle = setup.area.color;
    ctx.fillRect(setup.area.pos.indentLeft, setup.area.pos.indentTop, setup.area.size.width, setup.area.size.height);

    const k = setup.histogram.size.maxWidth / Math.max(...timeList);
    for (let i = 0; i < timeList.length; i++) {
      debugger;
      ctx.fillStyle = setup.histogram.color;
      ctx.fillRect(
        setup.histogram.pos.startX, 
        setup.histogram.pos.startY + (setup.histogram.pos.indentY * i), 
        timeList[i] * k, 
        setup.histogram.size.height
      );

      ctx.font = setup.name.fontSize + ' ' + setup.name.fontFamily;
      ctx.fillText(
        nameList[i], 
        setup.name.pos.startX, 
        setup.name.pos.startY + (setup.name.pos.indentY * i),
      );
    }
  }

  window.renderStatistics = renderStatistics;

})()
