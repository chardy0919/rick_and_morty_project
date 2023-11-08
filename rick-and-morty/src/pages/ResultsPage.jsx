import {useParams, useOutletContext, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";
import CharCard from '../components/Card';

const ResultsPage = () => {

    const {searchValue} = useParams()
    const [results, setResults] = useState([])
    const {favorites, setFavorites} = useOutletContext();
    const [pager, setPager] = useState(1)
    const location = useLocation()

    const searchResults = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pager}&name=${searchValue.toLowerCase()}`)
        console.log(response.data)
        const newResults = response.data.results
        setResults([...results, ...newResults]) 
        if (response.data.info.next){
            setPager(pager+1)
        }
        console.log(results.length)
    }

    useEffect(() =>{
        setPager(1)
        setResults([])
    },[location])

    useEffect(() => {
        searchResults()
    }, [pager])

    return (  
        <>
            <h1>Results</h1>
            <div className="card-grid">
                {results.map((elem, idx) => (
                    <CharCard 
                        key = {idx}
                        id = {elem.id}
                        name={elem.name}
                        image={elem.image}
                        species={elem.species}
                        status={elem.status}
                        gender={elem.gender}
                        setFavorites={setFavorites}
                        favorites={favorites}
                    />
                ))}
            </div>  
        </>
    )
}
export default ResultsPage;