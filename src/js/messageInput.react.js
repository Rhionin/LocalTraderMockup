var MessageInput = React.createClass({
    
    getInitialState: function () {
        return {messageSent: false};
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
    
    render: function() {
        return (

            <form className="form-vertical" onSubmit={this.sendMessage}>
                <div className="ad-message-form">
                    <textarea placeholder="Write a message..." rows="4" ref="message" cols="70"></textarea>
                </div>
                <label className="ad-info-right" ref="alert"></label>
                <input className="btn btn-write" type="button" value="Write" onClick={this.sendMessage} style={{}}/>
                {this.state.messageSent ? (
                    <p>message sent.</p>
                ) : null}
            </form>
        );
    }
});