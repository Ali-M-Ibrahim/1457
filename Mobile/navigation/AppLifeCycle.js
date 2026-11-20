import { useState, useEffect } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';



const App = () => {



  const sayHello = () => console.log("hello");
  // the below will be executed after each render
  // useEffect(sayHello)

  useEffect(() => console.log("Hello"));


  // the below will be executed only on first render
  useEffect(() => console.log("hello on create only"), []);



  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const [more, setMore] = useState(false);

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

  useEffect(getData, []);

  const getMoredata = () => console.log("getting more data");

  useEffect(getMoredata, [more]);

  return (

    <View>
      {loading ?
        <ActivityIndicator size={'large'} /> :
        <View>
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

          <Button title='more' onPress={() => setMore(!more)}></Button>


        </View>

      }

    </View>


  );
};

export default App;