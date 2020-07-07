import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {

  static defaultProps = {
    center: {
      lat: 39.95,
      lng: -50.33
    },
    zoom: 1
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCwcdcKa2ITSeRfkXIJDXlJdLOfTUzeslk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;