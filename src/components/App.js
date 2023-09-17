import { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import DetailsCard from "./DetailsCard";
import { API_KEY, API_URL } from "../../utils/constants";

function App() {
    const [location, setLocation] = useState();
    const [searchIp, setsearchIp] = useState("");
    const [IpFound, setIpFound] = useState(true);

    useEffect(() => {
        fetchLocation();
    }, []);
    
    async function fetchLocation() {
        const promise = await fetch(API_URL + API_KEY);
        const data = await promise.json();
        setLocation(data);
    }

    function handleSearchChange(e) {
        setsearchIp(e.target.value);
    }

    async function handleSearchSubmit(e) {
        e.preventDefault();
        let type = "";
        if(searchIp[0] >= '0' && searchIp[0] <= '9') {
            type = "ipAddress";
        } else {
            type = "domain";
        }
        const response = await fetch(API_URL + API_KEY + `&${type}=` + searchIp);
        const newLocation = await response.json();
        if(newLocation.code) {
            setIpFound(false);
        } else {
            setLocation(newLocation);
            setIpFound(true);
        }
    }

    return (
        <div className="main-page">
            <Header searchChange={handleSearchChange} searchValue={searchIp} searchSubmit={handleSearchSubmit} searchStatus={IpFound}/>
            <DetailsCard loc={location}/>
            {location ? <Body lat={location?.location?.lat} lng={location?.location?.lng}></Body> : <div className="map-shimmer"></div>}  
        </div>
    );
}

export default App;