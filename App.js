import { ScrollView, View } from 'react-native';
import { Badge, Button, PaperProvider, Text } from 'react-native-paper';
import Login from './screen/Login';
import ForgotPassword from './screen/ForgotPassword';
import OTP from './screen/OTP';
import Home_page from './screen/Home_page';
import Notification from './screen/Notification';
import My_Order from './screen/My_Order';
import Check_Out from './screen/Check_Out';
import Profile from './screen/Profile';
import Vouchers from './screen/Voucher';
import EditProfiles from './screen/EditProfiles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import Details from './screen/Details';
import Payment from './screen/Payment';
import Register from './screen/Register';
import Success from './screen/Success';

export default function App() {
  const Stack = createNativeStackNavigator()
  const theme = {
    "colors": {
      "primary": "rgb(16, 109, 32)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(157, 248, 152)",
      "onPrimaryContainer": "rgb(0, 34, 4)",
      "secondary": "rgb(82, 99, 79)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(213, 232, 206)",
      "onSecondaryContainer": "rgb(17, 31, 15)",
      "tertiary": "rgb(56, 101, 106)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(188, 235, 240)",
      "onTertiaryContainer": "rgb(0, 32, 35)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(252, 253, 246)",
      "onBackground": "rgb(26, 28, 25)",
      "surface": "rgb(252, 253, 246)",
      "onSurface": "rgb(26, 28, 25)",
      "surfaceVariant": "rgb(222, 229, 216)",
      "onSurfaceVariant": "rgb(66, 73, 64)",
      "outline": "rgb(114, 121, 111)",
      "outlineVariant": "rgb(194, 201, 189)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(47, 49, 45)",
      "inverseOnSurface": "rgb(240, 241, 235)",
      "inversePrimary": "rgb(130, 219, 126)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(240, 246, 235)",
        "level2": "rgb(233, 242, 229)",
        "level3": "rgb(226, 237, 223)",
        "level4": "rgb(224, 236, 220)",
        "level5": "rgb(219, 233, 216)"
      },
      "surfaceDisabled": "rgba(26, 28, 25, 0.12)",
      "onSurfaceDisabled": "rgba(26, 28, 25, 0.38)",
      "backdrop": "rgba(44, 50, 42, 0.4)",
      "info": "rgb(155, 68, 39)",
      "onInfo": "rgb(255, 255, 255)",
      "infoContainer": "rgb(255, 219, 208)",
      "onInfoContainer": "rgb(58, 11, 0)"
    }
  }
  return <Provider store={reduxStore}>
    <PaperProvider theme={theme}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login' >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Success' component={Success} />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Home'
            component={Home_page} />
          <Stack.Screen
            // options={{ headerShown: false }}
            name='Payment'
            component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </Provider>

}


