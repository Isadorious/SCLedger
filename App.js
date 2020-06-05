import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemeProvider, Input, Button, Text, Divider } from 'react-native-elements';
import Header from './components/header';
import HistoryView from './components/history';

function App() {

  const [creditTotal, setCreditTotal] = useState(0);
  const [creditModifier, setCreditModifier] = useState('');
  const [creditHistory, setCreditHistory] = useState([]);

  async function addCredits() {
    let historyItem = {};
    const creditModifierAsInt = parseInt(creditModifier);

    if (creditModifierAsInt === 0) {
      alert("Please enter a value greater or less than 0");
      return;
    }

    const newCreditTotal = creditTotal + creditModifierAsInt;

    if (creditModifierAsInt < 0) historyItem.reason = `Purchases`;
    if (creditModifierAsInt > 0) historyItem.reason = `Earnings`;
    historyItem.creditModifier = creditModifierAsInt;
    historyItem.dateTime = new Date;

    let history = creditHistory;
    history.splice(0, 0, historyItem); // Push onto start of the array

    setCreditTotal(newCreditTotal);
    setCreditHistory(history);
  }

  return (
    <ThemeProvider>
      <Header />
      <View style={styles.container}>
        <View stle={styles.aUECDisplay}>
          <Text h1 style={styles.aUECDisplay}>{creditTotal} aUEC</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Input
            label='aUEC'
            value={`${creditModifier}`}
            onChangeText={value => setCreditModifier(value)}
            containerStyle={{ width: 270 }}
            inputStyle={{ textAlign: "right" }}
            placeholder="0"
          />
          <Button onPress={addCredits} containerStyle={styles.aUECButton} title="Update" />
        </View>
        <ScrollView style={styles.filler}>
          <HistoryView creditHistory={creditHistory} />
        </ScrollView>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInputContainer: {
    flexDirection: "row",
  },
  filler: {
    flex: 5,
  },
  aUECDisplay: {
    flex: 2,
    padding: 100,
  },
  aUECButton: {
    paddingTop: 5,
    height: 55,
    marginTop: 15,
    marginLeft: 10,
  },
  aUECDisplay: {
    textAlign: "center",
  }
});

export default App;