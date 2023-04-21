import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from "./Components/Screens/Home";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Start" component={LoginSplash} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle:null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginSplash = ({ navigation }) => {

  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.6, backgroundColor: "rgba(0, 0, 0, 1)" }}
      source={require("./assets/login_splash_backdrop.jpg")}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.6 }}></View>

        <View style={{ flex: 0.4, margin: 16 }}>
          <Text
            style={{
              fontSize: 28,
              color: "white",
            }}
          >
            Enjoy your fast food only in foodie moodie
          </Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
            Here is the place to buy food you want
          </Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    width: 300,
    height: 60,
    backgroundColor: "#F44648",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },

  button: {
    width: 300,
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    margin: 8,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});

export default App;
