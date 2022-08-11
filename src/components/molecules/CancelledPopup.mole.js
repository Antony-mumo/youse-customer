import React, {useState} from "react";
import { StyleSheet, Image,View,Text, Modal, Pressable } from "react-native";

const CancelledPopupMole_texts = {
    CANNOT_BE_UNDONE: "CANNOT BE UNDONE",
    YOU_ARE_ABOUT: "You are about to cancle an order, remember",
    THIS_CONSEQUENCE: "that this consequence will meet you if you",
    PROCEED: "proceed. Once done, action cannot be",
    UNDONE: "undone."
};
const CancelledPopupMole = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return(

        <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}

            >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },  
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }  
}) 
export default CancelledPopupMole;