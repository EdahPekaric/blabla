import * as React from 'react';
import {StyleSheet, Text, View, AsyncStorage, TouchableOpacity, Image} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function CartScreen({route}) {

  let {products} = route.params;

  async function purchase() {
    fetch('http://localhost:3000/dev/persons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products)
    })
            .then((response) => response.json())
            .then((res) => {
              console.log('Success ' + res);
            })
            .catch((error) => {
              console.error(error);
            });
  }

  return (
          <ScrollView style={styles.container} >
            {products && <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => purchase()}>
                <View style={{padding: 10, backgroundColor: 'gray', borderRadius: 10, width: 100, margin: 10}}>
                  <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>
                    Invite
                  </Text>
                </View>
              </TouchableOpacity>
            </View>}
            {products ? products.map(product =>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderColor: 'black'}}>
                              <Image source={{uri: product.Image}} style={{height: 50, width: 50, padding: 10}} />
                              <Text style={{padding: 10}}>{product.FullName}</Text>
                              <Text style={{padding: 10}}>{product.Gender}</Text>
                              <Text style={{padding: 10}}>{product.Age}</Text>
                            </View>
                    ) :
                    <View>
                      <Text>
                        Your Invitations are empty!
                      </Text>
                    </View>
            }
          </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});
