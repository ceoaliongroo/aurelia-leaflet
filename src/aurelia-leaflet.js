import L from 'leaflet';

export class AureliaLeaflet {

  constructor() {
    this.l = L;
    this.model = {
      geo: 'this.LatLng',
      zoom: 15
    };
  }
}
