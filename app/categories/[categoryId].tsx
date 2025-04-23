import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { data } from "../../data/index";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function CategoryProducts() {
  const { categoryId } = useLocalSearchParams();
  const category = data.categories.find((c) => c.id === Number(categoryId));
  const products = data.products.filter(
    (p) => p.idCategory === Number(categoryId)
  );

  const handleProductPress = (productId: number) => {
    router.push(`/categories/product/${productId}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>
          {category?.title.toUpperCase()}
        </Text>
      </View>

      <View style={styles.productsGrid}>
        {products.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.productCard}
            onPress={() => handleProductPress(item.id)}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.9)"]}
              style={styles.productOverlay}
            >
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.productPrice}>
                  R$ {item.price.toFixed(2)}
                </Text>
              </View>
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
  header: {
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 2,
  },
  productsGrid: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: width / 2 - 25,
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  productOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 8,
    letterSpacing: 1,
  },
  productPrice: {
    fontSize: 14,
    color: "#B4916C",
    fontWeight: "600",
  },
});
