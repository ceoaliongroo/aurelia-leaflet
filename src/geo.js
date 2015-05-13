import L from 'leaflet';

export class AureliaLeaflet extend L {
  constructor(geo) {
    this.model = {
      geo: geo,
      zoom: 15
    }
  }
}
