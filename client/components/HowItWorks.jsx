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

HowItWorks = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  goToProfile() {
    FlowRouter.go('profile');
  },
	render() {
		return (
			<section className="how-it-works">
        <span className="overlay"></span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">How It Works</h2>
            </div>
          </div>
          <div className="row hows">
            <div className="col-xs-4">
              <div className="icon text-center">
                <i className="fa fa-hand-paper-o" />
              </div>
            </div>
            <div className="col-xs-8">
              <p>
                Pledge yourself as the designated driver. You call the shots.
              </p>
            </div>
          </div>
          <div className="row hows">
            <div className="col-xs-4">
              <div className="icon text-center">
                <i className="fa fa-car" />
              </div>
            </div>
            <div className="col-xs-8">
              <p>
                Stay true to the cause and get your buds home safe without risking lives.
              </p>
            </div>
          </div>
          <div className="row hows">
            <div className="col-xs-4">
              <div className="icon text-center">
                <i className="fa fa-trophy" />
              </div>
            </div>
            <div className="col-xs-8">
              <p>
                Collect points to claim a once in a lifetime opportunity.
              </p>
            </div>
          </div>
          <div className="row" style={{paddingTop: '50px'}}>
            <div className="col-xs-12">
              <RaisedButton label="Got It" secondary={true} style={fbstyle} onTouchTap={this.goToProfile} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
            </div>
          </div>
        </div>
      </section>
		)
	}
});