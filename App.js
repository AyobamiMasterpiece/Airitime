import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input from "./components/Input";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "./components/Button";
import ValidateInput from "./util/validateInput";
export default function App() {
  const [network, setNetwork] = useState("Mtn");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [errorNum, setErrorNum] = useState("");
  const [errorAmt, setErrorAmt] = useState("");
  const [isFormValidate, setIsFormValidate] = useState({
    ["Phone number"]: true,
    amount: true,
  });

  const changeFormValidation = (name, arr) => {
    let value = null;
    if (name == "amount") {
      value = arr[0];
    } else {
      value = arr[1];
    }
    setIsFormValidate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleValidation = (number, amount, name) => {
    const [errornum, erroramt, isAmountValid, isNumberValid] = ValidateInput(
      amount,
      number
    );
    changeFormValidation(name, [isAmountValid, isNumberValid]);
    setErrorAmt(erroramt);
    setErrorNum(errornum);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.title}> Buy Airtime</Text>
        <View style={styles.form}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              // backgroundColor: "pink",
              // justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                marginVertical: 30,
              }}
            >
              <Text>Network</Text>
              <Picker
                selectedValue={network}
                onValueChange={(itemValue, itemIndex) => setNetwork(itemValue)}
                style={{
                  backgroundColor: "white",
                  marginVertical: 10,
                }}
                // mode={"dropdown"}
                dropdownIconColor={"black"}
                prompt="Enter a network"
                onFocus={() => {
                  Keyboard.dismiss();
                }}
              >
                <Picker.Item label="Mtn" value="Mtn" color="#FFD700" />
                <Picker.Item label="Glo" value="Glo" color="#9ACD32" />
                <Picker.Item label="Airtel" value="Airtel" color="#FF6347" />
                <Picker.Item label="9mobile" value="9mobile" color="#228B22" />
              </Picker>
            </View>

            <Input
              placeholder={"Enter phone number"}
              type={"number-pad"}
              max={11}
              name="Phone number"
              value={number}
              onchange={(e) => {
                setNumber(e);
                handleValidation(e, amount, "Phone number");
              }}
              error={errorNum}
              iserror={isFormValidate["Phone number"] == false}
            ></Input>
            <Input
              placeholder={"Enter Amount"}
              max={7}
              type={"decimal-pad"}
              name="Amount"
              value={amount}
              onchange={(e) => {
                setAmount(e);

                handleValidation(number, e, "amount");
              }}
              // number={number}
              error={errorAmt}
              iserror={isFormValidate["amount"] == false}
              // amount={amount}
            ></Input>
            <Button
              disabled={
                number == "" ||
                amount == "" ||
                errorAmt !== "" ||
                errorNum !== ""
              }
            >
              Buy
            </Button>
          </ScrollView>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    marginTop: 10,

    fontSize: 20,
  },
  form: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 20,
    flex: 1,
  },
});
