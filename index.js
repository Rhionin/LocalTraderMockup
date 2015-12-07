var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar />
                <div id='content-container' >
        		    {this.props.children}
        		</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/location" component={Location}/>
            <Route path="/sellers" component={Sellers}/>
            <Route path="/learnmore" component={LearnMore}/>
            <Route path="/sellerinfo" component={SellerInfo}/>
            <Route path="/products" component={Products}/>
            <Route path="/disputes" component={MyRatings}/>
            <Route path="/my-page" component={Rate}/>
        </Route>
    </Router>,
    document.getElementById('root')
)
            // <Route path="/products/:q" component={Products} /> // https://github.com/rackt/react-router/blob/master/examples/query-params/app.js