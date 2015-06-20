System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./aurelia-leaflet');
  }

  return {
    setters: [],
    execute: function () {}
  };
});