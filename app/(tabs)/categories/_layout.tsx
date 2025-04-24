import { Stack } from "expo-router";

export default function CategoriesLayout() {
  return (
    <Stack screenOptions={{ 
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Categorias",
        }}
      />
      <Stack.Screen
        name="[categoryId]"
        options={{
          title: "Produtos da Categoria",
        }}
      />
      <Stack.Screen
        name="product/[id]"
        options={{
          title: "Detalhes do Produto",
        }}
      />
    </Stack>
  );
}
