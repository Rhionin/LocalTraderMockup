var UserInfo = React.createClass( {
    getInitialState: function () {
        return {positive: 12, negative:3};
    },
    handlePositiveClick: function () {
        console.log('test');
        this.setState({positive: this.state.positive + 1});
    },
	render: function() {
		return (
			<div>
				 <Smile />
				 <i className="fa fa-frown-o fa-2x"></i>
			</div>
		);
	}
});