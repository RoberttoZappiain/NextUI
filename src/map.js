import { GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";
import './App.css';

export default function Map() {
    const lib = ["places"];
    const id = ["4b842fe85cc4da68"]
    const key = "AIzaSyB8tWnYRIORiIk19d7clyeQGzug4SK6rio"; // PUT GMAP API KEY HERE
    const defaultLocation = { lat: 21.4955069, lng: -104.8424373};
    return (
        <LoadScript googleMapsApiKey={key} libraries={lib} mapIds={id} >
        <GoogleMap
          center={defaultLocation}
          zoom={6}
          options={{ mapId: "4b842fe85cc4da68" }}
          mapContainerStyle={{ height: "100vh", width: "100%" }}
        />
        </LoadScript>
    )
}