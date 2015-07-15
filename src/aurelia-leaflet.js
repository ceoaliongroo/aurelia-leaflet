import L from 'leaflet';

export class AureliaLeaflet {
  constructor() {
    this.l = L;
    this.model = {
      geo: {
        latitude: 51.505,
        longitude: -0.09
      },
      zoom: 15
    };

    this.L = L;
  }

  attached() {
    __createMap({
      center: [51.505, -0.09],
      zoom: 14
    });
  }

  __createMap(options) {
    this.map = this.L.map('map', options);
  }

}

