import React from "react";
import { StyleSheet, View } from "react-native";
import ProgressBarAtom from "_components/atoms/ProgressBar.atom";

const ThreeErrorStepProgressBarMole = (props) => {
  const { error_workflows } = props;

  return (
    <>
      <View style={styles.container}>
        {error_workflows.map((workflow, index) => (
          <ProgressBarAtom key={index} workflow={workflow} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ThreeErrorStepProgressBarMole;
