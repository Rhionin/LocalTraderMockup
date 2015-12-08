var Sellers = React.createClass( {
    getInitialState: function () {
        return {error: false};
    },
    
    render: function() {
      var sellersList = [];
      
      for(var i = 0; i < user.length; i++){
      	var primaryBackgroundColor = "#C4DDE9";
      	var secondaryBackgroundColor = "#94BCCF";
      	var val = i % 2;
      	
      	if(val == 1){
      		primaryBackgroundColor = "#DFF0FA";
      		secondaryBackgroundColor = "#C4DDE9";
      	}
      	
          sellersList.push(<Seller sellerId={i} secondaryColor={secondaryBackgroundColor} primaryColor={primaryBackgroundColor} image={user[i].img} name={user[i].name} happy={user[i].ratings.happy} sad={user[i].ratings.sad} sales={user[i].sales} purchases={user[i].purchases}/>);
      }
	return (
	  <div>
	  
	    <label className="page-title">Sellers</label>
	    {sellersList}
	  </div>
	);
  }
});

var Seller = React.createClass({
    
    getInitialState: function () {
        return {error: false};
    },
    
    openSeller : function(event){
        currentSellerView = this.props.sellerId;
    },
    
    render: function() {
        var stylePrimary = {backgroundColor:this.props.primaryColor};
        var styleSecondary = {backgroundColor:this.props.secondaryColor};
        return(
            <div className="seller-box" style={stylePrimary}>
                <div className="seller-info">
                	<div className="seller-info-border">
                		<div className="seller-image-border" style={styleSecondary}>
                		    <Link onClick={this.openSeller} to="sellerinfo">
                			    <img className="seller-image" src={this.props.image}></img>
                			</Link>
                		</div>
                		<div className="seller-info-box">
                		    <Link onClick={this.openSeller} to="sellerinfo">
                		    	<label className="seller-name" value={this.props.name}>{this.props.name}</label>
                		    </Link><br />
                			<div className="seller-details">
			                  <img className="face-image" src="../src/images/face-happy.jpg" /> <label className="seller-rating" value={this.props.name}>{this.props.happy}</label> 
			                  <img className="face-image" src="../src/images/face-sad.jpg" /> <label className="seller-rating" value={this.props.name}>{this.props.sad}</label> <br />
			                   <Link onClick={this.openSeller} to="sellerinfo"><a>See Reviews</a></Link> <br />
			                   <Link onClick={this.openSeller} to="sellerinfo"><a>See Ads</a></Link>
		                  </div>
	                  </div>
                	</div>
                	
                </div>
            </div>
        )
    }
});

var SellerInfo = React.createClass({
    render: function() {
        var sellerProps = user[currentSellerView];
        var adList = [];

        if (!seller_products[currentSellerView]) {
            window.location.href = '#/sellers';
            return (<div>No seller selected. Redirecting to sellers page...</div>);
        }

        // recommend: seller_products[currentSellerView].forEach(function(product, i) { /* do stuff here */});
        for(var i = 0; i < seller_products[currentSellerView].length; i++){

            adList.push(
                //<Products /> );
                 <Ad price={seller_products[currentSellerView][i].price} name={seller_products[currentSellerView][i].name} category={seller_products[currentSellerView][i].category} description={seller_products[currentSellerView][i].description} image={seller_products[currentSellerView][i].image} isRating={false}/>
                 );
        }
        
        return(
            <div>
                <div className="seller-info-body">
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <img className="seller-image-lg" src={sellerProps.img} /> <br />
                                </div>
                            </td>
                            <td style={{display : 'inline'}}>
                                <div className="seller-info-labels">
                                    <label className="seller-name-lg">{sellerProps.name}</label> <br />
                                    <table>
                                        <tr>
                                            <td>
                                                 <img className="face-image seller-info-left" src="../src/images/face-happy.jpg" />
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {sellerProps.ratings.happy} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img className="face-image seller-info-left" src="../src/images/face-sad.jpg" />
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {sellerProps.ratings.sad} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="seller-info-left">Sales: </label>
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {sellerProps.sales} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="seller-info-left">Purchases: </label>
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {sellerProps.purchases} </label> 
                                            </td>
                                        </tr>
                                        
                                    </table>
                                 </div>
                            </td>
                        </tr>
                    </table>
                    
                </div>
                <div className="ad-container">
                    <label className="ad-title">Seller Ads</label> <br />
                    {adList}
                </div>
            </div>
            
        )
    }
});


var Ad = React.createClass({
    getInitialState: function () {
        return {error: false};
    },
    
    sendMessage: function(event){
        return false;
    },
    
    render: function() {
        var Style = {disabled : 'true'};
        return(
            <div className="ad-info-body">
                <div className="ad-header">
                    <label className="ad-name">{this.props.name}</label> <br />
                </div>
                
                <table>
                    <tr>
                        <td>
                            <div className="ad-info-left">
                                <img className="ad-image-lg" src={this.props.image}/> <br />
                            </div>
                        </td>
                        <td style={{display : 'inline'}}>
                            <div className="ad-info-right">
                                <div className="ad-info-labels">
                                    <table>
                                        <tr>
                                            <td>
                                                <label className="ad-info-left">Description: </label>
                                            </td>
                                            <td>
                                                <label className="ad-info-right"> {this.props.description} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="ad-info-left">Category: </label>
                                            </td>
                                            <td>
                                                <label className="ad-info-right"> {this.props.category} </label> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="ad-info-left">Price: </label>
                                            </td>
                                            <td>
                                                <label className="ad-info-right"> {this.props.price} </label> 
                                            </td>
                                        </tr>
                                    </table>
                                 </div>
                            </div>
                            <MessageInput style={Style} callback={this.sendMessage} isRating={this.props.isRating}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
});

var currentSellerView = -1;