import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Colors } from '_styles';

import ErrorTextAtom from "_components/atoms/ErrorText.atom";

import { useState } from 'react';
import CustomTextInput from '_components/atoms/CustomOtpTextInput.atom';
import { isAndroid, row } from '_styles/mixins';
/**
 * 
 * @param {*} param0 
 * pass styles, if not passed default style is used
 * pass placeholder
 * pass 
 * @returns a text input object with handled
 */
const OtpInputMole = ( props ) =>{
    const {
        field : {name, onBlur, onChange, value},
        form : {errors,touched, setFieldTouched},
        container : container ,
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name] && true
    
    const [otpArray, setOtpArray] = useState(['', '', '', '','','']);

    useEffect(()=>{
        setOtpArray(value.split(""))
    },[value])


    const [submittingOtp, setSubmittingOtp] = useState(false);

  // TextInput refs to focus programmatically while entering OTP
  const firstTextInputRef = useRef('');
  const secondTextInputRef = useRef('');
  const thirdTextInputRef = useRef('');
  const fourthTextInputRef = useRef('');
  const fifthTextInputRef = useRef('');
  const sixthTextInputRef = useRef('');

    const refCallback = textInputRef => node => {

        textInputRef.current = node;
      };

    // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
    // using onOtpKeyPress for this purpose
    const onOtpChange = index => {
        return value => {
        if (isNaN(Number(value))) {
            // do nothing when a non digit is pressed
            return;
        }

        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);

        // console.log(index, 'otpChange')
        // console.log(otpArrayCopy.join(''))
        onChange(name)(otpArrayCopy.join(''))

        // auto focus to next InputText if value is not blank
        if (value !== '') {
            if (index === 0) {
            secondTextInputRef.current.focus();
            } else if (index === 1) {
            thirdTextInputRef.current.focus();
            } else if (index === 2) {
            fourthTextInputRef.current.focus();
            }else if (index === 3) {
            fifthTextInputRef.current.focus();
            }else if (index === 4) {
            sixthTextInputRef.current.focus();
            }
        }
        };
    };

    // only backspace key press event is fired on Android
    // to have consistency, using this event just to detect backspace key press and
    // onOtpChange for other digits press
    const onOtpKeyPress = index => {
        return ({nativeEvent: {key: value}}) => {
        // auto focus to previous InputText if value is blank and existing value is also blank
        if (value === 'Backspace') {
            // index = otpArray.length;
            if (index === 1) {
            firstTextInputRef.current.focus();
            } else if (index === 2) {
            secondTextInputRef.current.focus();
            } else if (index === 3) {
            thirdTextInputRef.current.focus();
            } else if (index === 4) {
            fourthTextInputRef.current.focus();
            } else if (index === 5) {
            fifthTextInputRef.current.focus();
            }

            /**
             * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
             * doing this thing for us
             * todo check this behaviour on ios
             */
            if (isAndroid && index > 0 && !otpArray[index]) {
                const otpArrayCopy = otpArray.concat();
                otpArrayCopy[index - 1] = null; // clear the previous box which will be in focus
                setOtpArray(otpArrayCopy);
                onChange(name)(otpArrayCopy.join(''))
                // console.log(otpArrayCopy.join(''))
            }
        }
        };
    };

    return(
        <>
        
            <View style={[ 
                container && { ...container },
                {...styles.container}
            ]}>

            <View style={row('center')}>
                 {[
              firstTextInputRef,
              secondTextInputRef,
              thirdTextInputRef,
              fourthTextInputRef,
              fifthTextInputRef,
              sixthTextInputRef,
            ].map((textInputRef, index) => (
            <CustomTextInput
                caretHidden
                value={otpArray[index]}
                index={index}
                onKeyPress={onOtpKeyPress}
                onChangeText={onOtpChange}
                keyboardType={'numeric'}
                maxLength={1}
                hasError = {hasError}
                autoFocus={index === 0 ? true : undefined}
                inputRef={textInputRef}
                refCallback={refCallback}
                key={index}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
              />))}
            </View>
               
            <ErrorTextAtom error = {touched[name] && errors[name]}/>
        </View>
    </>
    )
} 

const styles = StyleSheet.create({
    container:{
       
    },
    inputField: {
        // position : 'absolute',
        backgroundColor: Colors.GRAY,
        height: 50,
        width: "80%",
        maxWidth: 500,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        marginEnd: 10,
    },

    errorInput: {

    },

    errorText: {
        marginStart:40,
        color:Colors.ORANGE
    },
    gridPad: { padding: 30 },
    txtMargin: { margin: 3 },
    inputRadius: { textAlign: 'center' }

})

export default OtpInputMole