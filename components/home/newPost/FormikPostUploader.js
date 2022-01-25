import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import { Button } from 'react-native-elements'
import validUrl from 'valid-url'


const placeHolderImage = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
const uploadPostSchema = Yup.object().shape({
    imageUUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character'),
})




const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(placeHolderImage)
    return (
        <Formik initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={values => {
                console.log(values)
                console.log('Your Post was Submitted Successfully')
                navigation.goBack()
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >

            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid
            }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : placeHolderImage }} style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TextInput style={{ color: 'black', fontSize: 20 }} placeholder='Write a caption...' placeholderTextColor='gray' multiline={true} onChangeText={handleChange('caption')} onBlur={handleBlur('caption')} value={values.caption} />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput onChange={e => setThumbnailUrl(e.nativeEvent.text)} style={{ color: 'black', fontSize: 18 }} placeholder='Enter Image Url' placeholderTextColor='gray' onChangeText={handleChange('imageUrl')} onBlur={handleBlur('imageUrl')} value={values.imageUrl} />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={isValid} />
                    {/* disabled={!isValid} */}
                </>
            )}
        </Formik>

    )
}

export default FormikPostUploader
