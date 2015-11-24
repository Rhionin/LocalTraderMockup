var Sp = React.createClass({
	render: function() {
		return (
			<div>
				<span>{this.props.name}</span><br />
			</div>
		);
	}
})


var Category = React.createClass( {
	render: function() {
		var categories = [
			{
				name: "Category 1",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 2",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 3",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 4",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 5",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 6",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 7",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			},
			{
				name: "Category 8",
				sub_categories: [
					"Sub category1",
					"Sub category2",
					"Sub category3",
					"Sub category4",
					"Sub category5",
					"Sub category6",
					"Sub category7",
					"Sub category8",
				]
			}
		];
		var content = categories.map(function(category) {
			var sub_cat = category.sub_categories.map(function(sub_category) {
				return (
					<div>
						<Sp name={sub_category} /> <br />
					</div>
				)
			});
			return (
				<div>
					<Sp name={category.name} /><br />{sub_cat}
				</div>
			)
		});
		return (
			<div>{content}</div>
		);
	}
});