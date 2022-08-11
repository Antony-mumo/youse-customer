import React, { useState } from "react";
import * as Progress from "react-native-progress";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import MapView from "react-native-maps";
import { Colors } from "_styles";
import { __ } from "_utils/stringPicker";
import { AntDesign } from "@expo/vector-icons";
import JobItemMole from "_components/molecules/JobItem.mole";
import {
  DEEP_BLUE,
  GRAY_DARK,
  GRAY_LIGHT,
  ORANGE,
  WHITE,
} from "_styles/colors";
import { border, defaultPadding, margin, padding } from "_styles/mixins";
import {
  defaultMediumLargeText,
  defaultMediumSmallText,
  FONT_SIZE_12,
  FONT_SIZE_16,
  FONT_SIZE_24,
  FONT_SIZE_32,
  FONT_SIZE_40,
  FONT_SIZE_8,
  largeBoldText,
  largeExtraBoldText,
  mediumLargeBoldText,
  mediumLargeExtraBoldText,
  mediumSmallExtraBoldText,
  smallMediumBoldText,
} from "_styles/typography";
import * as yup from "yup";
import RBSheet from "react-native-raw-bottom-sheet";
import ThreeStepProgressBarMole from "_components/molecules/ThreeStepProgressBarMole.mole";
import CustomText from "_components/atoms/CustomText.atom";
import TransparentButtonAtom from "_components/atoms/TransparentButton.atom";
import Avatar from "_assets/image1.png";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Field, Formik } from "formik";
import LightInactiveText from "_components/atoms/LightInactiveText.atom";
import TextInputMole from "_components/molecules/TextInput.mole";
import ButtonAtom from "_components/atoms/Button.atom";
import ClickableUnderlinedTextAtom from "_components/atoms/clickableUnderlinedText.atom";
import { Entypo } from "@expo/vector-icons";
import PaymentInfo from "_components/organisms/payment.info";

const name = "John";

const workflows = [
  { number: 1, description: "order placement", activated: true },
  { number: 2, description: "service provision", activated: true },
  { number: 3, description: "order payment", activated: false },
];

const OrderPaymentScreen = ({ navigation }) => {
  const [paymentType, setPaymentType] = useState("mpesaPayBill");

  const mpesaResetValidationSchema = yup.object().shape({
    mpesaPayBill: yup
      .string()
      .matches(/(\d){10}\b/, "incomplete phone number")
      .required("insert PayBill Number"),
  });

  const [selectedWeight, setSelectedWeight] = useState({
    quantity: "2Hrs",
    price: "500",
  });
  const [loading, setLoading] = useState(false);

  const sendMpesaRequest = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate("PaymentDetail");
      console.log("PaymentDetailsScreen loading");
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        hidden={false}
        translucent={false}
        backgroundColor={Colors.WHITE}
      />
      <ScrollView>
        {loading ? (
          <View style={{ width: "100%", height: "100%" }}>
            <View style={{ ...margin(100, 15, 10, 15) }}>
              <View>
                <CustomText
                  text={"veryfying payment..."}
                  styling={{
                    ...largeExtraBoldText(DEEP_BLUE, "center"),
                    ...margin(30, 0, 30, 0),
                  }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Progress.Bar
                  unfilledColor={"#01bf71"}
                  indeterminate={true}
                  indeterminateAnimationDuration={500}
                  borderWidth={1}
                  borderColor={"#858583"}
                  width={220}
                  color={"#37E790"}
                  borderRadius={5}
                  animationType={"spring"}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ width: "100%", height: "100%" }}>
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                ...padding(0, 3, 0, 3),
              }}
            >
              <TouchableOpacity>
                <Entypo name='menu' size={24} color={Colors.DEEP_BLUE} />
              </TouchableOpacity>
            </View>
            <View style={{ ...margin(0, 0, 10, 0), width: "100%" }}>
              <ThreeStepProgressBarMole workflows={workflows} />
            </View>
            <PaymentInfo navigation={navigation} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    padding: (20, 0, 20, 0),
  },
  inputField: {
    marginTop: 0,
    alignItems: "center",
  },
  fullInputArea: {
    width: 310,
    marginBottom: 130,
  },
});

export default OrderPaymentScreen;
