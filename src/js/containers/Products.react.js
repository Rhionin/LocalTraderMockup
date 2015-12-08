var ProductHeader = React.createClass({
    render: function () {
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Ads</h3>
                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group btn-group-justified dropdown">
                        <button className="btn btn-default dropdown-toggle btn-login" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sort by
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a >Price</a></li>
                            <li><a >User Review</a></li>
                            <li><a >Date Posted</a></li>
                        </ul>
                    </div>
                    
                    <div className="btn-group btn-group-justified dropdown">
                        <button className="btn btn-default dropdown-toggle btn-login" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Filter
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a >Price</a></li>
                            <li><a >User</a></li>
                            <li><a >Date Posted</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

var Products = React.createClass ({
    render: function (argument) {
        
        var ads = [];
        if (!("ads" in this.props)) 
        {
            console.log("hi1")
            ads = [
                {
                    img: "http://www.ethicalconsumer.org/portals/0/images/reports/531333_large.jpg",
                    name: "Television 33 inch",
                    description: "Totally awesome tele",
                    user: "user1",
                    price: "1004$"
                }, 
                {
                    img: "http://www.ethicalconsumer.org/portals/0/images/reports/531333_large.jpg",
                    name: "Television 44 inch",
                    description: "it has a scratch on the side",
                    user: "user1",
                    price: "1004$"
                },
                {
                    img: "http://www.medgadget.com/img/lku2lzx0.jpg",
                    name: "Item2",
                    description: "this is the description",
                    user: "user1",
                    price: "1900$"
                }
            ];
        }
        else 
        {
            console.log("hi")
            ads = this.props.ads;
        }
        console.log(ads);
        
        var Items = ads.map(function(item) {
            var user_stuff = <div></div>;
            if (item.user)
            {
                user_stuff = (<div><p>User: {item.user}</p><UserInfo /></div>);
            }
            return (
                <div className="product-box-category">
                <hr />
                    <div className="btn-group btn-group-justified"  role="group">
                        <div className="btn-group">
                            <img className="category-img" style={{height:150, width: 150}} src={item.img} />
                        </div>
                        <div className="btn-group product-lables">
                            <p>Description: {item.description} </p>
                            <p>Title: {item.name}</p>
                            <p>Price: {item.price} </p>
                            <div>
                                { user_stuff }
                            </div>
                            
                        </div>
                    </div>
                <hr />
                 <div>
                    <MessageProductInputs isRating={false}/>
                </div>
                </div>
            );
        });
        return (
            <div>
                <ProductHeader />
                {Items}
            </div>
        );
   }
});


var MessageProductInputs = React.createClass({
    
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
                
                <input className="btn btn-write category-write-btn" type="button" value="Write" onClick={this.sendMessage} style={{}}/>
                {this.props.isRating ? (
                    <div style={{float:'right'}}>
                        <input className="btn btn-rate" type="button" value="Rate" onClick={this.sendRating}/>
                        <input className="face-image seller-info-left rating-image" type="image" disabled src="../src/images/face-sad.jpg" value="image_value" />
                        <input className="face-image seller-info-left rating-image" type="image" disabled src="../src/images/face-happy.jpg" value="image_value" />
                    </div>
                ) : null}
                
                {this.state.messageSent ? (
                    <p className="message-sent">message sent.</p>
                ) : null}
                
                {this.state.ratingSent ? (
                    <p>rating sent.</p>
                ) : null}
                
            </form>
        );
    }
});
