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

ConfirmList = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  goCheckingIn() {
    FlowRouter.go('checkingIn');
  },
  goDashboard() {
    FlowRouter.go('dashboard');
  },
	render() {
		return (
      <div>
    		<section className="how-it-works">
          <span className="overlay"></span>
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">Have a great night out!</h2>
                <p className="text-center">Remember to check in at the destination</p>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <div className="img-row">
                  <img src="/aram.png" alt="avatar" className="avatar"/>
                  <img src="/sergiy.png" alt="avatar" className="avatar"/>
                  <img src="/heather.png" alt="avatar" className="avatar"/>
                  <img src="/jade.png" alt="avatar" className="avatar"/>
                  <img src="/bill.png" alt="avatar" className="avatar"/>
                </div>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <h4 className="text-center">Jack Astor's</h4>
                <p className="text-center" style={{marginBottom: '15px'}}>Dundas Square</p>
                <div className="col-xs-6 text-center">
                  <RaisedButton label="Open Map" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={false} backgroundColor="transparent"/>
                </div>
                <div className="col-xs-6 text-center">
                  <RaisedButton label="Share" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={false} backgroundColor="transparent"/> 
                </div>
              </div>
            </div>
            
            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <RaisedButton label="I'm Here" secondary={true} style={fbstyle} labelStyle={fblabel} onTouchTap={this.goCheckingIn} fullWidth={true} backgroundColor="transparent"/>
                <p className="text-center" style={{marginTop: '10px'}}><a onTouchTap={this.goDashboard} style={{color: '#fff'}}>Cancel Plans</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
		)
	}
});