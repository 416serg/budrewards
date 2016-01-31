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

CheckingIn = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  goCheckedIn() {
    FlowRouter.go('checkedIn');
  },
	render() {
		return (
      <div>
    		<section className="how-it-works">
          <span className="overlay"></span>
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">We're Waiting for You!</h2>
                <p className="text-center">Check in at the BudStation</p>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">

                <div className="img-row">
                  <img src="/incomplete.png" alt="avatar" width="100" className="img-responsive center-block"/>  
                </div>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <p className="text-center" style={{marginBottom: '15px'}}>Please make your way to the breathalyzer station.</p>
                <div className="text-center"><RaisedButton label="Confirm After Check In" secondary={true} disabled={true} style={fbstyle} labelStyle={fblabel} fullWidth={false} backgroundColor="transparent"/></div>
              </div>
            </div>
            
            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <RaisedButton label="Enjoy the night" secondary={true} onTouchTap={this.goCheckedIn} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
              </div>
            </div>
          </div>
        </section>
      </div>
		)
	}
});