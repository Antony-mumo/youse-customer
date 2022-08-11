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

import ThreeStepProgressBarMole from "_components/molecules/ThreeStepProgressBarMole.mole";
import CustomText from "_components/atoms/CustomText.atom";
import Avatar from "_assets/image1.png";

const ServiceProvision = ({ navigation }) => {
  const handleSubmit = () => {
    // setLoading(true);
    // setTimeout(() => {
    navigation.navigate("AssignProvision");
    console.log("AssignProvisionScreen loading");
    // }, 100);
  };
  return (
    <View>
      <View style={margin(0, 15, 10, 15)}>
        <CustomText
          text={"Available"}
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
          }}
          source={Avatar}
        />
      </View>
      <View
        style={{
          ...margin(10, 15, 0, 15),
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
            }}
            text={"Vehicle Mechanic"}
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
              textAlign: "center",
              ...defaultMediumSmallText(ORANGE, "center"),
              fontSize: FONT_SIZE_16,
              ...padding(10, 15, 20, 15),
            }}
            text={
              "Youse holds rights to edit this page, once an asignee has been assigned the task, it cannot be reversed"
            }
          />
        </View>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              ...margin(0, 0, 60, 0),
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
export default ServiceProvision;
