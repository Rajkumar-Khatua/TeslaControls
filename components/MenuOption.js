import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOption = ({ item }) => {
  return (
    <SafeAreaView>
      <Link
        href={item.href}
        asChild>
        <Pressable style={styles.optionRow}>
          {/* ICON */}
          <MaterialCommunityIcons
            name={item.iconName}
            size={26}
            color='gray'
          />

          {/* Text */}
          <Text style={styles.optionText}>{item.name}</Text>
          {/* Icon */}
          <MaterialIcons
            name='keyboard-arrow-right'
            size={26}
            color='gray'
            style={{ marginLeft: "auto" }}
          />
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default MenuOption;
