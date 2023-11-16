import {} from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StatusBarStyle,
  StyleSheet,
  Text,
  StatusBar,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
const STYLES = ["default", "dark-content", "light-content"] as const;
export default function App() {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Login Screen</Text>
        <View style={styles.formContainer}>
          <TextInput label="Email" />
          <TextInput
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <Button
            mode="contained"
            style={styles.button}
            labelStyle={{ fontSize: 20 }}
          >
            Login
          </Button>
          <Text>
            Forgot Password?{" "}
            <Text style={{ fontWeight: "bold", color: "#E19898" }}>
              Click here
            </Text>
          </Text>
        </View>
        <StatusBar backgroundColor="#313866" barStyle={statusBarStyle} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
    flex: 1,
    alignItems: "center",
    minHeight: "100%",
  },
  formContainer: {
    gap: 30,
    width: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 70,
  },
  button: {
    borderRadius: 4,
    paddingTop: 6,
    paddingBottom: 6,
    fontWeight: "bold",
    backgroundColor: "#313866",
    alignItems: "center",
    justifyContent: "center",
  },
});
