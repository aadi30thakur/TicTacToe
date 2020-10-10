import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.a}>
      <View style={styles.b}>
        <Text style={styles.text}>Tic Tac Toe</Text>
      </View>

      <View style={styles.view}>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
      </View>

      <View style={styles.view}>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
      </View>

      <View style={styles.view}>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
        <View>
          <Image source={require("./assets/favicon.png")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#212845",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  b: {
    flex: 1,
    marginTop: 20,
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
