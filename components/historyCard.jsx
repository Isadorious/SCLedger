import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';

export default function HistoryCard(props) {
    const dateTime = `${props.history.dateTime}`
    return (
        <View>
            <Card title={props.history.reason}>
                <Text>{props.history.creditModifier}</Text>
                <Text>{dateTime}</Text>
            </Card>
        </View>
    )
}