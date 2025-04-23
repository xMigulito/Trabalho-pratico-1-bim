import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { data } from "../../../data/index";

const { width } = Dimensions.get("window");

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const product = data.products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Produto não encontrado</Text>
      </View>
    );
  }

  const category = data.categories.find((c) => c.id === product.idCategory);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.category}>{category?.title.toUpperCase()}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

        <View style={styles.separator} />

        <Text style={styles.descriptionTitle}>DETALHES</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  productImage: {
    width: width,
    height: width,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 20,
  },
  category: {
    fontSize: 14,
    color: "#B4916C",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 1,
  },
  price: {
    fontSize: 20,
    color: "#B4916C",
    fontWeight: "600",
    marginBottom: 24,
  },
  separator: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 24,
  },
  descriptionTitle: {
    fontSize: 14,
    color: "#fff",
    letterSpacing: 2,
    marginBottom: 12,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    color: "#999",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  errorText: {
    fontSize: 16,
    color: "#B4916C",
    textAlign: "center",
    marginTop: 20,
  },
});
