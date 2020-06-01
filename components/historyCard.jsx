import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';

export default function HistoryCard(props) {
    return (
        <View>
            <Card title={props.history.reason}>
                <Text>{this.props.creditAmount}</Text>
                <Text>{this.props.dateTime}</Text>
            </Card>
        </View>
    )
}