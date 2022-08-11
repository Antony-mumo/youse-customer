import React from "react";
import * as Progress from "react-native-progress";
import { View } from "react-native";
import { __ } from "_utils/stringPicker";
import { DEEP_BLUE } from "_styles/colors";
import { margin } from "_styles/mixins";
import { largeExtraBoldText } from "_styles/typography";

import CustomText from "_components/atoms/CustomText.atom";

const LoadingProgress = (props) => {
  const { navigation } = props;
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ ...margin(100, 15, 10, 15) }}>
        <View>
          <CustomText
            text={"A minute..."}
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
  );
};
export default LoadingProgress;
