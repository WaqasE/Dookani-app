import React, { useRef, useState } from 'react';
import { Image, StyleSheet, View, Dimensions, StatusBar, TouchableOpacity, Text, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Checkbox from '../components/Form/Checkbox';
import GenderButton from '../components/Form/GenderButton';
import Input from '../components/Form/Input';
import SocialButton from '../components/Form/SocialButton';
import Submit from '../components/Form/Submit';
import colors from '../config/colors';

const { height, width } = Dimensions.get('screen');

export default function Auth() {
    const [hide, setHide] = useState(true)
    const [gender, setGender] = useState(true)
    const [updates, setUpdates] = useState(false)
    const [reg, setReg] = useState(false)
    const animatedValue = useRef(new Animated.Value(0)).current
    const onPress = () => {
        setReg(!reg)
        Animated.timing(
            animatedValue, {
            toValue: !reg ? 1 : 0,
            duration: 500,
            useNativeDriver: false
        }
        ).start()
    }


    const Login = () => {
        return (
            <Animated.View
                style={

                    {
                        transform: [
                            {
                                rotateY: animatedValue.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: ['0deg', '-90deg', '-180deg']
                                })
                            }
                        ]
                    }
                }
            >
                <View style={{
                    elevation: 5,
                    borderRadius: 6,
                    padding: 20,
                    backgroundColor: colors.primary,
                }}>
                    <Input
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCorrect={false}
                        specificStyles={{ marginBottom: 20 }}
                    />
                    <Input
                        placeholder='Password'
                        secureTextEntry={hide}
                        autoCorrect={false}
                        iconName={hide ? 'eye-off' : 'eye'}
                        onPress={() => setHide(!hide)}
                    />
                    <TouchableOpacity style={styles.link}>
                        <Text style={{ color: colors.secondary }}>Forget Password?</Text>
                    </TouchableOpacity>
                    <Submit title='Login' />
                    <View style={styles.socialWrapper}>
                        <SocialButton
                            title='facebook'
                            specificStyles={{ backgroundColor: '#4267B2' }}

                        />
                        <SocialButton
                            title='google'
                            specificStyles={{ backgroundColor: '#DB4437', borderRadius: 6 }}
                        />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ color: 'rgba(0,0,0,0.6)' }}>Are you not a member?</Text>
                        <TouchableOpacity style={{ marginLeft: 5 }} onPress={onPress}>
                            <Text style={{ color: colors.secondary }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View >
        )
    }

    const Signup = () => {
        return (
            <Animated.View
                style={

                    {
                        transform: [
                            {
                                rotateY: animatedValue.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: ['0deg', '-90deg', '-180deg']
                                })
                            }
                        ]
                    }
                }
            >
                <View style={{
                    elevation: 5,
                    borderRadius: 6,
                    padding: 20,
                    backgroundColor: colors.primary,
                }}>
                    <Input
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCorrect={false}
                        specificStyles={{ marginBottom: 10 }}
                    />
                    <Input
                        placeholder='Password'
                        secureTextEntry={hide}
                        autoCorrect={false}
                        iconName={hide ? 'eye-off' : 'eye'}
                        onPress={() => setHide(!hide)}
                    />
                    <Text style={{ color: 'rgba(0,0,0,0.6)', marginTop: 5, width: '100%', marginBottom: 15 }}>Your password must contain a minimum of 7 characters and a maximum of 15 characters, including letters and numbers.</Text>
                    <Text style={{ color: 'rgba(0,0,0,0.6)', marginBottom: 5, width: '100%' }}>Gender</Text>
                    <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
                        <GenderButton title='Male' gender={gender} onPress={() => { setGender('Male') }} />
                        <GenderButton title='Female' gender={gender} onPress={() => { setGender('Female') }} />
                    </View>
                    <View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox updates={updates} onPress={() => { setUpdates(!updates) }} />
                            <Text style={{ color: 'rgba(0,0,0,0.6)' }}>I want to receive electronic messages to be informed about the campaigns.</Text>
                        </View>
                    </View>
                    <Submit title='Signup' />
                    <Text style={{ color: 'rgba(0,0,0,0.6)', marginBottom: 10 }}>By clicking Sign up, I accept the <TouchableWithoutFeedback><Text style={{ color: colors.secondary, textDecorationLine: 'underline' }}>terms of membership</Text></TouchableWithoutFeedback> and <TouchableWithoutFeedback><Text style={{ color: colors.secondary, textDecorationLine: 'underline' }}>protection from personal data.</Text></TouchableWithoutFeedback></Text>
                    <View style={styles.socialWrapper}>
                        <SocialButton
                            title='facebook'
                            specificStyles={{ backgroundColor: '#4267B2' }}

                        />
                        <SocialButton
                            title='google'
                            specificStyles={{ backgroundColor: '#DB4437', borderRadius: 6 }}
                        />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ color: 'rgba(0,0,0,0.6)' }}>Are you already a member?</Text>
                        <TouchableOpacity style={{ marginLeft: 5 }} onPress={onPress}>
                            <Text style={{ color: colors.secondary }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        )
    }



    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.betterHalf} />
            <View style={{ width: '100%', height: '100%', alignItems: 'center', paddingTop: 40 }}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Animated.View
                    style={
                        [
                            styles.wrapper,
                            {
                                transform: [
                                    {
                                        rotateY: animatedValue.interpolate({
                                            inputRange: [0, 0.5, 1],
                                            outputRange: ['0deg', '90deg', '180deg']
                                        })
                                    }
                                ],
                                marginTop: reg ? 20 : height / 2 - ((width / 1.1) / 2 + 140),
                            },

                        ]}
                >
                    {
                        !reg ? <Login /> : <Signup />
                    }
                </Animated.View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.03)'
    },
    betterHalf: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.secondary,
        position: 'absolute',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 100,
    },
    wrapper: {
        width: width / 1.15,
        backgroundColor: colors.primary,
        marginTop: height / 2 - ((width / 1.1) / 2 + 140),
        borderRadius: 6,
    },
    link: {
        width: '100%',
        alignItems: 'flex-end',
        marginVertical: 15
    },
    socialWrapper: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});