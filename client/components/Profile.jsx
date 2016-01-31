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
  backgroundColor:  'transparent',
  border: '1px solid #901D19'
}

var fblabel = {
  fontFamily: 'Open Sans',
  color: '#901D19'
}


Profile = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  goDashboard() {
    FlowRouter.go('dashboard');
  },
	render() {
		return (
      <div>
  			<section className="profile">
          <div className="container-profile">
            <div className="bio">
              <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />                
            </div>
            <div className="avatarcontainer">
              <img src="/aram.png" alt="avatar" className="avatar" />
            </div>
          </div>
        </section>
        <section className="user-about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <h4 className="name"><strong>Aram Stamboulian</strong></h4>
                <p className="from">from Stouffville, Ontario</p>
                <hr/>
                <p className="birthday">October 20, 1991</p>
                <p className="thank-you">On behalf of all of us at BudRewards we thank you for taking a step forward and joining a platform that makes it a rewarding experience to be a Designated Driver. We thank you for saving lives.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container confirm-profile">
            <div className="row">
              <div className="col-xs-12 text-center">
                <p><a href="#">Terms & Contiditions</a></p>
                <RaisedButton label="Confirm My Profile" secondary={true} style={fbstyle} labelStyle={fblabel} onTouchTap={this.goDashboard} fullWidth={true} backgroundColor="transparent"/>
                <small className="legal">By clicking "Confirm My Profile" you are agreeing to our terms and conditions</small>
              </div>
            </div>
          </div>
        </section>
      </div>
		)
	}
});