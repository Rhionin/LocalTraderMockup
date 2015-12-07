var Home = React.createClass( {
  // see http://getbootstrap.com/css/#grid for grid
  render: function() {
	return (
	    <div className="container-fluid panel panel-default">
			<div className="row panel-body main-page-panel">
				<div className="col-md-6">
					<img className='panel-image main-panel-image' src='http://api.ning.com/files/o-zF6ce45OTZWM6T4nDU51Tm4Qm-v7WoL5KmTTnj4WePjDwUQJmbjk0tu0jr9jgoUmjnXzAyZM8wEjEHuZbwLSayZxiblJbn/Shopper.jpg' />
				</div>
  				<div className="col-md-6" style={{textAlign:'center'}}>
  					<div style={{marginTop:'150px'}}>
  						<div className="learn-more-label" style={{paddingBottom:'10px'}}>
  							Trade with locals you can trust
  						</div>
  						<a className="btn btn-default yellow-accent learn-more-btn" href="#/learnmore" role="button">Learn More</a>
  					</div>
  				</div>
				
			</div>
		</div>
	);
  }
});