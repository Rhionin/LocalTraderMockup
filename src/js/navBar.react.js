var NavBar = React.createClass( {
	getInitialState: function () {
        return {logged_in: false};
    },
    handleClick: function () {
    	this.setState({logged_in: true});
    },
	render: function() {
	 	var user_info;
        if (this.state.logged_in) {
            user_info = <UserInfo />
        } else {
        	user_info = <button className="btn btn-login" onClick={this.handleClick}>Login</button>
        }
		return (
/* jshint ignore:start */
			<div>
				<nav className="navbar navbar-default main-header">
					<div className="content-container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">SuaveAccident</a>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<SearchBar />
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#/category">Category</a></li>
								<li><a href="#/location">Location</a></li>
								<li><a href="#/sellers">Sellers</a></li>
								<li>{user_info}</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
/* jshint ignore:stop */
		);
	}
});