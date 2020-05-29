import React from 'react';
import { Stylesheet, View } from 'react-native';
import { Header } from 'react-native-elements';

class AppHeader extends React.Component {
    render() {
        return (
            <Header
                centerComponent={{ text: `SC Ledger`, style: { color: '#fff' } }}
                statusBarProps={{ translucent: true }}
            />
        )
    }
}

export default AppHeader;