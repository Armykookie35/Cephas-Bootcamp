import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Images from '../constants/Images'

const Ade = {
  male: "true"
}

const _layout = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.settings} style={{ height: 25, width: 25, marginTop: 20, alignSelf: 'flex-end', marginRight: 20 }} />
      <Text> English (US)</Text>
<<<<<<< HEAD
      <Image source={Images.facebook} style={{ height: 50, width: 50, borderRadius: 30, borderWidth: 1, borderColor: "#000", margin: 10 }} />
      <Image source={Images.pic3} style={styles.pic} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ojogo Mercy</Text>
=======
      <Text>Haffa</Text>
       <Image source={Images.facebook} style={{height:50,width:50,borderRadius:30,borderWidth:1,borderColor:"#000",margin:10}}/>
      <Image source={Images.pic3} style={styles.pic}/> 
      <Text style={{fontSize:20,fontWeight:'bold'}}>Ojogo Mercy</Text>
>>>>>>> 29572822a849ef2e1772f2135abe568b51cc9b11
      <Text>🔔99+ notifications</Text>
      <Text style={{ fontSize: 15, margin: 10 }}>By Proceeding, your'e agreeing to<Text style={{ color: '#87ceeb' }}> MTN's Terms</Text>  which includes letting Facebook request and recieve your phone number.<Text style={{ color: '#87ceeb' }}>Change Settings</Text> </Text>
      <Text style={{ color: '#ccc' }}>_____________________________________________</Text>
      <TouchableOpacity>
        <Text style={styles.button} >Log in</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, margin: 10, fontWeight: 'bold' }}>Login to another account</Text>
      <TouchableOpacity>
        <Text style={[styles.button, { backgroundColor: '#fff', color: '#0064e0', borderColor: '#0064e0', borderWidth: 2, marginTop: 3 }]} >Create new account</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, marginTop: 10, fontWeight: '600' }}>Meta</Text>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF7FE',
    alignItems: 'center',

  },
  pic: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 30,
    marginTop: 40,
    borderWidth: 6,
    borderColor: '#fff',
    overflow: 'hidden',
    elevate: 5,
  },
  button: {
    backgroundColor: '#0064e0',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    width: 300,
    height: 50,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 2,
    textAlign: 'center',
    fontSize: 15,
  },
});