var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker,
    LeftNav,
    MenuItem,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

Header = React.createClass({
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
  handleToggle() {
  	this.setState({open: !this.state.open});
  },
	render() {
		return (
			<div>
				<AppBar 
					title="BudSpot"
					style={{backgroundColor: '#901d19'}}
					onLeftIconButtonTouchTap={this.handleToggle}
				/>
				<LeftNav 
					open={this.state.open}
					docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}>
	        <MenuItem>Menu Item</MenuItem>
	        <MenuItem>Menu Item 2</MenuItem>
	      </LeftNav>
	    </div>
		)
	}
});