import React, { Component } from 'react';
 import axios from "axios" ;

class Home extends Component {

      state ={ movies: [] }
       getTrending = async () => {
          let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`)
          console.log(data.results);
          this.setState({
           movies: data.results
          })
         
      }
      componentDidMount(){
          this.getTrending()
      }

    render() {
        console.log("this is from render");
        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                <div className="brdr w-25"> </div>
                                    <h1>Trending <br /> Movies <br /> to watch now</h1>
                                    <p className="secondFontColor"> Most Watched Movies </p>
                                    <div className="brdr w-100"></div>
                                
                            </div>
                        </div>
                        {this.state.movies.map((value, index) =>{
                            return(
                                <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original"+value.poster_path} alt="" />
                                        <h5>{value.name}{value.tittle}</h5>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                                </div>
                
                            )
                        })}
                    </div>

                </div>
            </>
        );
    }
}

export default Home;