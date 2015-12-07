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
			<div className="user-info-box">
                <a href="#/my-page"><img className="seller-image-sm" src="https://pmcdeadline2.files.wordpress.com/2014/04/28-nic-cage-joe__140410220507.jpg" /> Joe</a><br/>
                <Smile />
                <Frown />
                
			</div>
		);
	}
});