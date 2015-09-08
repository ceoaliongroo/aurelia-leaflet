import L from 'leaflet';
import {customElement, bindable} from 'aurelia-framework';

@customElement('aurelia-leaflet')
export class AureliaLeaflet {
  @bindable options;

  constructor() {
    this.l = L;
  }

  attached() {
    if (!this.options) {
      throw new Error('[aurelia-leaflet] - needs to define a geolocation as center and zoom.');
    }

    this.__createMap(this.options);
  }

  __createMap(options) {
    this.map = this.l.map('map', options);
    this.__setMapLayer();
    this.map.invalidateSize(false);
  }

  __setMapLayer() {
    // More layers http://leaflet-extras.github.io/leaflet-providers/preview/
    this.l.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }
}
