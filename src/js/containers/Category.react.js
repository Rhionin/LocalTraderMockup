var Cat = React.createClass({
	render: function() {
		return (
			<div>
				<a href="#/products" >{this.props.name}</a><br />
			</div>
		);
	}
})


var AvgRating = React.createClass({
	render: function() {
		return(
			<div>
				<p style={{textAlign:"center"}}>average ratings</p>
				<UserInfo />
			</div> 
		);
	}
})


var MainCat = React.createClass({
	getInitialState: function() {
        return { showRating: false };
    },
	handleClick: function() {
		this.setState({ 
			showRating: !this.state.showRating
		});
	},
	render: function() {
		return (<div>
				<a onClick={this.handleClick}>{this.props.name}</a> <br />
				{ this.state.showRating ? <AvgRating /> : null }
			</div>
		)
	}
})

// var Rating = React.createClass({
// 	render: function() {
// 		<Us
// 	}
// });


var Category = React.createClass( {
	render: function() {
		var categories = [
			{
				name: "Electronics",
				sub_categories: [
					"Televisions",
					"Cell Phones",
					"Video Games",
					"Computers"
				]
			},
			{
				name: "Housing",
				sub_categories: [
					"For Rent",
					"For Sale",
					"Sublets"
				]
			},
			{
				name: "Jobs",
				sub_categories: [
					"Part Time",
					"Full Time",
					"Seasonal",
					"Temporary"
				]
			},
			{
				name: "Auto",
				sub_categories: [
					"Cars",
					"Trucks",
					"SUVs",
					"CUVs",
					"Motorcycle",
					"Scooters",
					"Misc"
				]
			},
			{
				name: "Clothing",
				sub_categories: [
					"Tops (women)",
					"Bottoms (women)",
					"Misc (women)",
					"Tops (men)",
					"Bottoms (men)",
					"Misc (men)"
				]
			}
		];
		var content = categories.map(function(category) {
			var sub_cat = category.sub_categories.map(function(sub_category) {
				return (
					<div>
						<Cat name={sub_category} /> <br />
					</div>
				)
			}, this);
			return (
				<div className="col-xs-6 col-md-4">
					<MainCat name={category.name} /><br /> 
					<ul className="no-bullet"> 
						<li>{sub_cat}</li>
					</ul>
				</div>
			)
		}, this);
		return (
			<div>{content}</div>
		);
	}
});