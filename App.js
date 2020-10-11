import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
const circle = require("./assets/circle.png");
const App = () => {
  const [game, setGame] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [player, setPlayer] = useState(1);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    setGame([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setPlayer(1);
  };
  const winner = () => {
    const arr = game;
    var sum = 0;
    for (let i = 0; i < 3; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) {
        return 1;
      }
      if (sum === -3) {
        return -1;
      }
    }
    /* --------------------------------- column --------------------------------- */
    for (let i = 0; i < 3; i++) {
      sum = arr[0][1] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        return 1;
      }
      if (sum === -3) {
        return -1;
      }
    }
    /* --------------------------------- dignals -------------------------------- */
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) {
      return 1;
    }
    if (sum === -3) {
      return -1;
    }
    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum === 3) {
      return 1;
    }
    if (sum === -3) {
      return -1;
    }
    return 0;
  };

  const checkimage = (row, col) => {
    var arr = game[row][col];
    switch (arr) {
      case 1:
        return (
          <Image
            source={{
              height: 100,
              width: 100,
              uri:
                "https://pngimage.net/wp-content/uploads/2018/06/wrong-cross-png-5.png",
            }}
          />
        );
      case -1:
        return (
          <Image
            source={{
              height: 100,
              width: 100,
              uri:
                "https://www.freepngimg.com/thumb/shape/30052-8-circle-transparent-background.png",
            }}
          />
        );
      default:
        return (
          <Image
            source={{
              height: 100,
              width: 100,
              uri: "https://img.icons8.com/wired/64/000000/pencil.png",
            }}
          />
        );
    }
  };

  const onPressUpdate = (row, col) => {
    var val = game[row][col];
    if (val != 0) {
      return;
    }
    var crplr = player;
    var game1 = game;
    game1[row][col] = crplr;
    console.table(game1);
    setGame({ ...game1 });
    var newPayer = crplr === 1 ? -1 : 1;
    setPlayer(newPayer);

    var win = winner();
    if (win == 1 || win == -1) {
      console.log(win);

      Alert.alert("winner", `player ${win} won the game`, [
        {
          text: "OK",
          onPress: () => {
            initialize();
          },
        },
      ]);
    } else
      Alert.alert("Draw", `the game has be drawn!`, [
        {
          text: "OK",
          onPress: () => {
            initialize();
          },
        },
      ]);
  };

  return (
    <View style={styles.a}>
      <View style={styles.b}>
        <Text style={styles.text}>Tic Tac Toe</Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => onPressUpdate(0, 0)}>
          {checkimage(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressUpdate(0, 1)}>
          {checkimage(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressUpdate(0, 2)}>
          {checkimage(0, 2)}
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => onPressUpdate(1, 0)}>
          {checkimage(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressUpdate(1, 1)}>
          {checkimage(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressUpdate(1, 2)}>
          {checkimage(1, 2)}
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => onPressUpdate(2, 0)}>
          {checkimage(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressUpdate(2, 1)}>
          {checkimage(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressUpdate(2, 2)}>
          {checkimage(2, 2)}
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Button
          title="new game"
          onPress={() => {
            initialize();
          }}
        ></Button>
      </TouchableOpacity>
    </View>
  );
};

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

export default App;
