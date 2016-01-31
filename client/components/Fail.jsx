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
  border: '1px solid #fff',
  margin: '10px 0'
}

var fblabel = {
	fontFamily: 'Open Sans',
}

Fail = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
	render() {
		return (
      <div>
    		<section className="how-it-works">
          <span className="overlay"></span>
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">You've failed the test!</h2>
                <p className="text-center">Please think heavily and do everyone a favor. Don't get behind the wheel.</p>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">

                <div className="img-row">
                  <img src="/sad.png" alt="avatar" width="100" className="img-responsive center-block"/>  
                </div>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <p className="text-center" style={{marginBottom: '15px'}}>Points Lost </p>
              </div>
            </div>
            
            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <RaisedButton label="Call an Uber" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <RaisedButton label="Call a Friend" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <p className="text-center" style={{marginTop: '50px'}}><a onTouchTap={FlowRouter.go('dashboard')} style={{color: '#fff'}}>Back to Dashboard</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
		)
	}
});