var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    TextField,
    DatePicker,
    FlatButton, 
    List,
    ListItem,
    Avatar,
    Divider,
    Paper,
    Checkbox,
    AutoComplete,
    Dialog,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var bestBuds = {
  padding: '0px',
  paddingBottom: '0px'
}

var bestBud = {

}

var fbstyle = {
  backgroundColor:  'transparent',
  border: '1px solid #fff'
}

var fblabel = {
  fontFamily: 'Open Sans',
}

FriendList = React.createClass({
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
      open: false
    };
  },
  goConfirm() {
    FlowRouter.go('confirmList');
  },
  openDialog() {
    this.setState({open: true});
  },
  handleClose() {
    this.setState({open: false});
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
        onTouchTap={this.goConfirm}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Confirm Your BudNightOut"
          actions={actions}
          modal={true}
          autoScrollBodyContent={true}
          open={this.state.open}
        >
          <List subheader="Destination">
            <ListItem
              primaryText="Jack Astors"
            />
          </List>
          <Divider />
          <List subheader="Your Buds for the night">
            <ListItem
              primaryText="Sergiy"
              leftAvatar={<Avatar src="/sergiy.png" />}
            />
            <ListItem
              primaryText="Bill Konrad"
              leftAvatar={<Avatar src="/bill.png" />}
            />
            <ListItem
              primaryText="Heather"
              leftAvatar={<Avatar src="/heather.png" />}
            />
            <ListItem
              primaryText="Jade"
              leftAvatar={<Avatar src="/jade.png" />}
            />
          </List>
        </Dialog>
        <section className="friend-list">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3 className="text-center" style={{marginBottom: '20px'}}>Which buds are you taking?</h3>
                <Paper style={{}} zDepth={2}>
                  <List subheader="Best Buds" style={bestBuds}>
                    <ListItem
                      primaryText="Jade"
                      leftAvatar={<Avatar src="/jade.png" />}
                      rightIcon={<Checkbox />}
                      style={bestBud}
                    />
                    <ListItem
                      primaryText="Heather"
                      leftAvatar={<Avatar src="/heather.png" />}
                      rightIcon={<Checkbox />}
                      style={bestBud}
                    />
                    <ListItem
                      primaryText="Aram"
                      leftAvatar={<Avatar src="/aram.png" />}
                      rightIcon={<Checkbox />}
                      style={bestBud}
                    />
                    <ListItem
                      primaryText="Sergiy"
                      leftAvatar={<Avatar src="/sergiy.png" />}
                      rightIcon={<Checkbox />}
                      style={bestBud}
                    />
                  </List>
                  <Divider />
                  <List subheader="Nearest Buds">
                    <ListItem
                      primaryText="Bill Konrad (2m away)"
                      leftAvatar={<Avatar src="/bill.png" />}
                      rightIcon={<Checkbox />}
                    />
                    <ListItem
                      primaryText="Balaji Gopalan (2m away)"
                      leftAvatar={<Avatar src="/balaji.png" />}
                      rightIcon={<Checkbox />}
                    />
                    <ListItem
                      primaryText="Ricardo Dias (2m away)"
                      leftAvatar={<Avatar src="/ricardo.png" />}
                      rightIcon={<Checkbox />}
                    />
                    <ListItem
                      primaryText="Matt Evans (2m away)"
                      leftAvatar={<Avatar src="/matt.png" />}
                      rightIcon={<Checkbox />}
                    />
                    <ListItem
                      primaryText="Andrew Sneyd (2m away)"
                      leftAvatar={<Avatar src="/andrew.png" />}
                      rightIcon={<Checkbox />}
                    />
                  </List>
                  <Divider />
                  <List subheader="Your Buds">
                    <ListItem
                      primaryText="Jeff Shin"
                      leftAvatar={<Avatar src="/jeff.png" />}
                      rightIcon={<Checkbox />}
                    />
                    <ListItem
                      primaryText="Rod Hardman"
                      leftAvatar={<Avatar src="/rod.png" />}
                      rightIcon={<Checkbox />}
                    />
                    <ListItem
                      primaryText="Daniel Eidan"
                      leftAvatar={<Avatar src="/daniel.png" />}
                      rightIcon={<Checkbox />}
                    />
                  </List>
                  
                </Paper>
              </div>
            </div>
          </div>
          
        </section>
        <div className="confirm">
          <div className="container">
            <RaisedButton label="Confirm" secondary={true} style={fbstyle} labelStyle={fblabel} onTouchTap={this.openDialog} fullWidth={true} backgroundColor="transparent"/>
          </div>
        </div>
      </div>
    )
  }
});

