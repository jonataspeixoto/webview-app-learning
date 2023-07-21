import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden />
            <WebView source={{ uri: 'https://cursos.dankicode.com'}} />
        </View>
    );
}

const styles = StyleSheet.create({

});
