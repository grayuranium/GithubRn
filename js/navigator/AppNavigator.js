import {createSwitchNavigator,createStackNavigator,createAppContainer} from 'react-navigation'
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";

const AppWelcomeNav = createStackNavigator({
    Welcome:{
        screen:WelcomePage,
        navigationOptions:{
            header:null,
        },
    },
})

const AppHomeNav = createStackNavigator({
    Home:{
        screen: HomePage,
        navigationOptions:{
            header:null,
        },
    },
    Detail:{
        screen:DetailPage,
    }
})

const AppNav = createSwitchNavigator({
    AppWelcome:{
        screen:AppWelcomeNav,
    },
    AppHome:{
        screen:AppHomeNav,
    },
},{
    initialRouteName:'AppWelcome',
})

export const AppContainer = createAppContainer(AppNav);