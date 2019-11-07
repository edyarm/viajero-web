import React from 'react';
import { loadModules } from 'esri-loader';
import './WebMap.css';

export default class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.view = null;
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/tasks/Locator'], { css: true })
    .then(([ArcGISMap, MapView, Locator]) => {
      const map = new ArcGISMap({
        basemap: 'streets-night-vector'
      });

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8
      });

      this.view.on("click", evt => {
        const locator = new Locator({
          url: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
        });
        const params = {
          location: evt.mapPoint 
        };
        locator.locationToAddress(params)
          .then(response => { // Show the address found
            const city = response.attributes.City;
            this.props.search(city);
          }, function(err) { // Show no address found
            console.log("No address found.", evt.mapPoint);
          });
      });
    });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.coord !== prevProps.coord) {
      this.view.goTo([this.props.coord.lon, this.props.coord.lat], {
        animate: true,
        duration: 300
      })
    }
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef} />
    );
  }
}