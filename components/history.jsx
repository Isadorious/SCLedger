import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import HistoryCard from './historyCard';

export default function HistoryView(props) {
    return (
        <View style={styles.historyContainer}>
            <View style={styles.historyTitle}>
                <Text h2>Credit History</Text>
                <Divider />
                {
                    props.history.map((historyItem, index) => {
                        return (
                            <HistoryCard key={index} history={historyItem} />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
    },
    lineRule: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})