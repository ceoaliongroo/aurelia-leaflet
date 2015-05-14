import L from 'leaflet';

export class AureliaLeaflet extends L {

  constructor() {
    super();
    var model = {
      geo: 'this.LatLng',
      zoom: 15
    };
  }
}
