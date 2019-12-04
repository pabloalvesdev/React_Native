import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from 'react-navigation'
import Home from "../Pages/Home/home";
import Profile from "../Pages/Profile/profile";

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Profile: Profile,
});

export default TabRouter = createAppContainer(TabNavigator);