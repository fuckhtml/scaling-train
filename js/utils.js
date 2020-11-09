(function() {

  'use strict';

  window.utils = {

    debounce: (fn) => {
      let timeout;
      return (args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn(args);
        }, 1000)
      };
    }

  }

})()