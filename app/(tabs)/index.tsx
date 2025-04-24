import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { data } from "../../data/index";
import { Product } from "../../types/product";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function Index() {
  const getRandomProducts = (count: number): Product[] => {
    const shuffled = [...data.products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(6);

  const handleProductPress = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const handleSeeAllProducts = () => {
    router.push("/categories");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop",
        }}
        style={styles.hero}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.8)"]}
          style={styles.heroOverlay}
        >
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>COLEÇÃO EXCLUSIVA</Text>
            <Text style={styles.welcomeSubtitle}>
              Descubra peças únicas que refletem sua sofisticação
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>EM DESTAQUE</Text>
        <View style={styles.productsGrid}>
          {randomProducts.map((item) => (
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
      </View>

      <TouchableOpacity
        style={styles.seeAllButton}
        onPress={handleSeeAllProducts}
      >
        <Text style={styles.seeAllButtonText}>EXPLORAR COLEÇÃO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  hero: {
    width: "100%",
    height: 500,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  welcomeSection: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
    marginBottom: 12,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
    letterSpacing: 1,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 3,
    marginBottom: 20,
    fontWeight: "500",
  },
  productsGrid: {
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
  seeAllButton: {
    margin: 20,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B4916C",
  },
  seeAllButtonText: {
    color: "#B4916C",
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: "500",
  },
});
