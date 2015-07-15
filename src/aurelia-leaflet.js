import L from 'leaflet';

export class AureliaLeaflet {
  constructor() {
    this.l = L;
    this.model = {
      geo: {
        latitude: 51.505,
        longitude: -0.09
      },
      zoom: 16
    };
  }

  attached() {
    this.__createMap({
      center: [51.505, -0.09],
      zoom: 16
    });
  }

  __createMap(options) {
    this.map = this.l.map('map', options);
    this.__setMapLayer();
  }

  __setMapLayer() {
    // More layers http://leaflet-extras.github.io/leaflet-providers/preview/
    this.l.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }
}

