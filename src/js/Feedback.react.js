var Feedback = React.createClass({
    getInitialState: function() {
        return {
            conversation: this.props.conversation
        };
    },
    messageAdded: function(message) {
        var tmpConv = this.state.conversation.slice();    
        tmpConv.push({who: 'You', message: message});
        this.setState({conversation:tmpConv})   
    },
    render: function() {
        var face = this.props.rating === 1 ?
            <img className="face-image" src="../src/images/face-happy.jpg" /> :
            <img className="face-image" src="../src/images/face-sad.jpg" />
        
        return (
            <div className="panel panel-default">
			    <div className="row panel-body">
			        <table style={{margin:'10px'}}>
			            <tr>
			                <td>
			                    <span>
			                        <span style={{margin:'5px'}}>{face}</span>
			                        {this.props.userName}
			                    </span>
			                    <div className="seller-image-border">
                                    <img className="seller-image" src={this.props.image}></img>
                                </div>
                            </td>
                            <td>
                                <span>
                                    <img className='image-mini' src={this.props.product.image} />
                                    <strong>{this.props.product.name}</strong>
                                </span><br/>
			                    <div className="panel panel-default">
                			        <div className="row panel-body">
                			            {this.state.conversation.map(function(entry, i) {
                                            return <p key={i}><strong>{entry.who}:</strong> {entry.message}</p>
                                        })}
                			            <MessageInput callback={this.messageAdded} />
                			        </div>
                			    </div>
			                </td>
			            </tr>
			        </table>
                </div>
            </div>
        );
    }
});