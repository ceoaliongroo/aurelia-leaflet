import L from 'leaflet';

export class AureliaLeaflet {
  constructor() {
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

