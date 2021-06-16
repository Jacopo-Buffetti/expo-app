// import React from 'react';
// import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import logo from './assets/Logo-bianco.png';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/*Questa é in locale per caricarla da url*/}
//       <Image source={logo} style={styles.logo} />
//       {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />*/}
//
//       {/*<Text style={{color: '#ff0000', fontSize: 18}}>  ==> STILE IN LINEA    */}
//       <Text style={styles.instructions} >
//         To share a photo from your phone with a friend, just press the button below!
//       </Text>
//
//
//       <TouchableOpacity onPress={() => alert('Me se apre pure l\'alert!')} style={styles.button}>
//         <Text style={styles.buttonText}>Pick a photo</Text>
//       </TouchableOpacity>
//
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 305,
//     height: 159,
//     marginBottom: 10,
//   },
//   instructions: {
//     color: '#888',
//     fontSize: 18,
//     marginHorizontal: 15,
//   },
//   button: {
//     backgroundColor: "blue",
//     padding: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//   },
// });


// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from "./pages/Home/Home";
// import Dettagli from "./pages/Dettagli/Dettagli";
//
//
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Home/>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Dettagli')}
//       />
//     </View>
//   );
// }
//
// function DettagliPages() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       < Dettagli/>
//     </View>
//   );
// }
//
// const Stack = createStackNavigator();
//
// function App({ navigation }) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerRight: () => (
//               <Button
//                 onPress={() => navigation.navigate('Dettagli')}
//                 title="Info"
//                 color="#00cc00"
//               />
//             ),
//           }}
//         />
//         <Stack.Screen name="Dettagli" component={DettagliPages} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// export default App;

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cocktails!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'menu'
                : 'menu-outline';
            } else if (route.name === 'Cocktails') {
              iconName = focused ? 'wine' : 'wine-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cocktails" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
