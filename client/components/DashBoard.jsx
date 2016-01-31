var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    TextField,
    DatePicker,
    FlatButton,
    Paper,	
    List,
    ListItem,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var mainStyle = {
  backgroundColor:  '#701612',
  color: '#fff',
  textAlign: 'center',
  borderTop: '1px solid #701612',
  padding: '10px 0',
  fontFamily: 'Open Sans',
}

var mainLabel = {
  fontFamily: 'Open Sans',
  color: '#fff'
}

var secondaryStyle = {
  backgroundColor:  '#901D19',
  width: '100%',
  color: '#fff',
  padding: '10px 0',
  borderBottom: '1px solid #701612',
  textAlign: 'center',
  fontFamily: 'Open Sans'
}

var listStyle = {
  fontFamily: 'Open Sans',
  backgroundColor: '#901D19',
  paddingTop: '0px',
  fontFamily: 'Open Sans'
}

var listItemStyle = {
  backgroundColor:  '#701612',
  borderBottom: '1px solid #701612',
  color: '#fff',
  fontFamily: 'Open Sans',
  textAlign: 'center'
}


DashBoard = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  goBusinessList() {
    FlowRouter.go('businessList');
  },
	render() {
		return (
      <div>
  			<header className="dashboard">
          <span className="overlay">
            <div className="header-content">
              <div className="header-content-inner">
                <img src="/aram.png" alt="avatar" className="avatar"/>
                <h4>What's on your agenda, Aram?</h4>
                <p>You have 1,500 points</p>
              </div>
            </div>
            
          </span>
        </header>
        <section className="red">
          <List style={listStyle}>
            <ListItem
              primaryText="I'm the Designated Driver"
              style={mainStyle}
              onTouchTap={this.goBusinessList}
            />
            <ListItem
              primaryText="My Buds"
              style={secondaryStyle}
            />
            <ListItem
              primaryText="Partnered Venues"
              style={secondaryStyle}
            />
            <ListItem
              primaryText="Redeem Points"
              style={secondaryStyle}
            />
          </List>
          <div className="powered-by text-center">
            <p className="powered-by-text">Powered by:</p>
            <img src="/budlogo.png" width="200px" alt="budweiser logo" />
          </div>
        </section>
      </div>
		)
	}
});