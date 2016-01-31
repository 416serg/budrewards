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

CheckingOut = React.createClass({
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
  goFail() {
    FlowRouter.go('fail');
  },
  goPass() {
    FlowRouter.go('pass');
  },
  render() {
    return (
      <div>
        <section className="how-it-works">
          <span className="overlay"></span>
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">You're about to leave.</h2>
                <p className="text-center">Please take a moment to complete the breathalyzer test.</p>
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
              <div className="col-xs-12 text-center">
                <RaisedButton label="Pass Case" secondary={true} onTouchTap={this.goPass} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <RaisedButton label="Fail Case" onTouchTap={this.goFail} secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <p style={{marginTop: '50px'}}><a onTouchTap={this.goDashboard} style={{color: '#fff'}}>Back to Dashboard</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
});