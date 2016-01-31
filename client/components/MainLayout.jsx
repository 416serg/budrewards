var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

MainLayout = React.createClass({
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
			<AppCanvas>
	      {this.props.header}
	      <main>{this.props.content}</main>
	      {this.props.footer}
	    </AppCanvas>
		)
  }
});

