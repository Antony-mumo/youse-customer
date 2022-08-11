import React from "react";
import { Colors } from "_styles";
import { border, defaultMargin, margin } from "_styles/mixins";
import {
  WHITE,
  BLACK,
  GRAY_LIGHT,
  LightOrange,
  LIGHTGREEN,
  ORANGE,
  GRAY,
  PURPLE,
} from "_styles/colors";
import { mediumLargeExtraBoldText } from "_styles/typography";

import NormalBlackText from "_components/atoms/NormalBlackText.atom";
import OrangeText from "_components/atoms/OrangeText.atom";
import LightOrangeText from "_components/atoms/LightOrangeText.atom";
import NormalPurpleText from "_components/atoms/NormalPurpleText.atom";

import {
  View,
  StatusBar,
  SafeAreaView,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { __ } from "_utils/stringPicker";
import { Entypo, Ionicons } from "@expo/vector-icons";
import * as actions from "_services/actions";
import * as Progress from "react-native-progress";
import NormalTextBlue from "_components/atoms/NormalBlueText.atom";
import { padding } from "_styles/mixins";
// import HistoryCardMole from "_components/molecules/HistoryCard.mole";
// import HistoryCardDoneMole from "_components/molecules/HistoryCardDone.molecule";
// import HistoryCardCancelledMole from "_components/molecules/HistoryCardCancelled.mole";
import historyData from "_assets/data/historydata";
import CustomText from "_components/atoms/CustomText.atom";
import { useStateValue } from "_utils/StateProvider";
import { getNotifications } from "_services/services.service";

const historyscreen_texts = {
  greetings2: "My Orders",
};
const HistoryCardMole_texts = {
  title: "Mechanic",
  since: "Since",
  price: "KES",
  status_in_progress: "In Progress",
  cancel: "Cancel",
  close_modal: "close modal",
};

const modalCancelled_texts = {
  CANNOT_BE_UNDONE: "CANNOT BE UNDONE",
  you_are_about_to: "You are about to cancle an order, remember",
  that_this_consequence: "that this consequence will meet you if you",
  proceed_once_done: "proceed. Once done, action cannot be ",
  undone: "Undone",
};

const HistoryScreen = () => {
  const [{ notifications, error }, dispatch] = useStateValue();
  // const [active, setActive] = useState(true);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () =>
    setIsModalVisible(() => console.log("modal is visible"), !isModalVisible);

  const getUserNotifications = () => {
    console.log("getting notifications");
    dispatch({
      type: actions.GET_NOTIFICATION,
    });
    getNotifications()
      .then((res) => {
        //  console.log(res);
        dispatch({
          type: actions.GET_NOTIFICATION_SUCCESFUL,
          notifications: JSON.parse(notifications),
        });
      })
      .catch((err) => {
        dispatch({
          type: actions.GET_NOTIFICATION_ERROR,
          error: err.message,
        });
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ ...padding(0, 3, 0, 3) }}>
          <View style={styles.statusbar} />
          <StatusBar
            style='light'
            translucent={true}
            backgroundColor={Colors.PRIMARY}
          />
          <View>
            <View style={styles.topWrapper}>
              <TouchableOpacity>
                <Entypo name='menu' size={24} color={Colors.DEEP_BLUE} />
              </TouchableOpacity>

              <TouchableOpacity onPress={getUserNotifications}>
                <Ionicons name='search' size={24} color={Colors.DEEP_BLUE} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <NormalTextBlue text={historyscreen_texts.greetings2} />
          </View>
        </View>
        {/* scrollable pane */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            ...padding(3, 5, 3, 5),
            height: "auto",
          }}
        >
          {historyData.map((Item) => (
            //  {{I} == "prog" &&
            <View
              style={[styles.cardContainer, { backgroundColor: Colors.WHITE }]}
            >
              <View style={{}}>
                <View>
                  <NormalBlackText key='{item.title}' text={Item.title} />
                </View>
                <View style={styles.priceTIme}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <LightOrangeText
                      text={HistoryCardMole_texts.since}
                      style={{ flexShrink: 2 }}
                    />
                    <LightOrangeText
                      key='{item.time}'
                      text={Item.time}
                      style={{ flexShrink: 2 }}
                    />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <NormalBlackText text={HistoryCardMole_texts.price} />
                    <NormalBlackText key='{item.price}' text={Item.price} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  // flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // ...padding(5, 0, 5, 0),
                  width: "100%",
                  borderBottomWidth: 2,
                  borderTopWidth: 2,
                  borderBottomColor: GRAY_LIGHT,
                  borderTopColor: GRAY_LIGHT,
                }}
              >
                <Progress.Bar
                  unfilledColor={PURPLE}
                  // indeterminate={true}
                  // indeterminateAnimationDuration={500}
                  // borderWidth={5}
                  borderColor={"#858583"}
                  width={350}
                  color={PURPLE}
                  borderRadius={0}
                  // animationType={"spring"}
                />
              </View>
              <View style={styles.bottomCardWrapper}>
                <NormalPurpleText key='{Item.status}' text={Item.status} />
                <TouchableOpacity
                  style={{
                    backgroundColor: GRAY,
                    width: "25%",
                    alignItems: "center",
                  }}
                  onPress={handleModal}
                >
                  <OrangeText key='{Item.Option}' text={Item.Option} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <Modal
            animationType='none'
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              console.log("you have close modal");
              setIsModalVisible(!isModalVisible);
            }}
          >
            <View style={styles.modal}>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "95%",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: WHITE,
                  ...border(10, 10, 10, 10),
                  ...padding(20, 0, 25, 0),
                }}
              >
                <CustomText
                  text={modalCancelled_texts.CANNOT_BE_UNDONE}
                  styling={{ ...mediumLargeExtraBoldText(LightOrange) }}
                />
                <NormalBlackText text={modalCancelled_texts.you_are_about_to} />
                <NormalBlackText
                  text={modalCancelled_texts.that_this_consequence}
                />
                <NormalBlackText
                  text={modalCancelled_texts.proceed_once_done}
                />
                <NormalBlackText text={modalCancelled_texts.undone} />
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: -35,
                    right: 15,
                    flexDirection: "row-reverse",
                    position: "absolute",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: WHITE,
                      ...border(100, 100, 100, 100),
                    }}
                    onPress={() => setIsModalVisible(!isModalVisible)}
                  >
                    <Ionicons
                      name='md-checkmark-circle'
                      size={70}
                      style={{ color: LIGHTGREEN }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: WHITE,
                      ...border(100, 100, 100, 100),
                    }}
                    onPress={() => setIsModalVisible(!isModalVisible)}
                  >
                    <Entypo
                      name='circle-with-cross'
                      size={70}
                      style={{ color: ORANGE }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  statusbar: {
    height: StatusBar.currentHeight,
    backgroundColor: Colors.PRIMARY,
  },
  topWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 0,
  },
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardContainer: {
    ...defaultMargin(),
    ...border(5, 5, 5, 5),
    width: "100%",
    flex: 1,
    alignSelf: "center",
    // height: 60,
    minWidth: 100,
    height: "auto",
    shadowColor: BLACK,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 20,
    shadowColor: BLACK,
  },
  cover: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  priceTIme: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 0,
  },
  bottomCardWrapper: {
    ...margin(0, 0, 0, 0),
    justifyContent: "space-between",
    // borderTopWidth: 4,
    borderTopColor: GRAY_LIGHT,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});

export default HistoryScreen;
