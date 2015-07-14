define(['exports', 'leaflet'], function (exports, _leaflet) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _L = _interopRequireDefault(_leaflet);

  var AureliaLeaflet = (function () {
    function AureliaLeaflet() {
      _classCallCheck(this, AureliaLeaflet);

      this.l = _L['default'];
      this.model = {
        geo: 'this.LatLng',
        zoom: 15
      };

      this.L = _L['default'];
    }

    _createClass(AureliaLeaflet, [{
      key: 'attached',
      value: function attached() {
        __createMap({
          center: [51.505, -0.09],
          zoom: 14
        });
      }
    }, {
      key: '__createMap',
      value: function __createMap(options) {
        this.map = this.L.map('map', options);
      }
    }]);

    return AureliaLeaflet;
  })();

  exports.AureliaLeaflet = AureliaLeaflet;
});