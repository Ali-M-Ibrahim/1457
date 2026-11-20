import { useState, useEffect } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='go to details' onPress={() => navigation.navigate("About",
        {
          id: "1",
          name: "Ali Ibrahim"
        }
      )}></Button>
    </View>
  )
};

const About = ({ route, navigation }) => {
  const { id, name } = route.params;
  return (
    <View>
      <Text>About Screen</Text>
      <Text>Id is : {id}</Text>
      <Text>Name is : {name}</Text>
      <Button title='go to details' onPress={() => navigation.push("About")}></Button>
      <Button title='go back' onPress={() => navigation.goBack()}></Button>

    </View>
  )
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;