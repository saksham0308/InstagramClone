import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
// import AddNewPost from '../components/home/newPost/AddNewPost'
import AddNewPost from '../components/home/newPost/AddNewPost'

const NewPostScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <AddNewPost navigation={navigation} />
        </SafeAreaView>
    )
}

export default NewPostScreen
