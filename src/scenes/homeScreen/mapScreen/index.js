import * as Progress from "react-native-progress";
import React, { useRef, useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Colors } from "_styles";
import { __ } from "_utils/stringPicker";
import { AntDesign, Entypo } from "@expo/vector-icons";

import JobItemMole from "_components/molecules/JobItem.mole";
import {
  DEEP_BLUE,
  GRAY_DARK,
  GRAY_LIGHT,
  ORANGE,
  WHITE,
} from "_styles/colors";
import { border, margin, padding } from "_styles/mixins";
import {
  defaultMediumLargeText,
  defaultMediumSmallText,
  FONT_SIZE_12,
  FONT_SIZE_24,
  FONT_SIZE_32,
  FONT_SIZE_40,
  FONT_SIZE_8,
  FONT_WEIGHT_BOLD,
  largeBoldText,
  largeExtraBoldText,
  smallMediumBoldText,
} from "_styles/typography";
import SmallTextWhite from "_components/atoms/SmallWhiteText.atom";
import RBSheet from "react-native-raw-bottom-sheet";
import ThreeStepProgressBarMole from "_components/molecules/ThreeStepProgressBarMole.mole";
import CustomText from "_components/atoms/CustomText.atom";
import TransparentButtonAtom from "_components/atoms/TransparentButton.atom";
import { useStateValue } from "_utils/StateProvider";
import { postJob } from "_services/services.service";
import {
  POST_JOB,
  POST_JOB_ERROR,
  POST_JOB_SUCCESSFUL,
} from "_services/job.actions";
import CustomMarker from "_components/atoms/CustomMarker.atom";

import GetLocation from "react-native-get-location";
const name = "John";

const cards = [
  {
    id: "001",
    name: "Laundry",
    description: "What size do you need cleaned?",
    isGraduated: true,
    weights: [
      {
        id: "001",
        quantity: "1-5 rooms",
        price: 250,
      },
      {
        id: "002",
        quantity: "6-10 rooms",
        price: 500,
      },
      {
        id: "003",
        quantity: "11-15 rooms",
        price: 700,
      },
      {
        id: "004",
        quantity: "16-20 rooms",
        price: 1000,
      },
      {
        id: "005",
        quantity: "21-30 rooms",
        price: 4000,
      },
      {
        id: "006",
        quantity: "31-50 rooms",
        price: 6000,
      },
    ],
  },
  {
    id: "002",
    name: "House Cleaning",
    description: "What size do you need cleaned?",
    isGraduated: true,
    weights: [
      {
        id: "001",
        quantity: "1-2rooms",
        price: 300,
      },
      {
        id: "002",
        quantity: "3-4rooms",
        price: 650,
      },
      {
        id: "003",
        quantity: "5-6rooms",
        price: 1500,
      },
      {
        id: "004",
        quantity: "6-20rooms",
        price: 3000,
      },
      {
        id: "005",
        quantity: "21-1000rooms",
        price: 2500,
      },
    ],
  },
  {
    id: "003",
    name: "Fumigation",
    description: "How large is the house you want fumigated?",
    isGraduated: true,
    weights: [
      {
        id: "001",
        quantity: "1-2 rooms",
        price: 500,
      },
      {
        id: "002",
        quantity: "3-4 rooms",
        price: 1000,
      },
      {
        id: "003",
        quantity: "5-6 rooms",
        price: 2500,
      },
      {
        id: "004",
        quantity: "7-8 rooms",
        price: 3500,
      },
      {
        id: "005",
        quantity: "9-20 rooms",
        price: 4000,
      },
      {
        id: "006",
        quantity: "21-1000 rooms",
        price: 5000,
      },
    ],
  },
  {
    id: "004",
    name: "Electrical",
    description: "What do you need fixed",
    isGraduated: false,
    weights: [
      {
        id: "001",
        quantity: "TV",
        price: 1000,
      },
      {
        id: "002",
        quantity: "Radio microwave",
        price: 500,
      },
      {
        id: "003",
        quantity: "Fridge",
        price: 1000,
      },
      {
        id: "004",
        quantity: "Dispenser",
        price: 500,
      },
      {
        id: "005",
        quantity: "Kettle",
        price: 300,
      },
      {
        id: "006",
        quantity: "Water Heater",
        price: 500,
      },
      {
        id: "007",
        quantity: "Lights",
        price: 500,
      },
      {
        id: "008",
        quantity: "Phone",
        price: 300,
      },
      {
        id: "009",
        quantity: "laptop",
        price: 500,
      },
      {
        id: "010",
        quantity: "CCTVs",
        price: 1000,
      },
      {
        id: "011",
        quantity: "Installations",
        price: 1500,
      },
    ],
  },
  {
    id: "005",
    name: "mechanics",
    description: "For How Long will you need a mechanic?",
    isGraduated: true,
    weights: [
      {
        id: "001",
        quantity: "1 hour",
        price: 500,
      },
      {
        id: "002",
        quantity: "2 hours",
        price: 250,
      },
      {
        id: "003",
        quantity: "3 hours",
        price: 250,
      },
    ],
  },
  {
    id: "006",
    name: "Car Wash",
    description: "What category of washing do you want done to your vehicle?",
    isGraduated: false,
    weights: [
      {
        id: "001",
        quantity: "Exterior Wash Suv",
        price: 300,
      },
      {
        id: "002",
        quantity: "Exterior Wash Saloon",
        price: 200,
      },
      {
        id: "003",
        quantity: "Exterior Wash Mini SUV",
        price: 250,
      },
      {
        id: "004",
        quantity: "Interior Wash Suv",
        price: 200,
      },
      {
        id: "005",
        quantity: "Interior Wash Saloon",
        price: 100,
      },
      {
        id: "006",
        quantity: "Interior Wash Mini SUV",
        price: 150,
      },
      {
        id: "007",
        quantity: "Exterior and Interior wash Suv",
        price: 500,
      },
      {
        id: "008",
        quantity: "Exterior and Interior wash Saloon",
        price: 300,
      },
      {
        id: "009",
        quantity: "Exterior and Interior wash Mini SUV",
        price: 400,
      },
    ],
  },
  {
    id: "007",
    name: "Photography",
    description: "Photography description...",
    isGraduated: false,
    weights: [
      {
        id: "001",
        quantity: "1",
        price: 2000,
      },
    ],
  },
  {
    id: "001",
    name: "Salon & Barber",
    description: "salon&Barber description...",
    isGraduated: false,
    weights: [
      {
        id: "001",
        quantity: "Braiding",
        price: 1000,
      },
      {
        id: "002",
        quantity: "Treatment",
        price: 500,
      },
      {
        id: "003",
        quantity: "Blow-dry",
        price: 200,
      },
      {
        id: "004",
        quantity: "Haircut",
        price: 500,
      },
      {
        id: "005",
        quantity: "Manicure",
        price: 500,
      },
      {
        id: "006",
        quantity: "Pedicure",
        price: 500,
      },
    ],
  },
];

