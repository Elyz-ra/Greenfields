import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import TambahAuditScreen from '../screens/TambahAuditScreen';
import HasilAuditScreen from '../screens/HasilAuditScreen'; // Import HasilAuditScreen

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
    ResetPassword: ResetPasswordScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const MainStack = createStackNavigator(
  {
    MainMenu: MainMenuScreen,
    TambahAudit: TambahAuditScreen,
    HasilAudit: HasilAuditScreen, // Tambahkan rute untuk HasilAuditScreen
  },
  {
    initialRouteName: 'MainMenu',
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AppNavigator);
