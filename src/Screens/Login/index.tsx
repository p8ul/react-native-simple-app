import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import { Header, Right } from "native-base";
import { IProps } from '../../types';

/** Components */
import InputText from "./components/inputText1";
import BlockButton from "./components/BlockButton";
import OrBlock from "./components/OrBlock";
import SocialButtons from "./components/SocialButton";
import { iconStyles } from "../../styles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  wrapper: {
    marginHorizontal: 10
  },
  image: {
    height: null,
    width: null,
    flex: 1
  },
  iconsWrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 12
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
    color: "black",
    fontSize: 20
  },
  flexOne: {
    flex: 1,
    padding: 12
  }
});

export class index extends Component<IProps> {
  // static navigationOptions = {
  //   header: null
  // }
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../../assets/chat.png")}
        style={[iconStyles.icon, { tintColor: tintColor }]}
      />
    )
  };

  static propTypes = {
    settings: PropTypes.object
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        <Header style={[styles.container]}>
          <Right>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Text>Skip</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.wrapper}>
            <View
              style={{
                height: height / 5,
                width: width / 3,
                // backgroundColor: this.props.settings.textColor,
                alignSelf: "center",
                shadowOffset: { width: 5, height: 3 },
                shadowColor: "white",
                shadowOpacity: 0.5,
                elevation: 5,
                padding: 22,
                borderRadius: 6,
                marginTop: height / 19
              }}
            >
              <Image
                source={require('../../../assets/logoc.png')}
                style={styles.image}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  letterSpacing: 1
                }}
              >
                Hydrate
              </Text>
            </View>
            <View
              style={{
                margin: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{}}>Every sip counts</Text>
            </View>

            {/* inputs */}
            <InputText />
            {/* ./inputs */}

            <View
              style={{
                marginTop: 12
              }}
            >
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                Forgot Password ?
              </Text>
            </View>

            {/* login button */}
            <View
              style={{
                flex: 1,
                marginTop: 12
              }}
            >
              <BlockButton title={"Login"} />
            </View>
            {/* or */}
            <View
              style={{
                flex: 1,
                marginTop: 12
              }}
            >
              <OrBlock />
            </View>

            {/* social login buttons */}
            <View style={styles.iconsWrapper}>
              <View style={styles.flexOne} />
              <View style={styles.flexOne}>
                <SocialButtons iconName={"ios-bonfire"} />
              </View>
              <View style={styles.flexOne}>
                <SocialButtons iconName={"ios-finger-print"} />
              </View>
              <View style={styles.flexOne} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;
