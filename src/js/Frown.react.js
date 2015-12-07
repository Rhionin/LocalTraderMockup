var Frown = React.createClass( {
    getInitialState: function () {
        return {negative: 53};
    },
    handlePositiveClick: function () {
        console.log('test');
        this.setState({negative: this.state.negative + 1});
    },
	render: function() {
		return (
		    <a href="#/my-page">
			    <img src="../src/images/face-sad.jpg" className="face-image">
			        <button>{this.state.negative}</button>
			    </img>
			</a>
		);
	}
});