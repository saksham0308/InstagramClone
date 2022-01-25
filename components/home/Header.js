import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Firebase from '../../config/firebase'
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider'
const auth = Firebase.auth();
const Header = ({ navigation }) => {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <TouchableOpacity>
                    {/* <Text style={{ color: 'white' }}>Header</Text> */}
                    <Image
                        style={styles.logo}
                        source={require('../../assets/download2.png')}
                    // ../../assets/download1.png
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.iconsContainer}>
                {/* <Text style={styles.hackText}>By SAKSHAM</Text> */}
                {/* onPress={() => navigation.navigate('NewPostScreen')} */}
                <TouchableOpacity onPress={() => navigation.navigate('NewPostScreen')}>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/48/000000/plus.png"
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/48/000000/like--v1.png"
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignOut}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}></Text>

                    </View>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/48/000000/speech-bubble-with-dots.png"
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                {/* <Text style={{ color: 'white' }}>Dummy</Text>
                <Text style={{ color: 'white' }}>Dummy</Text> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    // hackText: {
    //     color: '#ff8501'
    //     // fontWeight: '1'


    // },
    logoContainer: {
        paddingTop: 10,
        // borderBottomColor: '#FF3250'
        // flexDirection: 'row',
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingTop: 30,
        // borderBottomColor: 'blue',
        // borderRadius: 20,
        // borderBottomColor: 'red'
    },
    iconsContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        // borderBottomColor: '#FF3250'
    },
    logo: {
        // paddingTop: 10,
        width: 120,
        height: 40,
        resizeMode: 'contain'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: "white",
        fontWeight: '600',
        // Text: "69"
    }
})
export default Header
