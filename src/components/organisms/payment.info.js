import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { __ } from "_utils/stringPicker";
import { AntDesign } from "@expo/vector-icons";
import { DEEP_BLUE, GRAY_DARK, ORANGE, WHITE } from "_styles/colors";
import { border, margin, padding } from "_styles/mixins";
import {
  defaultMediumLargeText,
  FONT_SIZE_40,
  largeBoldText,
  largeExtraBoldText,
  smallMediumBoldText,
} from "_styles/typography";
import * as yup from "yup";
import CustomText from "_components/atoms/CustomText.atom";
import { Field, Formik } from "formik";
import TextInputMole from "_components/molecules/TextInput.mole";

const PaymentInfo = ({ navigation }) => {
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
    <View>
      <View style={margin(0, 0, 0, 0)}>
        <CustomText
          text={"Payment"}
          styling={{
            ...largeBoldText(DEEP_BLUE, "left"),
            ...margin(0, 10, 0, 20),
          }}
        />
      </View>
      <Formik
        validationSchema={
          paymentType == "mpesaPayBill"
            ? mpesaResetValidationSchema
            : mpesaPayBill
        }
        initialValues={{ mpesaPayBill: "" }}
        onSubmit={(values) => sendMpesaRequest(values.mpesaPayBill)}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <CustomText
              text={"Mode"}
              styling={{
                ...defaultMediumLargeText(DEEP_BLUE, "left"),
                ...margin(0, 0, -10, 20),
              }}
            />
            <View style={styles.inputField}>
              {/* {payment === "mpesaPayBill" && ( */}
              <Field
                component={TextInputMole}
                name='mpesaPayBill'
                placeholder={"M-PESA Paybill 909070"}
                styling={styles.fullInputArea}
                keyboardType='numeric'
              />
              {/* )} */}
            </View>
            <View
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                ...margin(150, 15, 30, 15),
              }}
            >
              {/* Bottom View: AmountDue  */}
              <View
                style={{
                  width: "100%",
                }}
              >
                <View>
                  <CustomText
                    styling={defaultMediumLargeText(DEEP_BLUE, "center")}
                    text={" Amount Due:"}
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
                  <CustomText
                    styling={{
                      ...largeExtraBoldText(GRAY_DARK, "center"),
                      fontSize: FONT_SIZE_40,
                    }}
                    text={"Kes"}
                  />
                  <CustomText
                    styling={{
                      ...largeExtraBoldText(DEEP_BLUE, "center"),
                      fontSize: FONT_SIZE_40,
                    }}
                    text={selectedWeight.price}
                  />
                </View>
                <TouchableOpacity onPress={sendMpesaRequest}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: ORANGE,
                        ...border(25, 25, 25, 25, 0, ORANGE),
                      }}
                    >
                      <View>
                        <CustomText
                          styling={{
                            ...smallMediumBoldText(WHITE, "center"),
                            ...padding(0, 10, 0, 10),
                          }}
                          text={"make payment"}
                        />
                      </View>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          height: 50,
                          width: 50,
                          backgroundColor: WHITE,
                          ...border(25, 25, 25, 25, 1, ORANGE),
                        }}
                      >
                        <AntDesign
                          name='arrowright'
                          size={24}
                          color={DEEP_BLUE}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
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

export default PaymentInfo;
