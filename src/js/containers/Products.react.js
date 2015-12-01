var ProductHeader = React.createClass({
    render: function () {
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Ads</h3>
                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group btn-group-justified dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
            ads = [{
                img: "http://images.clipartpanda.com/lightning-bolt-clipart-dc6Mx6qc9.jpeg",
                name: "Item1",
                description: "this is the description",
                user: "user1"
            }, {
                img: "http://images.clipartpanda.com/lightning-bolt-clipart-dc6Mx6qc9.jpeg",
                name: "Item2",
                description: "this is the description",
                user: "user1"
            }];
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
                <div>
                <hr />
                    <div className="btn-group btn-group-justified"  role="group">
                        <div className="btn-group">
                            <img style={{height:50}} src={item.img} />
                        </div>
                        <div className="btn-group">
                            <p>Title: {item.name}</p>
                            <div>
                                { user_stuff }
                            </div>
                        </div>
                        <div className="btn-group">
                            <p>{item.description}</p>
                        </div>
                        <div className="btn-group">
                            <p>{item.description}</p>
                        </div>
                    </div>
                <hr />
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