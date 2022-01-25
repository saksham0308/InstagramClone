import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import FormikPostUploader from "./FormikPostUploader";
// import { TouchableOpacity } from 'react-native-web'

const AddNewPost = ({ navigation }) =>
(
  <View style={styles.container}>
    <Header navigation={navigation} />
    {/* <FormikPostUploader navigation={navigation} /> */}
  </View>
)

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/000000/back.png"
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>

)



const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    paddingTop: 40,
  },
  headerText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 20
  }


});
export default AddNewPost;
