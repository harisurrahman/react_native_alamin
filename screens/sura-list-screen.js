import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SoundPlayer from "react-native-sound-player";
import surasList from "../model/model-sura-list";
import { dowloadFile } from "../utility/file_operation";
import * as FileSystem from "expo-file-system";
const suras = surasList();
const reciter = "Abu-Bakr-Ash-Shaatree";
const Sura = ({ sid, originalName, revelationType, numberOfAyets }) => (
  <TouchableOpacity
    onPress={() => {
      SoundPlayer.loadUrl(
        `${FileSystem.documentDirectory}${reciter}/028039.mp3`
      );
      SoundPlayer.play();
    }}
  >
    <View style={styles.item}>
      <View style={styles.leftItem}>
        <Image source={revelationType} />
      </View>
      <Text style={styles.centerItem}>{originalName}</Text>
      <View style={styles.rightItem}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {numberOfAyets}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SuraScreen = () => {
  React.useEffect(() => {
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      "FinishedPlaying",
      ({ success }) => {
        console.log("finished playing", success);
      }
    );
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      "FinishedLoading",
      ({ success }) => {
        console.log("finished loading", success);
      }
    );
    _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
      "FinishedLoadingFile",
      ({ success, name, type }) => {
        console.log("finished loading file", success, name, type);
      }
    );
    _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      "FinishedLoadingURL",
      ({ success, url }) => {
        console.log("finished loading url", success, url);
      }
    );
  }, []);

  const renderItem = ({ item }) => (
    <Sura
      sid={item.sid}
      originalName={item.originalName}
      revelationType={
        item.revelationType == "Meccan"
          ? require("../assets/kaba.png")
          : require("../assets/madina.png")
      }
      numberOfAyets={item.numberOfAyets}
    />
  );

  return (
    <SafeAreaView style={{ flex: 0, backgroundColor: "rgb(124, 124, 247)" }}>
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
  },
  rightItem: {
    width: 50,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    color: "white",
    borderRadius: 25,
    backgroundColor: "rgb(124, 124, 247)",
  },
  centerItem: {
    paddingLeft: 10,
    fontSize: 20,
  },
  container: { marginHorizontal: 10 },
});

export default SuraScreen;
