import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import menuOptions from "../assets/menuOptions";

// import car from "../assets/images/teslaModel3.png";
import car from "../assets/images/car.png";
import MenuOption from "../components/MenuOption";
import { LinearGradient } from "expo-linear-gradient";

const Controls = () => {
  return (
    <View style={styles.controls}>
      <Entypo
        name='lock'
        size={26}
        color='gray'
      />
      <MaterialCommunityIcons
        name='fan'
        size={26}
        color='#fff'
      />
      <FontAwesome5
        name='bolt'
        size={26}
        color='gray'
      />
      <Ionicons
        name='car-sport-sharp'
        size={26}
        color='gray'
      />
    </View>
  );
};

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Tesla Model 3</Text>
          <Text style={styles.subtitle}>Parked!</Text>
        </View>
        <FontAwesome
          name='user-circle'
          size={24}
          color='grey'
        />
        {/* <Entypo name="light-up" size={26} color="grey"}/> */}
      </View>
      <Image
        source={car}
        
        style={styles.image}
        resizeMode='contain'
      />
      {/* <Controls/> */}

      {/* List View */}
      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: "500",
    color: "grey",
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
