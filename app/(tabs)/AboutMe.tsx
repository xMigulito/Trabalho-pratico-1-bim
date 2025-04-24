import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutMe() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Miguel do Nascimento Moreno Fernandes</Text>
        <Text style={styles.subtitle}>Engenharia de Software • 7º Período</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="person-outline" size={20} color="#B4916C" /> Sobre Mim
          </Text>
          <Text style={styles.sectionText}>
            Olá, sou Miguel, tenho 21 anos e sou apaixonado por tecnologia. Atuo como Desenvolvedor Full-Stack, uma carreira que escolhi por minha fascinação em criar soluções inovadoras e explorar o universo da programação. Nas horas livres, gosto de jogar, relaxar, aprender coisas novas e buscar novas perspectivas. Estou sempre em busca de crescimento pessoal e profissional, com o objetivo de expandir meus horizontes.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="briefcase-outline" size={20} color="#B4916C" /> Aspiração Profissional
          </Text>
          <Text style={styles.sectionText}>
            Meu objetivo é me tornar um Desenvolvedor Full-Stack Senior, liderando projetos desafiadores e contribuindo com soluções de alto impacto. Quero continuar aprimorando minhas habilidades técnicas e colaborando com equipes para criar tecnologias que transformem vidas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#B4916C',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#B4916C',
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#999',
    lineHeight: 24,
    textAlign: 'justify',
  },
});