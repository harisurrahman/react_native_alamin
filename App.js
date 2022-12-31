import * as React from "react";
import { Button, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SuraScreen from "./screens/sura-list-screen";
import * as FileSystem from "expo-file-system";
import { createDirectory } from "./utility/file_operation";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: "rgb(124, 124, 247)",
        },
      }}
    >
      <Tab.Screen
        name="SuraList"
        component={SuraScreen}
        options={{
          tabBarLabel: "Home",
          headerStyle: {
            backgroundColor: "rgb(124, 124, 247)",
          },
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "view-list" : "view-list-outline"}
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

const fileExists = async () => {
  const uri = FileSystem.documentDirectory + "/images/about-jainasoft.png";
  let tmp = await FileSystem.getInfoAsync(uri);
  console.log(tmp);
};

const readFile = () => {
  return FileSystem.documentDirectory + "about-jainasoft.png";
};

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      <Image source={{ uri: readFile() }} style={{ width: 100, height: 100 }} />
      <Button title="Go to Home" onPress={() => createDirectory()} />
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
