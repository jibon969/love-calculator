import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import {useState} from 'react';

const LoveCalculator = () => {
    const [maleName, setMaleName] = useState('');
    const [femaleName, setFemaleName] = useState('');
    const [loading, setLoading] = useState(false);
    const [lovePercentage, setLovePercentage] = useState([]);

    const calculateLove = () => {
        const API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${femaleName}&fname=${maleName}`;
        setLoading(true);
        fetch(API_URL, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                setLovePercentage(data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    if(loading){
        return(
            <View style={styles.container}>
                <Text style={styles.loading}>Loading .....</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Love Calculator</Text>
            <TextInput
                placeholder='Male Name'
                placeholderTextColor="#7C7C7C"
                style={styles.welcomeInput}
                value={maleName}
                onChangeText={text => setMaleName(text)}
            />
            <TextInput
                placeholder='Female Name'
                placeholderTextColor="#7C7C7C"
                style={styles.welcomeInput}
                value={femaleName}
                onChangeText={text => setFemaleName(text)}
            />

            <TouchableOpacity onPress={calculateLove}>
                <Text style={styles.submitBtn}>Calculate Result</Text>
            </TouchableOpacity>
            {
                lovePercentage?.percentage ?
                    <View style={styles.round}>
                        <Text style={styles.roundTitle}>{lovePercentage?.percentage}</Text>
                    </View> :
                    <Text/>
            }
            <View style={styles.conclusion}>
                <Text style={styles.result}>{lovePercentage?.result}</Text>
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff789b',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },

    loading:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:25
    },

    titleText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 10,
        color: "#1a0b1d",
    },
    input: {
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        fontSize: 18
    },
    result: {
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center",
        justifyCenter: "center",
    },
    round: {
        backgroundColor: "#f8f4ff",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyCenter: "center"
    },
    roundTitle: {
        fontSize: 20
    },
    conclusion: {
        padding: 5
    },

    welcomeInput: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "#FFF",
        color: "#0C0C0C",
        overflow: "hidden",
        width: "80%"

    },
    submitBtn: {
        padding: 7,
        backgroundColor: "#fff",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#ff789b",
        overflow: "hidden",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        marginBottom: 10
    },
});

export default LoveCalculator;
