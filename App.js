import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Input, Button, Text } from 'react-native-elements';
import Header from './components/header';

class App extends React.Component {
  state = {
    credits: 0,
    creditAmount: '0',
    history: [],
  }

  async componentDidMount() {
  }

  addCredits = async () => {
    const newCredits = this.state.credits + parseInt(this.state.creditAmount);
    this.setState({ credits: newCredits });
  }

  removeCredits = async () => {
    const newCredits = this.state.credits - parseInt(this.state.creditAmount);
    this.setState({ credits: newCredits });
  }

  render() {
    return (
      <ThemeProvider>
        <Header />
        <View style={styles.container}>
          <View stle={styles.aUECDisplay}>
            <Text h1 style={styles.aUECDisplay}>{this.state.credits}</Text>
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
          <View style={styles.filler}>
            {// Filler of 5 flex
            }
          </View>
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