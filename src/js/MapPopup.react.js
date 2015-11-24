var MapPopup = React.createClass( {
	render: function() {
		return (
            <div>
                <div className='left'>
                    <img className='product' src={this.props.image} />
                    <br />
                    <div>
            			<label className="seller-name" style={{ marginLeft:'5px' }} value={this.props.seller.name}>{this.props.seller.name}</label> <br />
            			<div className="seller-details">
                            <img className="face-image" src="../src/images/face-happy.jpg" /> <label className="seller-rating" value={this.props.seller.name}>{this.props.seller.ratings.happy}</label> 
                            <img className="face-image" src="../src/images/face-sad.jpg" /> <label className="seller-rating" value={this.props.seller.name}>{this.props.seller.ratings.sad}</label> <br />
                        </div>
                    </div>
                </div>
                <div className='right details'>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
		);
	}
});