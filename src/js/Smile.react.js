var Smile = React.createClass( {
    getInitialState: function () {
        return {positive: 432};
    },
    handlePositiveClick: function () {
        console.log('test');
        this.setState({positive: this.state.positive + 1});
    },
	render: function() {
		return (
			 <img src="../src/images/face-happy.jpg" className="face-image"><button onClick={this.handlePositiveClick}>{this.state.positive}</button></img>
		);
	}
});