import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "./styles";
const Person = (props) => {
    const [flag, setFlag] = useState(false);
    return (
        <View>
            <Text style={{ width: 50, height: 50, backgroundColor: 'red' }}>Hello, i am person and my name is : {props.name} </Text>
            <Text style={[styles.class2, styles.class3]}>Hello, i am person and my name is : {props.name} </Text>

            {flag ? <Text>Flag true</Text> : <Text>Flag false</Text>}
        </View>
    )
}


// const styles = StyleSheet.create({
//     class1: {
//         width: 200,
//         height: 200,
//         backgroundColor: 'blue'
//     },
//     class2: {
//         width: 200,
//         height: 200,
//         backgroundColor: 'green'
//     },
//     class3: {
//         fontSize: 25
//     }
// })

export default Person;