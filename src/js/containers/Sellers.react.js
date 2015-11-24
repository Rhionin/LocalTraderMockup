var Sellers = React.createClass( {
  render: function() {
      var sellersList = [];
      
      for(var i = 0; i < user.length; i++){
      	var primaryBackgroundColor = "#E6E6E1";
      	var secondaryBackgroundColor = "#CCC";
      	var val = i % 2;
      	
      	if(val == 1){
      		primaryBackgroundColor = "#F5F5EE";
      		secondaryBackgroundColor = "#ECEAEA";
      	}
      	
          sellersList.push(<Seller secondaryColor={secondaryBackgroundColor} primaryColor={primaryBackgroundColor} image={user[i].img} name={user[i].name} happy={user[i].ratings.happy} sad={user[i].ratings.sad} sales={user[i].sales} purchases={user[i].purchases}/>);
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
    render: function() {
        var stylePrimary = {backgroundColor:this.props.primaryColor};
        var styleSecondary = {backgroundColor:this.props.secondaryColor};
        return(
            <div className="seller-box" style={stylePrimary}>
                <div className="seller-info">
                	<div className="seller-info-border">
                		<div className="seller-image-border" style={styleSecondary}>
                		    <Link to="sellerinfo">
                			    <img className="seller-image" src={this.props.image}></img>
                			</Link>
                		</div>
                		<div className="seller-info-box">
                			<label className="seller-name" value={this.props.name}>{this.props.name}</label> <br />
                			<div className="seller-details">
			                  <img className="face-image" src="../src/images/face-happy.jpg" /> <label className="seller-rating" value={this.props.name}>{this.props.happy}</label> 
			                  <img className="face-image" src="../src/images/face-sad.jpg" /> <label className="seller-rating" value={this.props.name}>{this.props.sad}</label> <br />
			                  <a href src="/#">See Reviews</a> <br />
			                  <a href src="/#">See Ads</a>
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

        return(
            <div className="seller-info-body">
                <div className="seller-info-left">
                    <img className="seller-image" /> <br />
                </div>
                <div className="seller-info-right">
                    
                </div>
            </div>
        )
    }
});