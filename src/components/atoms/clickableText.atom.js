import React from "react";
import { StyleSheet, Pressable, Text  } from "react-native";
import { Colors } from "_styles";
import { FONT_FAMILY_REGULAR, FONT_REGULAR, FONT_SIZE_16 } from "_styles/typography";


const ClickableTextAtom = ( props ) =>{

    const { text , styling, action } = props

return (
    <>
        <Pressable onPress={() => action()}>
            <Text 
            style={[
                    {...styles.noAccounttxt},
                    {...styling}
                ]}
            > { !!text ? text : props.children }</Text>
        </Pressable>
    </>
)

}

const styles = StyleSheet.create({
    noAccount: {
        marginTop: 20,
        fontSize: 15,
      },
      noAccounttxt: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_16,
        color: Colors.DEEP_BLUE
      },
})

export default ClickableTextAtom