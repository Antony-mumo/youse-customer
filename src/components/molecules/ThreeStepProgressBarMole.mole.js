import React from "react";
import { StyleSheet, View } from "react-native";
import ProgressBarAtom from "_components/atoms/ProgressBar.atom";

const ThreeStepProgressBarMole = (props) => {
  const { workflows } = props;

  return (
    <>
      <View style={styles.container}>
        {workflows.map((workflow, index) => (
          <ProgressBarAtom
            key={index}
            error={workflow.error}
            workflow={workflow}
          />
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

export default ThreeStepProgressBarMole;
