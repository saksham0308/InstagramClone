import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/ios/50/000000/like--v2.png',
        likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png'
    },
    {
        name: 'Comment',
        imageUrl: "https://img.icons8.com/ios/100/000000/send-comment.png"
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/ios-glyphs/60/000000/share--v1.png'

    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-Save-social-media-bearicons-gradient-bearicons.png'
    }
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            {/* <Divider width={1} orientation='vertical' /> */}
            {/* <Text>boom</Text> */}
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                {/* <Comments post={post} /> */}
            </View>

        </View>
    )
}
const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center'
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: 'black', marginLeft: 10, fontWeight: '700' }}>
                {post.user}
            </Text>
        </View>

        <Text style={{ color: 'black', fontWeight: '900', fontSize: 22, fontWeight: '700', paddingBottom: 10, marginTop: 10, paddingRight: 10, transform: [{ rotate: '90deg' }] }}>...</Text>

    </View>
)
// const Comments = ({ post }) => (
//     <>
//         {post.comments.map((comment, index) => (
//             <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
//                 <Text style={{ color: 'black' }}>
//                     <Text style={{ fontWeight: 700 }}>{comment.user}</Text>
//                     {comment.comment}
//                 </Text>
//             </View>
//         ))}
//     </>
// )
// A. No comment so dont render component
// B. 1 Comment render only
// C, More than 1 comment so render with s/es
const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View
                {post.comments.length > 1 ? ' all' : ''}
                {' '}
                {post.comments.length}
                {post.comments.length > 1 ? ' comments' : ' comment'}
            </Text>
        )}
    </View>


)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{ height: '100%', resizeMode: 'cover' }}

        />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftFooterIconContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon, styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>

    </View>

)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)
const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'black', fontWeight: '700' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>

)
const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'black' }}>
            <Text style={{ fontWeight: '700' }}>{post.user} </Text>
            <Text>{post.caption}</Text>
        </Text>
    </View>

)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 1.6,
        borderColor: '#ff8501',
        // marginTop: 10,

    },
    footerIcon: {
        width: 33,
        height: 33
    },
    leftFooterIconContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
        // marginLeft: 30
    }

})
export default Post;
