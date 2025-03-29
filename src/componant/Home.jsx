import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export const Home = () => {
    const [movieAllData, setMovieAllData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [searchKeyword, setSearchKeyword] = useState("movie")
    const [isDataAvailable, setIsDataAvailable] = useState(true);

    const getMovieData = async () => {
        try {
            const {data} = await axios.get(
                `http://www.omdbapi.com/?apikey=7f7c13dc&s=${searchKeyword}`
            );
            if (data?.Response =="True") {
                setMovieAllData(data?.Search)
                setIsDataAvailable(true)
            }

            if(data?.Response =="False"){
                setIsDataAvailable(false);
            }
            

        }
        catch (err) {
            console.log("error", err);

        }



    };

    useEffect(() => {
        getMovieData();
    }, [searchKeyword])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleSearch = (e) => {
        setSearchKeyword(inputValue)
    }

    console.log("input-value", inputValue)



    return (
        <>
            <div className="container-fluid">
                <div className="row px-4">
                    <div className="col-6 d-flex flex-column gap-5">
                        <div>

                            <h1 className='heading-color'>Watch Your Favourite Movie.</h1>
                            <p className='heading-color' >Movie is a recording of moving images that tells a story and that people watch on a screen or television.A movie synopsis summarizes the film’s storyline. It covers all of the screenplay’s acts and highlights key plot points and emotional components. </p>
                        </div>

                        <div className='d-flex gap-2 mt-1 '>
                            <input type="text"
                                className='input-fluid w-75 border-0 rounded px-3'
                                placeholder='search your favourite...'
                                value={inputValue}
                                onChange={handleInputChange} />
                            <button className='search-button w-25 border-0 rounded' onClick={handleSearch}> Search</button>
                        </div>
                    </div>
                </div>
                <div className="row px-4 my-5 gap-4 justify-content-between">
                    { isDataAvailable? movieAllData?.map((movie) => {
                            return (
                                <div className='col-2' key={movie?.imdbID}>
                                    <NavLink className={"text-decoration-none"} to={`/single/${movie?.imdbID}`}> 
                                        <div className='card-bg rounded'>
                                        <div >
                                            <img src={movie?.Poster}
                                                alt="movie-card"
                                                className='movie-card p-2 pb-0'
                                            />
                                        </div>
                                        <div className='py-2'>
                                            <p className='heading-color fs-5 text-center m-0 text-overflow px-2 '>
                                                {movie?.Title}
                                            </p>
                                        </div>
                                    </div>
                                    </NavLink>
                                   
                                </div>
                            )
                        }): <h1 className='fs-1 text-center text-white'> No Result Found</h1>
                    }

                </div>
            </div>
        </>
    )
}
