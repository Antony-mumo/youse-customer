import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { __ } from "_utils/stringPicker";
import { AntDesign } from "@expo/vector-icons";
import {
  DEEP_BLUE,
  ORANGE,
  WHITE,
  GRAY_DARK,
  ALERT,
  CARD_PINK,
} from "_styles/colors";
import { border, margin, padding } from "_styles/mixins";
import {
  defaultMediumLargeText,
  FONT_SIZE_16,
  FONT_SIZE_32,
  largeBoldText,
  largeExtraBoldText,
  smallMediumBoldText,
  FONT_SIZE_40,
} from "_styles/typography";
import ThreeStepProgressBarMole from "_components/molecules/ThreeStepProgressBarMole.mole";
import CustomText from "_components/atoms/CustomText.atom";

const workflows = [
  { number: 1, description: "order placement", activated: true },
  { number: 2, description: "service provision", activated: true },
  {
    number: 3,
    description: "order payment",
    activated: true,
    error: true,
  },
];

const PaymentDetail = ({ navigation }) => {
  const [error, setError] = useState(true);

  const [selectedWeight, setSelectedWeight] = useState({
    quantity: "2Hrs",
    price: "500",
  });

  const handleSubmit = () => {
    setTimeout(() => {
      navigation.navigate("Map");
      console.log("Returning to MapScreen loading");
    }, 1500);
  };
  return (
    <View>
      <View style={{ ...margin(0, 0, 10, 0), width: "100%" }}>
        <ThreeStepProgressBarMole workflows={workflows} error={error} />
      </View>
      <View style={{ ...margin(10, 15, 0, 15) }}>
        <CustomText
          text={error == true ? "Payment Unsucessfull" : "Payment Succcess"}
          styling={{
            ...largeBoldText(error == true ? ORANGE : DEEP_BLUE, "center"),
            fontSize: FONT_SIZE_32,
          }}
        />
      </View>
      {!error && (
        <>
          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              ...margin(10, 0, 0, 0),
            }}
          >
            <CustomText
              text={"Mode:"}
              styling={{
                ...defaultMediumLargeText(DEEP_BLUE, "center"),
                fontSize: FONT_SIZE_16,
              }}
            />
            <CustomText
              text={"M-PESA Paybill 909070"}
              styling={{
                ...defaultMediumLargeText(GRAY_DARK, "center"),
                fontSize: FONT_SIZE_16,
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
              ...margin(0, 0, 10, 0),
            }}
          >
            <CustomText
              text={"Confirmation Code:"}
              styling={{
                ...defaultMediumLargeText(DEEP_BLUE, "center"),
                fontSize: FONT_SIZE_16,
              }}
            />
            <CustomText
              text={"MX5TW900"}
              styling={{
                ...defaultMediumLargeText(GRAY_DARK, "center"),
                fontSize: FONT_SIZE_16,
              }}
            />
          </View>
        </>
      )}
      {error && (
        <>
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
              text={
                "Kindly retry transacting. If this problem persist, there might be a problem with your M-pesa kindly contact Safaricom customer care for assistance."
              }
              styling={{
                ...defaultMediumLargeText(DEEP_BLUE, "center"),
                fontSize: FONT_SIZE_16,
                ...margin(10, 30, 10, 30),
              }}
            />
          </View>
        </>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          ...margin(10, 0, 10, 0),
        }}
      >
        <AntDesign
          name={error == true ? "closecircleo" : "checkcircleo"}
          size={200}
          color={error == true ? ALERT : DEEP_BLUE}
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>

      {/* Bottom View   */}
      <View
        style={{
          ...margin(0, 15, 10, 15),
        }}
      >
        <View
          style={{
            width: "100%",
            ...margin(25, 0, 50, 0),
          }}
        >
          <View>
            <CustomText
              styling={defaultMediumLargeText(
                error == true ? ALERT : DEEP_BLUE,
                "center"
              )}
              text={" Amount Received:"}
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
                ...largeExtraBoldText(
                  error == true ? CARD_PINK : GRAY_DARK,
                  "center"
                ),
                fontSize: FONT_SIZE_40,
              }}
              text={"Kes"}
            />
            <CustomText
              styling={{
                ...largeExtraBoldText(
                  error == true ? ALERT : DEEP_BLUE,
                  "center"
                ),
                fontSize: FONT_SIZE_40,
              }}
              text={selectedWeight.price}
            />
          </View>
          <TouchableOpacity onPress={() => handleSubmit()}>
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
                    text={"Proceed"}
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
                  <AntDesign name='arrowright' size={24} color={DEEP_BLUE} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default PaymentDetail;
