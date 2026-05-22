import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IonIcons } from '@expo/vector-icons';

//páginas

//navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();
 
function Tabs(){
    return(
    <Tab.Navigator
            screenOptions={({route}) =>({
                headerShown: true,
                tabBarActiveTintColor: '#de1c1c',
                tabBarInactiveTintColor: '#00000000',
                tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'ellipse-outline';

          if (route.name === 'Atendimentos') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          if (route.name === 'Profissionais') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <IonIcons name={iconName} size={size} color={color} />;
          },
            })}
        >

        </Tab.Navigator>
    )
}