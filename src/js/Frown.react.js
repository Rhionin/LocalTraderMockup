var Frown = React.createClass( {
    getInitialState: function () {
        return {positive: 12};
    },
    handlePositiveClick: function () {
        console.log('test');
        this.setState({positive: this.state.positive + 1});
    },
	render: function() {
		return (
			 <i className="fa fa-smile-o fa-2x"><button onClick={this.handlePositiveClick}>{this.state.positive}</button></i>
		);
	}
});