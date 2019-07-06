import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import MyHomeScreen from '../Screens/Home'; 
import SideBar from './Sidebar'; 
import Login from './Login';
import Shopping from './Shopping'
 
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: MyHomeScreen,
    Login: Login,
    Shopping: Shopping
    
  }, {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  });
  
  const mapStateToProps = state => ({
    settings: state.settings
  });

  export default connect(mapStateToProps)(createAppContainer(MyDrawerNavigator));
  