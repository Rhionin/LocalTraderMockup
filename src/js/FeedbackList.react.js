var FeedbackList = React.createClass({
    render: function () {
        
        return (
            <div className='feedback-list'>
                <h2 className="disputes-title">{this.props.title}</h2>
                {this.props.items.map(function(feedback, i) {
                    return <Feedback key={feedback.id} userName={feedback.user.name} image={feedback.user.img} rating={feedback.rating} product={feedback.product} conversation={feedback.conversation}/>
                })}
            </div>
        );
    }
});