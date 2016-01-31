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

Pass = React.createClass({
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
        <section className="how-it-works">
          <span className="overlay"></span>
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">You check out!</h2>
                <p className="text-center">Thanks for being a responsible Bud</p>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">

                <div className="img-row">
                  <img src="/check.png" alt="avatar" width="100" className="img-responsive center-block"/>  
                </div>
              </div>
            </div>

            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <p className="text-center" style={{marginBottom: '15px'}}>+ 1,000 Points</p>
              </div>
            </div>
            
            <div className="row" style={{paddingTop: '50px'}}>
              <div className="col-xs-12">
                <RaisedButton label="Take a Picture" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <RaisedButton label="Share Your Story" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <RaisedButton label="Map My Way Home" secondary={true} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                <p className="text-center" style={{marginTop: '50px'}}><a onTouchTap={this.goDashboard} style={{color: '#fff'}}>Back to Dashboard</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
});