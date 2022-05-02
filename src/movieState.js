import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {movies$} from './data/movies';
//import  axios from 'axios'

console.log(movies$)


// METHODE 1 ***************************************
// export const getMovies = createAsyncThunk(
//     'movies/getMovies', 
//     async () => {
//      const response = await fetch(movies$);
//         const formattedResponse = JSON.parse(JSON.stringify(response))
//         // await response.json();
//         //JSON.stringify(formattedResponse)
//         console.log(formattedResponse)
//         return formattedResponse
//     }
// );

// METHODE 2 AVEC  MOVIE  EN FULFILLED MAIS UNEFINED EN SORTIE
export const getMovies = createAsyncThunk(
    'movies/getMovies', 
    async () => {
     const response = await fetch(movies$)
     .then((res) => {
     const responseData = res.data;
    console.log(responseData)
     })
     }
      
        // .then()
        // const formattedResponse = JSON.parse(JSON.stringify(response))
        // // await response.json();
        // //JSON.stringify(formattedResponse)
        // console.log(formattedResponse)
        // return formattedResponse
    // .then((films) => {
    //     console.log(films);
    //     } )
//     }
)


// METHODE 3 AVEC FETCH ET STRINGIFY SUITE AUX MESSAGES D ERREUR
// const fetchPromise = fetch(movies$);

// fetchPromise
//     .then((response) => {
//             console.log(response);
//             const formattedResponse = JSON.parse(JSON.stringify(response))
//         return response.json();
//     })
//     .then((pMovies) => {
//         console.log(pMovies);
//         const titles = pMovies.map(movie => movie.title).join("\n");
//         console.log(titles)
//     });


export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        isLoading: false,
    },
    extraReducers: {
        [getMovies.pending]: (state) => {
        state.isLoading = true;
        },
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.isLoading = false;
        },
        [getMovies.rejected]:  (state) => {
            state.isLoading = false;
        }
    },
})

export default movieSlice.reducer;
