import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dettagli = (props) => {


  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default Dettagli;