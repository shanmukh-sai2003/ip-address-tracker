function Header(props) {
    const {searchChange, searchValue, searchSubmit, searchStatus} = props;
    return (
        <div className="header">
            <div className="title">
                <h1>IP Address Tracker</h1>
            </div>
            <div className="search-bar">
                <form method="post" action="#" className='search-form'>
                    <input 
                        className='search-box'
                        type="text" 
                        onChange={(e) => {searchChange(e)}} 
                        value={searchValue} 
                        placeholder='Search for any IP address or domain'
                    ></input>
                    <button className="submit-btn" type="submit" onClick={(e) => {searchSubmit(e)}}>
                        <img className="submit-btn-img" src={require('../../images/icon-arrow.svg')}></img>
                    </button>
                </form>
                {(!searchStatus) && <div className='error-message'>unable to get details of the above IP address or domain. Try with other IP address</div>}
            </div>
        </div>
    );
}

export default Header;
