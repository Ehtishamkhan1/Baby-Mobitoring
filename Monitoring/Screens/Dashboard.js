import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../Components/styles";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();
  const Livestream = () => {
    navigation.navigate("Babylivestream");
  };

  return (
    <View style={styles.Dashboardbackground}>
    <Text  style={{fontWeight:"bold",fontSize:32,top:15}} > BABY MONITORING </Text>
       
      

      <View style={{ top:550 }}>
        <TouchableOpacity style={styles.Dashboardbuttons} onPress={Livestream} >
          <Text style={styles.dashboardbtntxt} >
            View Baby
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Dashboardbuttons} onPress={() => alert("You tapped the text!")} >
          <Text
            style={styles.dashboardbtntxt}
            
          >
            View No go Area
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
