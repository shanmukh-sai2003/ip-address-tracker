import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

function Body(props) { 
    const {lat, lng} =  props;
    const markerIcon = new Icon({
        iconUrl: require("../../images/icon-location.svg"),
        iconSize: [46, 56],
        iconAnchor: [23, 56]
    });
    return (
        <MapContainer center={[lat, lng]} zoom={15} >
            <ChangeMapView center={[lat, lng]}></ChangeMapView>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={markerIcon}></Marker>
        </MapContainer>
    );
}

function ChangeMapView(props) {
    const {center} = props;
    const map = useMap();
    map.setView(center, 16);
    return null;
}

export default Body;