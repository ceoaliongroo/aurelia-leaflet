'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _aureliaFramework = require('aurelia-framework');

var AureliaLeaflet = (function () {
  var _instanceInitializers = {};

  function AureliaLeaflet() {
    _classCallCheck(this, _AureliaLeaflet);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.l = _leaflet2['default'];
  }

  var _AureliaLeaflet = AureliaLeaflet;

  _createDecoratedClass(_AureliaLeaflet, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'attached',
    value: function attached() {
      this.__createMap(this.options);
    }
  }, {
    key: '__createMap',
    value: function __createMap(options) {
      this.map = this.l.map('map', options);
      this.__setMapLayer();
    }
  }, {
    key: '__setMapLayer',
    value: function __setMapLayer() {
      this.l.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    }
  }], null, _instanceInitializers);

  AureliaLeaflet = (0, _aureliaFramework.customElement)('aurelia-leaflet')(AureliaLeaflet) || AureliaLeaflet;
  return AureliaLeaflet;
})();

exports.AureliaLeaflet = AureliaLeaflet;