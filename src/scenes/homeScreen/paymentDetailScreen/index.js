import React, { useState } from "react";
import * as Progress from "react-native-progress";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
// import { Colors } from "_styles";
import { __ } from "_utils/stringPicker";
import { DEEP_BLUE } from "_styles/colors";
import { margin, padding } from "_styles/mixins";
import { largeExtraBoldText } from "_styles/typography";
import CustomText from "_components/atoms/CustomText.atom";
import { Colors } from "_styles/";
import { Entypo } from "@expo/vector-icons";
import PaymentDetail from "_components/organisms/payment.details";

const name = "John";

const PaymentDetailScreen = ({ navigation }) => {
  const [payment, setPayment] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          hidden={false}
          translucent={false}
          backgroundColor={Colors.WHITE}
        />
        {payment ? (
          <View style={{ width: "100%", height: "100%" }}>
            <View
              style={{
                ...margin(100, 15, 10, 15),
              }}
            >
              <View>
                <CustomText
                  text={"Thank you for using our services"}
                  styling={{
                    ...largeExtraBoldText(DEEP_BLUE, "center"),
                    ...margin(20, 0, 30, 0),
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
                  width={180}
                  color={"#37E790"}
                  borderRadius={5}
                  animationType={"spring"}
                />
              </View>
            </View>
          </View>
        ) : (
          <ScrollView>
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
              <PaymentDetail navigation={navigation} />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
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
});

export default PaymentDetailScreen;
