import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';

export default function HistoryView() {
    return (
        <View style={styles.historyContainer}>
            <View style={styles.historyTitle}>
                <Text h2>Credit History</Text>
                <Divider />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        backgroundColor: 'pink',
    },
    lineRule: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})