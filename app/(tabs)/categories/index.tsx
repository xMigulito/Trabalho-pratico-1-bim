import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { data } from "../../../data/index";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function Categories() {
  const handleCategoryPress = (categoryId: number) => {
    router.push(`/categories/${categoryId}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>CATEGORIAS</Text>
      <View style={styles.categoriesContainer}>
        {data.categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(item.id)}
          >
            <Image source={{ uri: item.cover }} style={styles.categoryImage} />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.9)"]}
              style={styles.categoryOverlay}
            >
              <Text style={styles.categoryTitle}>
                {item.title.toUpperCase()}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  pageTitle: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 3,
    padding: 20,
    fontWeight: "500",
  },
  categoriesContainer: {
    padding: 20,
  },
  categoryCard: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 2,
  },
});
