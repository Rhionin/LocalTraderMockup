var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var Location = React.createClass( {
	getInitialState: function() {
		
		var cities = [
			{ name: 'Provo', loc: {lat: 40.244043, lng: -111.658906} },
			{ name: 'Orem', loc: {lat: 40.297809, lng: -111.694820} },
			{ name: 'Layton', loc: {lat: 41.060262, lng: -111.971021} }
		];
		
		return {
			cities: cities,
			productCategories: productCategories,
			selectedCity: 'None',
			selectedCategoryFilter: 'None'
		};
	},
	componentDidMount: function() {
		var that = this;
		
		var defaultCity = this.state.cities[0];
		
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
		
		this.setState({ map: map }, function() {
			var CreatePopup = React.createFactory(MapPopup);
			var productMarkers = products.map(function(product) {
				var marker = new google.maps.Marker({
					position: product.seller.location,
					map: map
				});
				
				that.citySelected(null, defaultCity);
				
				var infowindow = new google.maps.InfoWindow({
					content: '<div id="map-popup" class="map-popup"></div>'
				});
				
				marker.addListener('mouseover', function() {
					infowindow.open(map, marker);
					
					var popup = CreatePopup(product);
					ReactDOM.render(popup, document.getElementById('map-popup'));
				});
				
				marker.addListener('mouseout', function() {
					infowindow.close(map, marker);
				});
				
				return {
					product: product,
					marker: marker
				};
			});
			
			this.setState({ productMarkers: productMarkers }, function() {
				this.filterByCategory(null, null);
			});
		});
	},
	filterByCategory: function(event, category) {
		var that = this;
		
		this.setState({ selectedCategoryFilter: category || 'Select a category' });
		
		this.state.productMarkers.forEach(function(marker) {
			var markerMap;
			if (!category || marker.product.category === category) {
				markerMap = that.state.map;
			} else {
				markerMap = null;
			}
			
			marker.marker.setMap(markerMap);
		});	
	},
	citySelected: function(event, city) {
		this.setState({selectedCity: city.name});
		this.state.map.panTo(city.loc);
	},
	render: function() {
		var that = this;
		var cityMenuItems = this.state.cities.map(function(city) {
			return <MenuItem onSelect={that.citySelected} key={city.name} eventKey={city}>{city.name}</MenuItem>;
		});
		var categoryFilterItems = this.state.productCategories.map(function(pc) {
			return <MenuItem onSelect={that.filterByCategory} key={pc} eventKey={pc}>{pc}</MenuItem>;
		});
		categoryFilterItems.unshift(<MenuItem onSelect={that.filterByCategory} key='NoFilter' eventKey={null}>No Filter</MenuItem>, <MenuItem key='divider' divider/>);
		
		return (
			<div className='panel panel-default'>
				<div className='panel-body'>
					<div className="col-md-4">
						<label>Filter by Category:</label><br/>
						<DropdownButton bsStyle='primary' title={this.state.selectedCategoryFilter} id="bg-nested-dropdown" className="btn-login">
							{categoryFilterItems}
						</DropdownButton><br/><br/>
						
						<label>View City:</label><br/>
						<DropdownButton bsStyle='primary' title={this.state.selectedCity} id="bg-nested-dropdown" className="btn-login">
							{cityMenuItems}
						</DropdownButton><br/>
					</div>
					<div id='map' className="col-md-8"></div>
				</div>
			</div>
		);
	}
});