FlowRouter.route('/', {
	name: 'home',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
    	{
    		
    		content: <HomeLayout />
    	}
    );
  },
  triggersExit: []
});

FlowRouter.route('/how-it-works', {
  name: 'howItWorks',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <HowItWorks />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/profile', {
  name: 'profile',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <Profile />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <DashBoard />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/friend-list', {
  name: 'friendList',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        header: <FriendBar />,
        content: <FriendList />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/confirm-list', {
  name: 'confirmList',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <ConfirmList />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/selfie', {
  name: 'selfie',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <SelfieView />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/checking-in', {
  name: 'checkingIn',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <CheckingIn />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/checking-out', {
  name: 'checkingOut',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <CheckingOut />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/checked-in', {
  name: 'checkedIn',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <CheckedIn />
      }
    );
  },
  triggersExit: []
});


FlowRouter.route('/leave', {
  name: 'leave',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <LeaveView />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/fail', {
  name: 'fail',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <Fail />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/pass', {
  name: 'pass',
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  action() {
    ReactLayout.render(MainLayout, 
      {
        
        content: <Pass />
      }
    );
  },
  triggersExit: []
});

FlowRouter.route('/business-list', {
  triggersEnter: [function(context,redirect) {$('html,body').scrollTop(0)}],
  name: "businessList",
  action() {
    ReactLayout.render(MainLayout, 
      {
        header: <BusinessBar />,
        content: <BusinessList />
      }
    )
  }
});