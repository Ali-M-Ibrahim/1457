import { useState } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';



const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = () => {
    setLoading(true);
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setTitle(jsonData.title);
        setDesc(jsonData.description);
        setMovies(jsonData.movies);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }


  const retrieveData = async () => {
    setLoading(true);
    try {
      // const response = await fetch("https://reactnative.dev/movies.json");

      const response = await fetch("http://10.1.128.143:8000/api/mobile-data");

      const jsonData = await response.json();
      setData(jsonData);
      setTitle(jsonData.title);
      setDesc(jsonData.description);
      setMovies(jsonData.movies);
      setLoading(false);

    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  return (

    <View>
      {loading ? <ActivityIndicator size={'large'} /> :
        <View>
          <Button title='Click me to get data' onPress={retrieveData}></Button>
          <Text>Title is: {title}       {data.title}  </Text>
          <Text>Description is: {desc} {data.description} </Text>
          {movies.map((row) => {
            return (
              <Text key={row.id}>
                Id is: {row.id} name is: {row.title} and year is: {row.releaseYear}
              </Text>
            )
          })}

          {data.movies && data.movies.map((row) => {
            return (
              <Text key={row.id}>
                Id is: {row.id} name is: {row.title} and year is: {row.releaseYear}
              </Text>
            )
          })}

        </View>
      }
    </View>
  );
};

export default App;