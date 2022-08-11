import React from "react";
import { StyleSheet, View } from "react-native";
import { DEEP_BLUE, GRAY_MEDIUM, WHITE, ORANGE, ALERT } from "_styles/colors";
import { border, defaultMargin, defaultPadding } from "_styles/mixins";
import {
  defaultMediumSmallText,
  defaultText,
  FONT_FAMILY_BOLD,
  FONT_WEIGHT_EXTRA_BOLD,
  MAX_WIDTH,
} from "_styles/typography";
import CustomText from "./CustomText.atom";

/**
 *
 * @param {*} param0
 * @returns a custom button
 */
const ProgressBarAtom = (props) => {
  const { workflow, error } = props;

  const active = workflow.activated ?? true;

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.bar,
              backgroundColor: error == true ? ALERT : GRAY_MEDIUM,
            }}
          ></View>
          {active == true && (
            <View
              style={[
                styles.bar,
                { backgroundColor: error == true ? ALERT : DEEP_BLUE },
              ]}
            ></View>
          )}
          <View
            style={[
              styles.circle,
              active == true
                ? { backgroundColor: error == true ? ALERT : DEEP_BLUE }
                : { backgroundColor: GRAY_MEDIUM },
            ]}
          >
            <CustomText
              text={workflow.number}
              styling={defaultText(WHITE, "center")}
            />
          </View>
        </View>
        <View style={styles.description}>
          <CustomText
            text={workflow.description}
            styling={defaultMediumSmallText(
              active == true ? DEEP_BLUE : GRAY_MEDIUM,
              "center"
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "30%",
  },
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
  },
  circle: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    ...border(15, 15, 15, 15, 0, null),
  },
  text: {
    ...defaultPadding(),
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    maxWidth: MAX_WIDTH,
    display: "flex",
    alignItems: "center",
    color: WHITE,
  },

  bar: {
    position: "absolute",
    alignSelf: "center",
    height: 4,
    width: "100%",
    backgroundColor: GRAY_MEDIUM,
  },
  blueBar: {
    backgroundColor: DEEP_BLUE,
    //    ...border(0,3,0,3,0,null),
  },
  description: {
    width: "100%",
  },
});

export default ProgressBarAtom;
