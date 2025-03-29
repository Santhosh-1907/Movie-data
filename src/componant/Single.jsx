import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Single = () => {

    const { id } = useParams();


    const [singleMovie, setSingleMovie] = useState("");
    const getsingleData = async () => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=7f7c13dc&i=${id}`)
        console.log("sigle-data", data)
        setSingleMovie(data?.data);
    }

    useEffect(() => {
        getsingleData()
    }, [id]);
    return (
        <>
            <div className="container-fluid">
                <div className="row px-4 my-5">
                    <div className="col-4">
                        <div>
                            <img src={singleMovie?.Poster}
                                alt="img"
                                className='Image-Poster' />

                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <h2 className='text-light'>{singleMovie?.Title}</h2>
                        </div>
                        <div className='mt-2'>
                               
                                <p className='m-o  text-secondary font-size-14' >{singleMovie?.Plot}</p>
                            </div>
                        <div className='flex flex-column gap-3'>
                            <div className='mt-2'>
                                <p className='text-grey m-o fs-5'>Rating</p>
                                <p className='m-o  text-yellow font-size-14 py-1 card-bg d-inline-block px-2 rounded' ><span><i className="fa-solid fa-star font-size-12"></i></span>{singleMovie?.imdbRating}</p>
                            </div>
                            <div>
                                <p className='text-grey m-o fs-5'>Awards</p>
                                <p className='m-o  text-light font-size-14' >{singleMovie?.Awards}</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-grey m-o fs-5'>Country</p>
                                <p className='m-o  text-light font-size-14' >{singleMovie?.Country}</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-grey m-o fs-5'>Language</p>
                                <p className='m-o  text-light font-size-14' >{singleMovie?.Language}</p>
                            </div>

                            <div className='mt-2'>
                                <p className='text-grey m-o fs-5'>Runtime</p>
                                <p className='m-o  text-light font-size-14' >{singleMovie?.Runtime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

