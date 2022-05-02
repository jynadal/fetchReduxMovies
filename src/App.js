import './App.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPhotos} from './galleryState';
import { getMovies} from './movieState';
//import axios from 'axios'


function App() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.gallery.photos);
    const movies = useSelector(state => state.movies.movies);

    useEffect(()=>{
        dispatch(getPhotos());
        dispatch(getMovies())

        // axios
        //     .get(movies$)
        //     .then((res) => dispatch)
    },[dispatch])
    // console.log(movies)
  return (
    <div className="App">
    <h1>Photo Gallery</h1>
    <hr />
    <div> 
    {/* {movies.map(movie => 
    <div>
    <p>{movie.title}</p>
    <br />
    </div>

    )}   */}
    <hr />
    {photos.map(photo => 
    <img 
        key={photo.id}
        alt={photo.author}
        src={photo.download_url}
        width="400"
        height= "400"
    />  )}  
    </div>

     
    </div>
  );
}

export default App;
