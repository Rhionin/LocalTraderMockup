var MyRatings = React.createClass({
    getInitialState: function() {
		return {
			feedback: feedback
		};
	},
    render: function () {
        
        var disputes = this.state.feedback.filter(function(item) { return item.rating === 0; });
        var compliments = this.state.feedback.filter(function(item) { return item.rating === 0; });
        
        return (
            <div>
                <div>
                    <FeedbackList title='Disputes Against You' items={disputes} />
                    <FeedbackList title='Your Disputes' items={compliments} />
                </div>
            </div>
        );
    }
});