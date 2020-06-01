import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemeProvider, Input, Button, Text, Divider } from 'react-native-elements';
import Header from './components/header';
import HistoryView from './components/history';

class App extends React.Component {
  state = {
    credits: 0,
    creditAmount: '0',
    history: [],
  }

  async componentDidMount() {
  }

  addCredits = async () => {
    let historyItem = {};
    const creditAmount = parseInt(this.state.creditAmount);

    if (creditAmount === 0) {
      alert("Please enter a value greater or less than 0");
      return;
    }

    const newCredits = this.state.credits + creditAmount;

    if (creditAmount < 0) historyItem.reason = `Purchases`;
    if (creditAmount > 0) historyItem.reason = `Earnings`;
    historyItem.creditAmount = creditAmount;
    historyItem.dateTime = new Date;

    let history = this.state.history;
    history.splice(0, 0, historyItem); // Push onto start of the array

    this.setState({ credits: newCredits, history: history });
  }

  render() {
    return (
      <ThemeProvider>
        <Header />
        <View style={styles.container}>
          <View stle={styles.aUECDisplay}>
            <Text h1 style={styles.aUECDisplay}>{this.state.credits} aUEC</Text>
          </View>
          <View style={styles.textInputContainer}>
            <Input
              label='aUEC'
              value={`${this.state.creditAmount}`}
              onChangeText={value => this.setState({ creditAmount: value })}
              containerStyle={{ width: 270 }}
              inputStyle={{ textAlign: "right" }}
            />
            <Button onPress={this.addCredits} containerStyle={styles.aUECButton} title="Update" />
          </View>
          <ScrollView style={styles.filler}>
            <HistoryView history={this.state.history} />
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }
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