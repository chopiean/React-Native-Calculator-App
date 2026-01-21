import { useState } from "react";
import { TextInput } from "react-native";

export default function Calculator() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const toNumber = (value: string): number | null => {
    const cleaned = value.trim().replace(",", ".");
    if (cleaned === "") return 0;

    const n = Number(cleaned);
    return Number.isNaN(n) ? null : n;
  };
  const handleSum = () => {
    const n1 = toNumber(a);
    const n2 = toNumber(b);

    if (n1 === null || n2 === null) {
      Alert.alert("Invalid input", "Please enter valid numbers.");
      return;
    }
    setResult(n1 + n2);
  };

  const handleSubtract = () => {
    const n1 = toNumber(a);
    const n2 = toNumber(b);

    if (n1 === null || n2 === null) {
      Alert.alert("Invalid input", "Please enter valid numbers.");
      return;
    }
    setResult(n1 - n2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result : {result}</Text>

      <TextInput
        style={styles.input}
        value={a}
        onChangeText={setA}
        placeholder="First number"
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={styles.input}
        value={b}
        onChangeText={setB}
        placeholder="Second number"
        keyboardType="numeric"
      ></TextInput>

      <View style={styles.buttonRow}>
        <View style={styles.buttonBox}>
          <Button title="+" onPress={handleSum}></Button>
        </View>

        <View style={styles.buttonBox}>
          <Button title="-" onPress={handleSubtract}></Button>
        </View>
      </View>
    </View>
  );
}
