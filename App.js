import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/writeStoryScreen';
import readStoryScreen from './screens/readStoryScreen';


export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Write : {screen : WriteStoryScreen},
  Read : {screen : readStoryScreen}
},
{
  defaultNavigationOptions :({navigation })=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      if (routeName==="Write") {
        return(
          <Image
          source = {require("./assets/write.png")}
          style = {{width : 40, height : 40 }}
          />
        )
      }
      else if (routeName==="Read") {
        return(
          <Image
          source = {require("./assets/read.png")}
          style = {{
            width : 40, height : 40
          }}
          />
        )
      }
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

