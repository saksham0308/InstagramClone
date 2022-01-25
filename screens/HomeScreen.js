// import { StatusBar } from 'expo-status-bar';
// import { Divider } from "react-native-elements";
import React, { useContext } from 'react';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/post';
import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();

export default function HomeScreen({ navigation }) {
  // const { user } = useContext(AuthenticatedUserContext);
  // const handleSignOut = async () => {
  //   try {
  //     await auth.signOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Home Screen</Text> */}
      <Header navigation={navigation} />
      {/* <Stories /> */}
      <ScrollView>
        <Stories />
        <View
          style={{
            // borderBottomColor: 'gray',
            borderBottomWidth: 0.3,
            // borderWidth: 0.5,
            borderColor: '#DCDCDC',

          }}
        />
        {/* <Divider />
        <Divider
          style={{ width: "80%", margin: 20 }}
          color="#2089dc"
          insetType="left"
          subHeader="React native elements"
          subHeaderStyle={{}}
          width={1}
          orientation="horizontal"
        /> */}
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView >



    // <View style={styles.container}>
    //   <StatusBar style='dark-content' />
    //   <View style={styles.row}>
    //     <Text style={styles.title}>Welcome {user.email}!</Text>
    //     <IconButton
    //       name='logout'
    //       size={24}
    //       color='#fff'
    //       onPress={handleSignOut}
    //     />
    //   </View>
    //   <Text style={styles.text}>Your UID is: {user.uid} </Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 50,
    // paddingHorizontal: 12
  }
  // row: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 24
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: '#fff'
  // },
  // text: {
  //   fontSize: 16,
  //   fontWeight: 'normal',
  //   color: '#fff'
  // }
});
