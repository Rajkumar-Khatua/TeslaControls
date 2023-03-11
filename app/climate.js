import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import climateImage from "../assets/images/climate.png";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const ClimateScreen = () => {
  const router = useRouter();

  const [temperature, Settemperature] = useState(60);
  const [poweron, Setpoweron] = useState(false);
  const [vent, Setvent] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={climateImage}
        style={styles.image}
        resizeMode='cover'
      />

      <Pressable
        onPress={() => router.back()}
        style={styles.back}>
        <Entypo
          name='chevron-left'
          size={24}
          color='white'
        />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>

        <Pressable
          onPress={() => Setpoweron(!poweron)}
          style={styles.controlsRow}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              name='power'
              size={42} //'rgba(27, 253, 105, 0.74)'
              color={poweron ? "rgba(27, 253, 105, 0.74)" : "grey"}
            />
            <Text style={styles.iconButtonText}>{poweron ? "On" : "Off"}</Text>
          </View>

          <View style={styles.temperatureContainer}>
            <Entypo
              onPress={() => Settemperature(temperature - 1)}
              name='chevron-left'
              size={30}
              color='gray'
            />
            <Text style={styles.temperatureText}>{temperature}°</Text>
            <Entypo
              onPress={() => Settemperature(temperature + 1)}
              name='chevron-right'
              size={30}
              color='gray'
            />
          </View>

          <Pressable onPress={()=>Setvent(!vent)} style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              name='car-door'
              size={42}
              color={vent? "rgba(27, 253, 105, 0.74)":"grey"}
            />
            <Text style={styles.iconButtonText}>{vent ? "Vent":"Vent!"}</Text>
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "rgba(225, 236, 228, 0.5)",
    color:'grey',
    padding: 10,
    borderRadius: 50,
    shadowColor: "#fff",
  },
  image: {
    width: "100%",
    height: "75%",
  },
  footer: {
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
    // backgroundColor:'rgba(225, 236, 228, 0.5)',
    
  },
  label: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "300",
    color: "white",
    marginHorizontal: 20,
    shadowColor: "#fff",
  },
  iconButtonContainer: {
    alignItems: "center",
    overflow:'hidden',
  },
  iconButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});

export default ClimateScreen;
