import React from 'react';
import {StyleSheet, View, ViewPropTypes, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import { GRAY_DARK, GRAY_LIGHT, ORANGE } from '_styles/colors';
import { defaultText } from '_styles/typography';
import { margin, padding } from '_styles/mixins';

const CustomTextInput = function(props) {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    refCallback,
    inputRef,
    onKeyPress,
    onChangeText,
    hasError,
    index,
    ...remainingProps
  } = props;

  return (
      <>
      {LeftComponent}
        <View style={[styles.containerStyle, containerStyle,{borderColor: hasError==true ? ORANGE : GRAY_LIGHT,}]}>
            <TextInput
                {...remainingProps}
                style={[defaultText(GRAY_DARK, 'center'),{ ...margin(3,3,3,3), width:30,}]}
                ref={refCallback(inputRef)}
                onKeyPress={onKeyPress(index)}
                onChangeText={onChangeText(index)}
            />
        </View>
      {RightComponent}
      </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    ...padding(15,5,15,5),
    ...margin(3,3,3,3),
    borderColor: GRAY_LIGHT,
    borderWidth: 1,
    borderRadius: 4,
  },
  textInputStyle: {
    padding: 0,
  },
});

CustomTextInput.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

CustomTextInput.propTypes = {
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  LeftComponent: PropTypes.object,
  RightComponent: PropTypes.object,
  refCallback: PropTypes.func,
};

export default CustomTextInput;