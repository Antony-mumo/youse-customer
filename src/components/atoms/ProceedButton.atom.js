import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.production.min";
import { Colors } from "_styles";
import { DEEP_BLUE, GRAY_MEDIUM, ORANGE, TRANSPARENT } from "_styles/colors";
import { border, defaultMargin } from "_styles/mixins";
import { defaultMediumLargeText, FONT_FAMILY_SEMI_BOLD, FONT_SIZE_16 } from "_styles/typography";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const TransparentButtonAtom = (props) => {
  const { text, inactive, data, action } = props;
  
  const color = !!inactive  

  const [buttonText, setText] = useState(text);

  return (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
          backgroundColor: "yellow",
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
        <TouchableOpacity onPress={() => action(!!data && data)}>
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
                <AntDesign name='arrowright' size={24} color={DEEP_BLUE} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...defaultMargin(),
  },

  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  activeButton: {
    backgroundColor: TRANSPARENT,
    ...border(10, 10, 10, 10, 2, DEEP_BLUE),
    width: "100%",
  },
  inactiveButton: {
    backgroundColor: TRANSPARENT,
    ...border(10, 10, 10, 10, 2, GRAY_MEDIUM),
    width: "100%",
  },
  btnText: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_16,
    textAlign: "center",
    color: GRAY_MEDIUM,
  },
});

export default TransparentButtonAtom;
