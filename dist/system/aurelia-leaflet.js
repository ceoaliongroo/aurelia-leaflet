System.register(['leaflet'], function (_export) {
  var L, AureliaLeaflet;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_leaflet) {
      L = _leaflet['default'];
    }],
    execute: function () {
      'use strict';

      AureliaLeaflet = (function (_L) {
        function AureliaLeaflet() {
          _classCallCheck(this, AureliaLeaflet);

          _get(Object.getPrototypeOf(AureliaLeaflet.prototype), 'constructor', this).call(this);
          var model = {
            geo: 'this.LatLng',
            zoom: 15
          };
        }

        _inherits(AureliaLeaflet, _L);

        return AureliaLeaflet;
      })(L);

      _export('AureliaLeaflet', AureliaLeaflet);
    }
  };
});