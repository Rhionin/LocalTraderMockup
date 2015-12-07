var SearchBar = React.createClass({
    render: function() {
        return (
            <form className="navbar-form navbar-left" action="#/products">
			    <div className="form-group">
				    <input type="text" className="form-control" placeholder="Search"/>
				    <button type="submit" className="btn btn-default btn-search">Submit</button>
			    </div>
		    </form>
        );
    }
});