import AureliaLeaflet from '../../src/aurelia-leaflet';

describe('aurelia-leaflet', () => {
  var map;
  var options;

  beforeEach(() => {
    map = new AureliaLeaflet;
    options = {
      center: [51.505, -0.09],
      zoom: 14
    }
  });

  it('have to be defined', () => {
<<<<<<< HEAD
    expect(AureliaLeaflet).toBeDefined();
  });
}
=======
    expect(map).toBeDefined(true);
  });

  it('have to a map with location', () => {
    console.log(map.__createMap(options));
    expect(map).toBeDefined(true);
  });
});
>>>>>>> origin/1
