import ShimmerDetail from "./ShimmerDetail";


function DetailsCard(props) {
    return (
        <div className="details-c">
            <div className="details-card">
                <div className="ip-address detail">
                    <p>IP ADDRESS</p> 
                    <h2>{props.loc ? props.loc?.ip : <ShimmerDetail/>}</h2>
                </div>
                <span className="vertical-line"></span>
                <div className="location detail">
                    <p>LOCATION</p> 
                    <h2>{props.loc ? `${props.loc?.location?.city}, ${props.loc?.location?.country}, ${props.loc?.location?.geonameId}` : <ShimmerDetail/>}</h2>
                </div>
                <span className="vertical-line"></span>
                <div className="timezone detail">
                    <p>TIMEZONE</p> 
                    <h2>{props.loc ? "UTC " + props.loc?.location?.timezone : <ShimmerDetail/>}</h2>
                </div>
                <span className="vertical-line"></span>
                <div className="isp detail">
                    <p>ISP</p> 
                    <h2>{props.loc ? props.loc?.isp : <ShimmerDetail/>}</h2>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;