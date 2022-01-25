import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/material/48/000000/home--v5.png',
        inactive: 'https://img.icons8.com/material-outlined/48/000000/home--v2.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/150/000000/search--v1.png',
        inactive: 'https://img.icons8.com/ios/150/000000/search--v1.png'

    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/250/000000/instagram-reel.png',
        // inactive: 'https://img.icons8.com/ios/100/000000/instagram-reel.png'
        inactive: 'https://img.icons8.com/fluency/240/000000/instagram-reel.png'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/material/24/000000/shop--v1.png',
        inactive: 'https://img.icons8.com/material-outlined/48/000000/shop.png'
    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/material/48/000000/user--v1.png',
        inactive: 'https://img.icons8.com/material-outlined/48/000000/user--v1.png'
    },
]

const BottomTabs = ({ icons }) => {
    // const { user } = useContext(AuthenticatedUserContext);
    // const handleSignOut = async () => {
    //     try {
    //         await auth.signOut();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }}
                style={[
                    styles.icon,
                    icon.name == 'Profile' ? styles.profilePic() : null,
                    activeTab == 'Profile' && icon.name == activeTab ? styles.profilePic(activeTab) : null
                ]} />
        </TouchableOpacity>

    )
    return (
        <View style={styles.wrapper}>
            {/* <Divider width={0} orientation='vertical' /> */}
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    wrapper: {
        // position: 'absolute',
        // width: '100%',
        // bottom: '3%',
        // zIndex: 999,
        // backgroundColor: '#000'

    },
    icon: {
        width: 30,
        height: 30
    },
    container: {
        // color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    profilePic: (activeTab = '') => ({
        borderColor: '#000000',
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor: 50,
    })


})

export default BottomTabs
