var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    TextField,
    DatePicker,
    Dialog,
    TimePicker,
    FlatButton,
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

CheckedIn = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  getInitialState() {
    return {
      checkedIn: false,
      open: false
    };
  },
  handleCheckedIn() {
    this.setState({checkedIn: !this.state.checkedIn});
  },
  openDialog() {
    this.setState({open: true});
  },
  handleClose() {
    this.setState({open: false});
  },
  goFail() {
    FlowRouter.go('fail')
  },
  goCheckingOut() {
    FlowRouter.go('checkingOut')
  },
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Confirm"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <Dialog
          title="Set a time to leave"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TimePicker
            hintText="Time to go"
          />
        </Dialog>
        <section className="how-it-works" style={{paddingBottom: '150px'}}>  
          <span className="overlay"></span>
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-center">Enjoy Your Night!</h2>
                <p className="text-center">Remember to be responsible.</p>
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
                <div className="text-center">
                  <RaisedButton label="Ping Friends" secondary={true} disabled={false} style={fbstyle} labelStyle={fblabel} fullWidth={true} onTouchTap={this.openDialog} backgroundColor="transparent"/>
                  <RaisedButton label="We're Leaving" secondary={true} onTouchTap={this.goCheckingOut} disabled={false} style={fbstyle} labelStyle={fblabel} fullWidth={true} backgroundColor="transparent"/>
                  <p style={{marginTop: '50px'}}><a onTouchTap={this.goFail} style={{color: '#fff'}}>Cancel Plans</a></p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    )
  }
});