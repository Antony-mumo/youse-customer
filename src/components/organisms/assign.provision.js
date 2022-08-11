import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { __ } from "_utils/stringPicker";
import { AntDesign } from "@expo/vector-icons";
import { DEEP_BLUE, ORANGE, WHITE } from "_styles/colors";
import { border, margin, padding, WINDOW_HEIGHT } from "_styles/mixins";
import {
  defaultMediumSmallText,
  FONT_SIZE_16,
  FONT_SIZE_24,
  FONT_SIZE_32,
  largeBoldText,
  largeExtraBoldText,
  smallMediumBoldText,
} from "_styles/typography";
import CustomText from "_components/atoms/CustomText.atom";
import Avatar from "_assets/image1.png";

const AssignProvision = ({ navigation }) => {
  const handleSubmit = () => {
    // setLoading(true);
    setTimeout(() => {
      navigation.navigate("OrderPayment");
      console.log("History Screen loading");
    }, 100);
  };
  return (
    <View>
      <View style={margin(0, 15, 0, 15)}>
        <CustomText
          text={"Assigned"}
          styling={{
            ...largeBoldText(DEEP_BLUE, "center"),
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: WINDOW_HEIGHT * 0.35,
            height: WINDOW_HEIGHT * 0.35,
            borderRadius: 1000,
            ...margin(10, 0, 10, 0),
          }}
          source={Avatar}
        />
      </View>
      <View
        style={{
          ...margin(0, 15, 0, 15),
        }}
      >
        <View
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText
            styling={{
              ...largeExtraBoldText(DEEP_BLUE, "center"),
              fontSize: FONT_SIZE_32,
            }}
            text={"Mutoriah Gathiri"}
          />
          <CustomText
            styling={{
              ...largeBoldText(DEEP_BLUE, "center"),
              fontSize: FONT_SIZE_24,
              ...padding(0, 20, 0, 20),
            }}
            text={"Vehicle Mechanic"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ...padding(0, 15, 20, 15),
          }}
        >
          <CustomText
            styling={{
              textAlign: "center",
              ...defaultMediumSmallText(ORANGE, "center"),
              fontSize: FONT_SIZE_16,
              ...padding(0, 20, 10, 20),
            }}
            text={"Mutoriah will contact you via mobile shortly."}
          />
          <CustomText
            styling={{
              textAlign: "center",
              ...defaultMediumSmallText(ORANGE, "center"),
              fontSize: FONT_SIZE_16,
            }}
            text={
              "Dear client, we task our clients with the responsibility of ensuring their safety comes first . As such, we recmmend that any and all transactions between client and Service Provider be carried out within the YOUSE app"
            }
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
                  text={"proceed"}
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
  );
};
export default AssignProvision;
