import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {AsyncStorage, Image, Button, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen({navigation}) {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    async function getItemsFromApi() {
      return fetch('http://localhost:3000/dev/persons')
              .then((response) => response.json())
              .then((items) => {
                setItems(items.data);
              })
              .catch((error) => {
                console.error(error);
              });
    }
    getItemsFromApi();
  });

  function addToCart(item) {
    if(cartItems.length === 0) {
      setCartItems([item]);
    } else {
      setCartItems(prevArray => [...prevArray, item]);
    }
  }

  return (
          <ScrollView style={styles.container}>
            {items.map(item =>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('PersonDetails', { item })}>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderColor: 'black'}}>
                    <Image source={{uri: item.Image}} style={{height: 50, width: 50, padding: 10}} />
                    <Text style={{padding: 10}}>{item.FullName}</Text>
                    <Text style={{padding: 10}}>{item.Gender}</Text>
                      <Text style={{padding: 10}}>{item.Age}</Text>
                  </View>
                </TouchableOpacity>
                <Button title='Add to invitations' onPress={() => addToCart(item)} />
              </View>

            )}
            <View style={{marginTop: 20}}>
              <Button title='Go to invitations' onPress={() => navigation.navigate('Invitations', {products: cartItems})} />
            </View>
          </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
