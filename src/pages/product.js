import React from 'react';
import { WebView } from 'react-native';

const Product = ({ navigation }) => {
    return (
        <WebView source={{ uri: navigation.state.params.product.url }} />
    );
}

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
    headerTintColor: '#FFF',
    headerStyle: {
        backgroundColor: '#DA552F'
    },
});

export default Product;
