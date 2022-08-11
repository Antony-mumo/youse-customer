<View
        style={{
          
          flexDirection: "column",
          justifyContent:'space-between',
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginTop: "10%",
          paddingHorizontal:'2%',
          backgroundColor: Colors.GRAY,
        }}
      >
        <ScrollView vertical={true} contentContainerStyle={{flexGrow:1}} >
        
        <View style={{flexDirection:'row', width:'100%', height: '40%', justifyContent:'space-between'}}>
          <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_PURPLE}]}>
            <Card.Content>
            <Title>Card Title1</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_ORANGE}]}>
            <Card.Content>
            <Title>Card Title2</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>
          {/*  <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_PURPLE}]}><Text>free</Text></View>
        <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_ORANGE}]}><Text>free</Text></View> */}
        </View>
       
       <View style={{flexDirection:'row', width:'100%', height: '40%', justifyContent:'space-between'}}>
       <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_GREEN}]}>
            <Card.Content>
            <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_PURPLE}]}>
            <Card.Content>
            <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>
         {/* <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_GREEN}]}><Text>free</Text></View>
        <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_PURPLE}]}><Text>free</Text></View> */}
       </View>
        
        <View style={{flexDirection:'row', width:'100%', height: '40%', justifyContent:'space-between'}}>
        <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_DEEPBLUE}]}>
            <Card.Content>
            <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_BROWN}]}>
            <Card.Content>
            <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>
          {/* <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_DEEPBLUE}]}><Text>free</Text></View>
        <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_BROWN}]}><Text>free</Text></View> */}
        </View>
        
        <View style={{flexDirection:'row', width:'100%', height: '40%', justifyContent:'space-between'}}>
        <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_PINK}]}>
            <Card.Content>
            <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.cardContainer,{backgroundColor:Colors.CARD_BLUE}]}>
            <Card.Content>
            <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
            </Card.Content>
          </Card>
          {/* <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_PINK}]}><Text>free</Text></View>
        <View style={[styles.cardContainer ,{ backgroundColor:Colors.CARD_BLUE}]}><Text>free</Text></View> */}
        </View>
        </ScrollView>
        
      </View>