import React from 'react'

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies: [],
         }
    }
    
    componentDidMount(){
        const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8a50b270b6977ec6513d5d3a140ad77e`
        fetch(API)
        .then(res => res.json())
        .then(results => this.setState({movies: results.results}))
        

    }
    render() { 
        console.log(this.state.movies);
        return ( 
            <>
                <h1 className="title">Popular</h1>
                <div className="card">
                    <img src="" alt="" className="image" />
                    <h2 className="title"></h2>
                    <p className="description"></p>
                </div>
            </>
         );
    }
}
 
export default Popular;