var Frown = React.createClass( {
    getInitialState: function () {
        return {negative: 12};
    },
    handlePositiveClick: function () {
        console.log('test');
        this.setState({negative: this.state.negative + 1});
    },
	render: function() {
		return (
			 <img src="../src/images/face-sad.jpg" className="face-image"><button onClick={this.handlePositiveClick}>{this.state.negative}</button></img>
		);
	}
});