const workflows = [
  { number: 1, description: "order placement", activated: true },
  { number: 2, description: "service provision", activated: false },
  { number: 3, description: "order payment", activated: false },
];

const MapHomeScreen = ({ navigation }) => {
  const refRBSheet = useRef();

  const [
    { services, postingJob, job_post_error, postingJobSuccessful },
    dispatch,
  ] = useStateValue();

  const [popupData, setPopUpdata] = useState({
    id: "001",
    name: "Laundry",
    description: "What size do you need cleaned?",
    isGraduated: true,
    weights: [
      {
        id: "001",
        quantity: "1-5 rooms",
        price: 250,
      },
      {
        id: "002",
        quantity: "6-10 rooms",
        price: 500,
      },
      {
        id: "003",
        quantity: "11-15 rooms",
        price: 700,
      },
      {
        id: "004",
        quantity: "16-20 rooms",
        price: 1000,
      },
      {
        id: "005",
        quantity: "21-30 rooms",
        price: 4000,
      },
      {
        id: "006",
        quantity: "31-50 rooms",
        price: 6000,
      },
    ],
  });

  const [selectedWeight, setSelectedWeight] = useState({
    quantity: "2Hrs",
    price: "500",
  });

  const [userLocation, setUserLocation] = useState({
    latitude: -1.286389,
    longitude: 36.817223,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    coordinates: [],
  });

  const _showBottomView = (data) => {
    // const toValue = key === 'HIDE' ? height : endValue
    setSelectedWeight(data.weights[0]);
    setPopUpdata(data);
    // Animated.timing(startValue, {
    //     toValue,
    //     duration: duration,
    //     useNativeDriver: true,
    // }).start()
    refRBSheet.current.open();
  };

  const [bottomScrollMenuWidth, setBottomScrollMenuWidth] = useState({
    isOpen: false,
    value: "0%",
  });

  const toggleBottomScrollMenuWidth = () => {
    if (bottomScrollMenuWidth.isOpen === true) {
      setBottomScrollMenuWidth({
        ...bottomScrollMenuWidth,
        isOpen: false,
        value: "0%",
      });
    } else {
      setBottomScrollMenuWidth({
        ...bottomScrollMenuWidth,
        isOpen: true,
        value: "100%",
      });
    }
  };

  const [loading, setLoading] = useState(false);

  const processJobPosting = () => {
    const job = {
      jobTitle: popupData.name,
      description: `${popupData.name} ${selectedWeight.quantity}`,
      location: "Nairobi",
      lattitude: userLocation.latitude,
      longitude: userLocation.longitude,
      noOfWorkersNeeded: 1,
      jobStatus: "POSTED",
      pricedAmount: selectedWeight.price,
      serviceType: {
        id: Number(popupData.id),
        type: popupData.name.replace("&", "_"),
      },
    };

    dispatch({
      type: POST_JOB,
    });

    postJob(job)
      .then(() => {
        dispatch({
          type: POST_JOB_SUCCESSFUL,
          postedJob: job,
        });
        console.log("job posted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 150000,
  })
  .then(location => {
      setUserLocation({
        ...userLocation,
        latitude: location.latitude,
        longitude: location.longitude,
      });
    })
    .catch((error) => {
      const { code, message } = error;
      console.warn(code, message);
    });

  const handleSubmit = () => {
    processJobPosting();
    setLoading(true);
    setTimeout(() => {
      dispatch({
        type: POST_JOB_ERROR,
      });
      navigation.navigate("ServiceProvider");
      console.log("ServiceProvider loading...");
    }, 100);
  }; /*  */

  const coordinates = [
    {
      latitude: -1.286389,
      longitude: 36.817223,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: -1.1483,
      longitude: 36.96059,
    },
    {
      latitude: -1.1403,
      longitude: 36.76059,
    },
    {
      latitude: -1.1463,
      longitude: 36.86059,
    },
    {
      latitude: -1.1453,
      longitude: 36.78059,
    },
    {
      latitude: -1.1383,
      longitude: 36.90059,
    },
    {
      latitude: -1.1483,
      longitude: 34.78059,
    },
    {
      latitude: -1.1483,
      longitude: 35.78459,
    },
    {
      latitude: -1.1443,
      longitude: 36.23059,
    },
    {
      latitude: -1.1333,
      longitude: 36.72359,
    },
    {
      latitude: -1.1422,
      longitude: 36.78239,
    },
    {
      latitude: -1.1123,
      longitude: 46.724359,
    },
    {
      latitude: -1.1434,
      longitude: 36.78059,
    },
    {
      latitude: -1.1753,
      longitude: 36.72359,
    },
    {
      latitude: -2.1434,
      longitude: 36.78549,
    },
    {
      latitude: -1.2829,
      longitude: 36.81223,
    },
    {
      latitude: -1.2329,
      longitude: 36.33123,
    },
    {
      latitude: -1.2869,
      longitude: 36.81093,
    },
    {
      latitude: -1.2869,
      longitude: 36.81973,
    },
    {
      latitude: -1.2198,
      longitude: 36.81133,
    },
    {
      latitude: -1.2238,
      longitude: 36.81183,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <StatusBar
          barStyle='dark-content'
          hidden={false}
          translucent={true}
          backgroundColor={Colors.WHITE}
        />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -1.286389,
            longitude: 36.817223,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <CustomMarker coordinate={coordinates[0]} type='destination' />
          <CustomMarker coordinate={coordinates[1]} type='origin' />
          <CustomMarker coordinate={coordinates[2]} type='destination' />
          <CustomMarker coordinate={coordinates[3]} type='origin' />
          <CustomMarker coordinate={coordinates[4]} type='destination' />
          <CustomMarker coordinate={coordinates[5]} type='origin' />
          <CustomMarker coordinate={coordinates[6]} type='destination' />
          <CustomMarker coordinate={coordinates[7]} type='destination' />
          <CustomMarker coordinate={coordinates[8]} type='origin' />
          <CustomMarker coordinate={coordinates[9]} type='destination' />
          <CustomMarker coordinate={coordinates[10]} type='destination' />
          <CustomMarker coordinate={coordinates[11]} type='origin' />
          <CustomMarker coordinate={coordinates[12]} type='destination' />
          <CustomMarker coordinate={coordinates[13]} type='origin' />
          <CustomMarker coordinate={coordinates[15]} type='destination' />
          <CustomMarker coordinate={coordinates[16]} type='origin' />
          <CustomMarker coordinate={coordinates[17]} type='origin' />
          <CustomMarker coordinate={coordinates[18]} type='origin' />
          <CustomMarker coordinate={coordinates[19]} type='origin' />
          <CustomMarker coordinate={coordinates[20]} type='destination' />
        </MapView>
        <View
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            ...padding(0, 3, 0, 3),
            height: "100%",
            width: "100%",
            top: 30,
            backgroundColor: bottomScrollMenuWidth.isOpen
              ? "rgba(0, 0, 0, 0.3)"
              : "transparent",
          }}
        >
          <TouchableOpacity>
            <Entypo name='menu' size={24} color={Colors.DEEP_BLUE} />
          </TouchableOpacity>
        </View>
        <View style={styles.floatView}>
          <View style={styles.bottomScrollMenu}>
            <TouchableHighlight
              style={{
                ...styles.circleButton,
                backgroundColor: bottomScrollMenuWidth.isOpen
                  ? ORANGE
                  : DEEP_BLUE,
              }}
              onPress={() => toggleBottomScrollMenuWidth()}
            >
              <AntDesign
                name={bottomScrollMenuWidth.isOpen ? "close" : "plus"}
                size={55}
                color={WHITE}
              />
            </TouchableHighlight>
            <View
              style={{
                position: "absolute",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                ...margin(0, 0, 0, 15),
                bottom: -30,
              }}
            >
              <CustomText
                text={"Quick Order"}
                styling={{
                  ...defaultMediumLargeText(GRAY_DARK, "center"),
                  fontSize: FONT_SIZE_12,
                }}
              />
            </View>
            <View style={{ width: bottomScrollMenuWidth.value }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{
                  ...padding(3, 5, 3, 5),
                  paddingLeft: 50,
                  height: "auto",
                }}
              >
                {cards.map((card, index) => (
                  <JobItemMole
                    key={index}
                    cardV={{ data: card, action: _showBottomView }}
                  />
                ))}
              </ScrollView>
            </View>
            {/* <FlatList
              style={{flexGrow: 0, marginLeft: 20, paddingLeft: 60, paddingRight: -30}}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={ cards }
              renderItem={({ item }) => }
            ></FlatList> */}
          </View>
        </View>
      </View>

      {/* Bottom view */}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={700}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container: {
            ...border(20, 20, 0, 0, 0, null),
            position: "relative",
          },
          draggableIcon: {
            backgroundColor: GRAY_LIGHT,
          },
        }}
      >
        {/* //* TODO: Leading Feature */}
        {postingJob ? (
          <View style={{ width: "100%", height: "100%" }}>
            <View style={{ ...margin(100, 15, 10, 15) }}>
              <View>
                <CustomText
                  text={"Contacting service provider..."}
                  styling={{
                    ...largeExtraBoldText(DEEP_BLUE, "center"),
                    ...margin(10, 0, 30, 0),
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
                  width={320}
                  color={"#37E790"}
                  borderRadius={5}
                  animationType={"spring"}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ width: "100%", height: "100%" }}>
            <View style={{ height: 50, width: "100%" }}>
              <ThreeStepProgressBarMole workflows={workflows} />
            </View>
            <View style={margin(10, 15, 10, 15)}>
              <CustomText
                text={popupData.description}
                styling={largeBoldText(DEEP_BLUE, "left")}
              />
            </View>
            <View
              style={{
                ...margin(10, 15, 10, 15),
                height: "45%",
                // backgroundColor: 'yellow'
              }}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  ...padding(3, 5, 3, 5),
                  height: "auto",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {popupData.weights.map((weight, index) => (
                    <TransparentButtonAtom
                      text={weight.quantity}
                      key={index}
                      data={weight}
                      active={selectedWeight.quantity === weight.quantity}
                      action={setSelectedWeight}
                      styling={{ width: "30%" }}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
            <View style={{ position: "absolute", bottom: 70, width: "100%" }}>
              <View>
                <CustomText
                  styling={defaultMediumSmallText(DEEP_BLUE, "center")}
                  text={"Your total is:"}
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
                        text={"confirm order"}
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
        )}
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
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

export default MapHomeScreen;
