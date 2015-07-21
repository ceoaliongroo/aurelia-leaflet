# aurelia-leaflet

Plugin you can use in your [Aurelia](http://www.aurelia.io/) application. It add a [Leaflet](http://leafletjs.com/) map in your application.

## WIP - Disclosure

This plugin is Work in Progess, defining his archicture and also his implementation. It's not ready to use in `live/production` enviroments but if you want can try, test and contribute, will be great!.

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
 
![example](https://raw.githubusercontent.com/ceoaliongroo/aurelia-leaflet/master/doc/assets/map.example.png "Example Map")

## Changelog

[Click here to see changelog](doc/CHANGELOG.md)

## License

MIT - [click for details](LICENSE)
