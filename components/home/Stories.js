import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* <Text style={{ color: 'white' }}>Header</Text> */}
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <Image source={{ uri: story.image }}
                            style={styles.story} />
                        <Text style={styles.storyName}>{story.user.length > 7 ? story.user.slice(0, 7).toLowerCase() + '..' : story.user.toLowerCase()}</Text>
                    </View>

                ))}

            </ScrollView>
            {/* <Text style={{ color: 'white' }}>Stories</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    story: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#ff8501',
        marginTop: 10,

    },
    storyName: {
        color: 'black',
        marginLeft: 10,
        marginTop: 5
    }
})
export default Stories
