import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SuraScreen from "./screens/sura-list-screen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarActiveTintColor: "pink",
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: "rgb(124, 124, 247)",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={SuraScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={{ color }}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "bell" : "bell-outline"}
              color={{ color }}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
