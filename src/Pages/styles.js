import { StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    //STATUS BAR
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});

export default styles;