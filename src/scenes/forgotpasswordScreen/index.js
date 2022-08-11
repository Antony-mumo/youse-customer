import React from "react";
import { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useStateValue } from "_utils/StateProvider";
import LogoAtom from "_components/atoms/Logo.atom";
import BlueText from "_components/atoms/BlueText.atom";
import TextInputMole from "_components/molecules/TextInput.mole";
import * as yup from "yup";
import { Formik, Field } from "formik";

import { AntDesign } from '@expo/vector-icons';
import LightInactiveText from "_components/atoms/LightInactiveText.atom";
import { useEffect } from "react/cjs/react.development";
import * as actions from '_services/actions'; 

import ButtonAtom from "_components/atoms/Button.atom";
import ClickableUnderlinedTextAtom from "_components/atoms/clickableUnderlinedText.atom";
import { DEEP_BLUE, PRIMARY } from "_styles/colors";
import CustomFloatingContent from "_components/atoms/CustomFloatingContent.atom";
import { margin, padding } from "_styles/mixins";
import { requestOtp } from "_services/otpReset.service";


const forgot_password_screen_texts = {
    kindly_input_phone_number_to: 'Kindly input phone number to',
    phone_placeholder: "07_ _ _ _ _ _ _ _ _ _ _",
    reset_password:'reset password',
    use_email_address_instead: 'use email address instead',
    proceed_button: 'Proceed',
    signin_instead: 'Sign in instead',
    phoneNumber_is_required: 'Phone Number is requred',
    your_email_address: 'your email address',
    use_phone_number_instead: 'use phone number instead',
    please_enter_a_valid_email : 'Please enter a valid email',
    email_is_required : 'Email is required',
}
const ForgotPasswordScreen = ({navigation}) =>{

    const [state, setState] = useState('phoneNumber')


    const [ { appSettings, loggedIn, submittingPassResetRequest,otpRequestSent, error }, dispatch ] = useStateValue();

    useEffect(()=>{
        loggedIn && loggedIn===true && navigation.navigate('Home')
      })

    useEffect(()=>{
      otpRequestSent && otpRequestSent===true && navigation.navigate('Otp')
    },[otpRequestSent])

    // .matches(phoneRegExp, 'Phone number is not valid') 
    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const emailResetValidationSchema = yup.object().shape({
      email: yup
        .string()
        .email( forgot_password_screen_texts.please_enter_a_valid_email )
        .required( forgot_password_screen_texts.email_is_required ),
    })

    const phoneResetValidationSchema = yup.object().shape({
      phoneNumber: yup
        .string()
        .matches(/(\d){10}\b/, 'incomplete phone number' )
        .required( forgot_password_screen_texts.enter_phone_number ),
    })


  const navigateBackToLogin = () => navigation.navigate('Login')

     
  const requestUserOTP = (phoneNumber) => {
    dispatch({
      type : actions.OTP_REQUEST,
      otp: {phoneNumber : phoneNumber}
    })
    requestOtp(phoneNumber)
    .then(() => {
      dispatch({
        type: actions.OTP_REQUEST_SUCCESSFUL
      })
    }).catch(err=>{
      dispatch({
        type : actions.OTP_REQUEST_ERROR,
        error: err.message
      })
    }

    )
  }
    const sendPasswordResetRequest = (phoneNumber, email) => {
      console.log('send Password Reset Request');
      if(phoneNumber!=""){
        requestUserOTP(phoneNumber)
      }
  }

    return(
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" translucent={false} backgroundColor={PRIMARY} />
            <CustomFloatingContent>
                <Pressable style={padding(5,5,5,5)} onPress={()=>navigation.goBack()}>
                  <AntDesign name="arrowleft" size={30} color={DEEP_BLUE} />
                </Pressable>
            </CustomFloatingContent>
            <ScrollView>
            <LogoAtom/>
            <View style={styles.middle}>
                <BlueText
                text = {forgot_password_screen_texts.kindly_input_phone_number_to}
                />
                 <BlueText
                text = {forgot_password_screen_texts.reset_password}
                />

            </View>
        <Formik
          validationSchema={
            state == "phoneNumber"
              ? phoneResetValidationSchema
              : emailResetValidationSchema
          }
          initialValues={{ phoneNumber: "", email: "" }}
          onSubmit={(values) =>
            sendPasswordResetRequest(values.phoneNumber, values.email)
          }
        >
          {({ handleSubmit, isValid }) => (
            <>
              <View style={styles.inputField}>
                {state === "phoneNumber" && (
                  <Field
                    component={TextInputMole}
                    name='phoneNumber'
                    placeholder={forgot_password_screen_texts.phone_placeholder}
                    styling={styles.fullInputArea}
                    keyboardType='numeric'
                  />
                )}

                {state === "email" && (
                  <Field
                    component={TextInputMole}
                    name='email'
                    placeholder={
                      forgot_password_screen_texts.your_email_address
                    }
                    styling={styles.fullInputArea}
                    keyboardType='email-address'
                  />
                )}
              </View>

              {state === "phoneNumber" && (
                <Pressable
                  style={styles.emailInsteadContainer}
                  onPress={() => setState("email")}
                >
                  <LightInactiveText
                    style={styles.emailInsteadText}
                    text={
                      forgot_password_screen_texts.use_email_address_instead
                    }
                  />
                </Pressable>
              )}
              {state === "email" && (
                <Pressable
                  style={styles.emailInsteadContainer}
                  onPress={() => setState("phoneNumber")}
                >
                  <LightInactiveText
                    style={styles.emailInsteadText}
                    text={forgot_password_screen_texts.use_phone_number_instead}
                  />
                </Pressable>
              )}
                
            <View style={styles.bottomContainer}>
              <ButtonAtom styling ={[styles.button]} active = { isValid && !false  } text={forgot_password_screen_texts.proceed_button} action={handleSubmit}/>
          
            <ClickableUnderlinedTextAtom  text={forgot_password_screen_texts.signin_instead} action={navigateBackToLogin}/>

        </View>
        </>
                )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY,
        flex: 1,
        width: "100%",
        height: '100%',
        alignItems: "center",
         justifyContent: "center",
    },
    statusbar: {
        height: StatusBar.currentHeight,
        width: "100%",
      },
      middle: {
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center",
      },
      inputField: {
        ...margin(50,0,30,0),
         alignItems: "center",
        
      },
      fullInputArea: {
        width: 310,
      },
      emailInsteadContainer: {
        
        
        alignItems: "flex-end",
      },
      button: {
        marginTop: "10%",
        width: 290,
        alignSelf: "center"
    
      },
     
})      

export default ForgotPasswordScreen;
