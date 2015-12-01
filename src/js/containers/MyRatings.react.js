var MyRatings = React.createClass({
    getInitialState: function() {
		
		var feedback = [
			{ id: 0, product: products[0], user: user[0], rating: 0, conversation: [{who: 'Them', message: 'Your camera didn\'t have a retina display. False advertising. I want to return this and get my money back.'}, {who: 'You', message: 'I\'m sorry to hear you don\'t like the camera. Where shall we meet to make the exchange?'}] },
			{ id: 1, product: products[1], user: user[1], rating: 1, conversation: [{who: 'Them', message: 'Your puppy was super cute. It won the lottery for me. Thanks!'}] },
			{ id: 2, product: products[2], user: user[2], rating: 0, conversation: [{who: 'Them', message: 'You showed up late, and I missed my kid\'s football game'}] },
			{ id: 3, product: products[3], user: user[2], rating: 1, conversation: [{who: 'Them', message: 'Delicious.'}] }
		];
		
		return {
			feedback: feedback
		};
	},
    render: function () {
        
        var disputes = this.state.feedback.filter(function(item) { return item.rating === 0; });
        var compliments = this.state.feedback.filter(function(item) { return item.rating === 1; });
        
        return (
            <div>
                <div>
                    <FeedbackList title='Disputes Against You' items={disputes} />
                    <FeedbackList title='Compliments To You' items={compliments} />
                </div>
            </div>
        );
    }
});