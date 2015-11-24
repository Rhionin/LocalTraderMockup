var Dropdown = React.createClass( {
	render: function() {
		return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Choose a city...
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li>Provo</li>
                    <li>Orem</li>
                </ul>
            </div>
		);
	}
});