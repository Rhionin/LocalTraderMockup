var Location = React.createClass( {
	componentDidMount: function() {
		var mapCanvas = document.getElementById('map');
		var provo = {lat: 40.244043, lng: -111.658906};
		var mapOptions = {
			center: provo,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		var map = new google.maps.Map(mapCanvas, mapOptions);
		
		products.forEach(function(product) {
			console.log(product);
			
			var marker = new google.maps.Marker({
				position: product.seller.location,
				map: map
			});
			
			var infowindow = new google.maps.InfoWindow({
				content: 
					'<div id="map-popup" class="map-popup"></div>'
			});
			
			marker.addListener('mouseover', function() {
				infowindow.open(map, marker);
				
				// var child1 = React.createElement('div', null, 'First Text Content');
				var CreatePopup = React.createFactory(MapPopup);
				var popup = CreatePopup(product);
				ReactDOM.render(popup, document.getElementById('map-popup'));
			});
			
			marker.addListener('mouseout', function() {
				infowindow.close(map, marker);
			});
		});
	},
	render: function() {
		return (
			<div>
				<div className="col-md-4">
					<Dropdown />
				</div>
				<div id='map' className="col-md-6"></div>
			</div>
		);
	}
});