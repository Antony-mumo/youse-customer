import React, { useState } from "react";
import * as Progress from "react-native-progress";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors } from "_styles";
import { __ } from "_utils/stringPicker";
import { AntDesign } from "@expo/vector-icons";
import { DEEP_BLUE, ORANGE, WHITE } from "_styles/colors";
import { border, margin, padding, WINDOW_HEIGHT } from "_styles/mixins";
import { Entypo } from "@expo/vector-icons";
import {
  defaultMediumSmallText,
  FONT_SIZE_12,
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
import ServiceProvision from "_components/organisms/service.provision";
import LoadingProgress from "_components/organisms/loading.progress";

const name = "John";

const workflows = [
  { number: 1, description: "order placement", activated: true },
  { number: 2, description: "service provision", activated: true },
  { number: 3, description: "order payment", activated: false },
];

const ServiceProviderScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

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
          <LoadingProgress navigation={navigation} />
        ) : (
          <View>
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
            <View
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <View style={{ ...margin(0, 0, 0, 0), width: "100%" }}>
                <ThreeStepProgressBarMole workflows={workflows} />
              </View>
              <ServiceProvision navigation={navigation} />
            </View>
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
  statusbar: {
    height: StatusBar.currentHeight,
    backgroundColor: Colors.PRIMARY,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  floatView: {
    position: "absolute",
    bottom: "7%",
  },
  bottomScrollMenu: {
    position: "relative",
    paddingLeft: 40,
  },
  circleButton: {
    backgroundColor: ORANGE,
    position: "absolute",
    left: 0,
    bottom: -10,
    width: 80,
    marginLeft: 2,
    height: 80,
    ...border(40, 40, 40, 40, 0, null),
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ServiceProviderScreen;
