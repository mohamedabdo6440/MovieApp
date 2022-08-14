import { useState, useEffect } from 'react';

function Toprate() {


    const [Toprate, setToprate] = useState([]);

    useEffect(() => {

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f99a4b0c91e28a26cf2a2a173e118dad")
            .then(response => response.json())
            .then(data => {
                setToprate(data.results)
            });

    }, []);


    return (


        <section className="pt-5">
            <h2 className="text-center mt-2 mb-5 white">Top Rated Movies</h2>
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
                                Toprate.map((toprate) => {
                                    return (



                                        <div className="col-md-6 col-lg-4 my-3  shadow" key={toprate.id}>


                                            <div className="movie shadow rounded position-relative">
                                                <div className="post">
                                                    <img src={'https://image.tmdb.org/t/p/w500' + toprate.poster_path} alt="" className="img-fluid rounded" />
                                                    <div className="layer d-flex align-items-center ">
                                                        <div className="info p-0">


                                                            <h2>{toprate.original_title}</h2>
                                                            <br />
                                                            <p className="desc">{toprate.overview}</p>
                                                            <br />
                                                            <p>Rate: {toprate.vote_average}</p>
                                                            <p>Date: {toprate.release_date}</p>

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

export default Toprate;