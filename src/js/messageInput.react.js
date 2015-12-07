var MessageInput = React.createClass({
    
    getInitialState: function () {
        return {messageSent: false,
                ratingSent: false,
                Style : {backgroundColor : '#C4DDE9'}
        };
    },
    
    sendMessage: function(event){
        var that = this;

        var message = this.refs.message.getDOMNode().value;
        if (message && message.length > 0) {
            if (that.props.callback) {
                that.props.callback(message);   
            }
            that.refs.message.value = "";
            // this.state.messageSent = true; <- CJ here. I don't think this works. You have to call this.setState(), no?
            that.setState({messageSent: true});
            setTimeout(function() {
                that.setState({messageSent: false});
            }, 2000);
        }
        return false;
    },
    
    sendRating: function(event){
        var that = this;

        var message = this.refs.message.getDOMNode().value;
            if (message && message.length > 0) {
            that.refs.message.value = "";
            // this.state.messageSent = true; <- CJ here. I don't think this works. You have to call this.setState(), no?
            that.setState({ratingSent: true});
            setTimeout(function() {
                that.setState({ratingSent: false});
            }, 2000);
        }
        
        return false;
    },
    
    render: function() {
        return (

            <form className="form-vertical" onSubmit={this.sendMessage}>
                <div className="ad-message-form">
                    <textarea placeholder="Write a message..." rows="4" ref="message" cols="70"></textarea>
                </div>
                <label className="ad-info-right" ref="alert"></label>
                
                <input className="btn btn-write" type="button" value="Write" onClick={this.sendMessage} style={{}}/>
                {this.props.isRating ? (
                    <div style={{float:'right'}}>
                        <input className="btn btn-rate" type="button" value="Rate" onClick={this.sendRating}/>
                        <input className="face-image seller-info-left rating-image" type="image" disabled src="../src/images/face-sad.jpg" value="image_value" />
                        <input className="face-image seller-info-left rating-image" type="image" disabled src="../src/images/face-happy.jpg" value="image_value" />
                    </div>
                ) : null}
                
                {this.state.messageSent ? (
                    <p>message sent.</p>
                ) : null}
                
                {this.state.ratingSent ? (
                    <p>rating sent.</p>
                ) : null}
                
            </form>
        );
    }
});