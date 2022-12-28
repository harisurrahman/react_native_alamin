import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
} from "react-native";
import surasList from "../model/model-sura-list";

const suras = surasList();
const Sura = ({ originalName }) => (
  <View style={styles.item}>
    <View style={styles.leftItem}>
      <Image source={require("../assets/kaba.png")} />
    </View>
    <Text style={styles.centerItem}>{originalName}</Text>
    <View style={styles.leftItem}></View>
  </View>
);
const SuraScreen = () => {
  const renderItem = ({ item }) => <Sura originalName={item.originalName} />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={suras}
          renderItem={renderItem}
          keyExtractor={(item) => item.sid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    padding: 20,
    backgroundColor: "#fff",
    fontSize: 24,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(230, 230, 255)",
  },
  leftItem: {
    width: 30,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    borderColor: "black",
  },
  centerItem: {
    paddingLeft: 10,
    fontSize: 20,
  },
  container: { marginHorizontal: 10 },
});

export default SuraScreen;
