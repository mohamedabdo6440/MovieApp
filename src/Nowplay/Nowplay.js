import { useState, useEffect } from 'react'

function Nowplay() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            });

    }, []);


    return (

        <section className="pt-5">
            <h2 className="text-center mt-2 mb-5 white">Now Playing Movies</h2>
            <div className="container w-75 myM">
                <div className="row">
                    <div className="col-md-6">
                        <input id="allMovies" className="form-control mb-5 " placeholder="get movies by word..." />
                    </div>
                    <div className="col-md-6"><input className="form-control " id="word" type="text" placeholder="search by rate" />
                    </div>

                </div>
            </div>


            <section className="container text-center">

                <div className='container text-center'>


                    <div className='container text-center'>
                        <div className="row">

                            {
                                movies.map((movie) => {
                                    return (



                                        <div className="col-md-6 col-lg-4 my-3  shadow" key={movie.id}>


                                            <div className="movie shadow rounded position-relative">
                                                <div className="post">
                                                    <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" className="img-fluid rounded" />
                                                    <div className="layer d-flex align-items-center ">
                                                        <div className="info p-0">


                                                            <h2>{movie.original_title}</h2>
                                                            <br />
                                                            <p className="desc">{movie.overview}</p>
                                                            <br />
                                                            <p>Rate: {movie.vote_average}</p>
                                                            <p>Date: {movie.release_date}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    )
                                })
                            }

                        </div>
                    </div>



                </div>


            </section>


        </section>
    );
}

export default Nowplay;