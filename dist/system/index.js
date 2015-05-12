System.register([], function (_export) {
  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./aurelia-leaflet');
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});