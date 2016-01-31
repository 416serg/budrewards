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

var bestBudJack = {
  backgroundImage: 'url(/jack.png)',
  padding: '10px 0',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

var bestBudReal = {
  backgroundImage: 'url(/real.png)',
  backgroundPosition: 'center',
  padding: '10px 0',
  backgroundSize: 'cover'
}

var bestBudDrake = {
  backgroundImage: 'url(/drake.png)',
  backgroundPosition: 'center',
  padding: '10px 0',
  backgroundSize: 'cover'
}

var fbstyle = {
  backgroundColor:  'transparent',
  border: '1px solid #fff'
}

var fblabel = {
  fontFamily: 'Open Sans',
}

BusinessList = React.createClass({
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
  goFriendList() {
    FlowRouter.go('friendList');
  },
  openDialog() {
    this.setState({open: true});
  },
  handleClose() {
    this.setState({open: false});
  },
  render() {

    return (
      <div>
        <section className="friend-list">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3 className="text-center" style={{marginBottom: '20px'}}>Pick a BudPlace</h3>
                <Paper style={{}} zDepth={2}>
                  <List subheader="Featured BudPlaces" style={bestBuds}>
                    <ListItem
                      primaryText="Jack Astors (2km away)"
                      secondaryText="Perks: 1 Appetizer + Unlimited Non-alcoholic drinks"
                      style={bestBudJack}
                      onTouchTap={this.goFriendList}
                    />
                    <ListItem
                      primaryText="Real Sports Bar & Grill (2km away)"
                      secondaryText="Perks: 1lb Wings"
                      style={bestBudReal}
                      onTouchTap={this.goFriendList}
                    />
                    <ListItem
                      primaryText="The Drake Hotel (3km away)"
                      secondaryText="Perks: 1 Appetizer + 1 Desert"
                      style={bestBudDrake}
                      onTouchTap={this.goFriendList}
                    />
                  </List>
                  <Divider />
                  <List subheader="All BudPlaces">
                    <ListItem
                      primaryText="Hemingway's (3km away)"
                      secondaryText="Perks: Unlimited Un-Alcoholic Drinks"
                      onTouchTap={this.goFriendList}
                    />
                    <ListItem
                      primaryText="La Carnita (4km away)"
                      secondaryText="Perks: 3 Tacos"
                      onTouchTap={this.goFriendList}
                    />
                  </List>
                </Paper>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    )
  }
});

