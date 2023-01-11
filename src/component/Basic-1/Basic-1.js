import React, {useState, useEffect} from 'react'

function Basic_1() {
    const [Names, setNames] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setNames(data);
        });
    }, []);
    // const Names = [{name:'Mushfik Farhan', age: 25}, {name:'Sabbir Farhan', age: 25}, {name:'Tousif Mahbub', age: 26}, {name:'Afran Nisho', age: 29}];
  return (
    <div>
        <MovieName></MovieName>
        {
            Names.map(nk => (
                <Basic name={nk.name} key={nk.id} email={nk.email} ></Basic>
            ))
        }
    </div>
  )
}

function MovieName(){
    const [movie, setMovie] = useState(0)

    return(
        <div>
            <button onClick={()=> setMovie(movie+1)} >Add Movie</button>
            <h2>Number of movies : {movie}</h2>
            <MovieDisplay movies={movie} ></MovieDisplay>
            <MovieDisplay movies={movie+10} ></MovieDisplay>
            <MovieDisplay movies={movie} ></MovieDisplay>
            <MovieDisplay movies={movie} ></MovieDisplay>
        </div>
    )
}
const MovieDisplay =(props) =>{
    return <div>
        <h3> Movie i have display :{props.movies}</h3>
    </div>
}

function Basic(props){
    const style={
        border: '2px solid purple',
        margin: '20px',
        borderRadius: '5px'
    }

    return ( <div style={style} >

        <h1>Players-{props.name}</h1>
        <h3>Email : {props.email || 'mrk99rk@gmail.com'}</h3>

    </div>)
}

export default Basic_1
