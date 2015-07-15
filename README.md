# aurelia-leaflet

This isn a plugin you can use in your [Aurelia](http://www.aurelia.io/) application. It add a [Leaflet](http://leafletjs.com/) map in your application.

## Installation

```bash
  jspm install github:ceoaliongroo/aurelia-leaflet -y
```

## Usage

Define the plugin in the [Aurelia Startup and Configuration](http://aurelia.io/docs.html#startup-and-configuration) process.

```javascript
  aurelia.use.plugin('aurelia-leaflet');
```

Load the template

```html
  <require from="aurelia-leaflet/aurelia-leaflet"></require>
  <aurelia-leaflet></aurelia-leaflet>
```

Finally you could see a map like this:
 
![example](docs/assets/map.example.png "Example Map")

## Changelog

[Click here to see changelog](doc/CHANGELOG.md)

## License

MIT - [click for details](LICENSE)
