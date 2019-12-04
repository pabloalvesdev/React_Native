import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, TabRouter } from "react-navigation";
import Login from "../Pages/Login/login";
import Sigin from "../Pages/Sigin/sigin";
import Details from "../Pages/Details/details";

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Sigin: {
        screen: Sigin,
        navigationOptions: {
            header: null
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null
        }
    }
});

export default Rota = createAppContainer(AppNavigator);