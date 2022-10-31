import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{country.name.common}</Text>
            <Image
                source={{
                    uri: country.flags.png

                }}
                style={{ width: 100, height: 100, marginBottom: 20 }}
            ></Image>
        </View>
    )
}