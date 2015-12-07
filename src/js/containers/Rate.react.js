
var Rate = React.createClass({
    handleClick: function(){
        window.location.href = '#/disputes';
    },
    render: function() {
        
        var seller = {
            image: "https://pmcdeadline2.files.wordpress.com/2014/04/28-nic-cage-joe__140410220507.jpg",
            name: "Joe Trader",
            ratings: {
                happy: 432,
                sad: 53
            },
            sales: 200,
            purchases: 1
        };
        
        var seller_products = [
            {
    	        name: 'Truck',
    	        category: 'Truck',
    	        description: 'A big truck',
    	        image: 'http://www.icidici.com/wp-content/uploads/bigXtruckXimgX1.jpg',
    	    },
    	    {
    	        name: 'Dog',
    	        category: 'Electronics',
    	        description: "Electronic dog. Man's best friend",
    	        image: 'http://ecx.images-amazon.com/images/I/51KEjMqEd-L._SY300_.jpg',
    	    }
        ]
        
        var purchase = products[4];
        
        var Sales = seller_products.map(function(s){
            return (
                <Ad name={s.name} category={s.category} description={s.description} image={s.image} isRating={true}/>
            );
        });
        
        var Buys = (
            <Ad name={purchase.name} category={purchase.category} description={purchase.description} image={purchase.image} isRating={true}/>
        )
        
        console.log(purchase);
        
        return(
            <div>
                <div className="seller-info-body">
                    <table className="user-info">
                        <tr>
                            <td>
                                <div>
                                    <img className="seller-image" src="https://pmcdeadline2.files.wordpress.com/2014/04/28-nic-cage-joe__140410220507.jpg" /> <br />
                                </div>
                            </td>
                            <td style={{display : 'inline'}}>
                                <div className="seller-info-labels">
                                    <label className="seller-name-lg">{seller.name}</label> <br />
                                    <table>
                                        <tr>
                                            <td>
                                                 <img className="face-image seller-info-left" src="../src/images/face-happy.jpg" />
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {seller.ratings.happy} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img className="face-image seller-info-left" src="../src/images/face-sad.jpg" />
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {seller.ratings.sad} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="seller-info-left">Sales: </label>
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {seller.sales} </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="seller-info-left">Purchases: </label>
                                            </td>
                                            <td>
                                                <label className="seller-info-right"> {seller.purchases} </label> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="btn btn-dispute" onClick={this.handleClick}>{disputes.length} Disputes</button>
                                            </td>
                                        </tr>
                                    </table>
                                 </div>
                            </td>
                        </tr>
                    </table>
                    
                </div>
                <div className="ad-container">
                    <label className="ad-title">Recent Sales</label> <br />
                    {Sales}
                    <label className="ad-title">Recent Purchases</label> <br />
                    {Buys}
                </div>
            </div>
            
        )
    }
});
