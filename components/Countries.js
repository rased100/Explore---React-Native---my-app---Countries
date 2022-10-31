import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country';

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [sResult, setSResult] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => {
                setSResult(data);
                setCountries(data);
            });
    }, []);

    const handleSearch = text => {
        const filtered = countries.filter(c => c.name.common.includes(text));
        setSResult(filtered);
    }

    return (
        <ScrollView>
            <Text style={styles.header}>Countries: {countries.length}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleSearch}
                // value={number}
                placeholder="Search Country"
            // keyboardType="numeric"
            />
            {
                sResult.map(country => <Country country={country} key={country.name.common}></Country>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'blue'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})