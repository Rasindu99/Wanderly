import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import FloatingButton from '../components/FloatingButton';
import { ClickContext } from '../context/ClickContext';

export default function HomePage({ username }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { setClickCount } = useContext(ClickContext);

  useEffect(() => {
    axios
      // .get('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England') 
      .get('https://freetestapi.com/api/v1/destinations') 
      .then((response) => {
        console.log(response?.data)
        if (response.data && Array.isArray(response.data)) {
          const travelData = response?.data?.splice(0,11)?.map((item) => ({
            id: item.id,
            title: item.country,
            description: item.description,
            image: item.image,
            status: item.language,
          }));
          setItems(travelData);
        } else {
          console.error('No sports data available');
        }
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);  

  const handleItemClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <LinearGradient
      colors={['#2f3640', '#2f3640']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <LinearGradient
        colors={['#141414', '#141414']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <Text style={styles.headerText}>Hola, {username} 👋</Text>
      </LinearGradient>
      <View style={styles.itemList}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemCard
                title={item.title}
                description={item.description}
                image={item.image}
                status={item.status}
                onPress={handleItemClick}
              />
            )}
          />
        )}
      </View>
      <FloatingButton />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerGradient: {
    padding: 15,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemList: {
    padding: 15,
    backgroundColor: '#dfe4ea',
    margin: 25,
    marginBottom:0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
