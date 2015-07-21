import {AureliaLeaflet} from '../../src/aurelia-leaflet';
import {Container} from 'aurelia-dependency-injection';
import {BehaviorInstance} from 'aurelia-templating';


describe('The aurelia-leaflet plugin', () => {
  var map;
  var options;

  beforeEach(() => {
    options = {
      center: [51.505, -0.09],
      zoom: 14
    };

    new Container().makeGlobal();
    map = BehaviorInstance.createForUnitTest(AureliaLeaflet);
  });

  it('have to be defined', () => {
    expect(map).toBeDefined(true);
  });

  it('have to a map with location', () => {
    console.log(map.__createMap(options));
    expect(map).toBeDefined(true);
  });
});

