var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    TextField,
    DatePicker,
    FlatButton,	
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var fbstyle = {
	backgroundColor: 	'transparent',
	border: '1px solid #fff'
}

var fblabel = {
	fontFamily: 'Open Sans',
}

HomeLayout = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  goToHow() {
    FlowRouter.go('howItWorks')
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
	render() {
		return (
			<header className="home-header">
        <span className="overlay">
          <div className="header-content">
            <div className="header-content-inner">
            	<img src="/logo.png" className="img-responsive center-block" style={{maxWidth: '170px', marginBottom: '30px'}}/>
              <p style={{fontSize: '14px'}}>Designated Driving never felt this rewarding</p>
              <RaisedButton label="Sign In with Facebook" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} onTouchTap={this.goToHow} backgroundColor="transparent"/>
            </div>
          </div>
          <div className="header-content-bottom">
          	<p className="powered-by" style={{fontSize: '14px'}}>Powered by:</p>
          	<img src="/budlogo.png" width="200px" alt="budweiser logo" />
          </div>
        </span>
      </header>
		)
	}
});