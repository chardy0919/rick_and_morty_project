import {useState, useEffect} from 'react';
import {useParams, useOutletContext} from 'react-router-dom';
import axios from 'axios'
import CharCard from '../components/Card';


const CharDetailsPage = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()
    const {favorites, setFavorites} = useOutletContext

    const getCharDetails = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(response.data)  
    }

    useEffect(() => {
        getCharDetails()
    }, [])

    console.log(character)

    return(
        <>
        <CharCard                
            id = {character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            gender={character.gender}
        />
        </>
    )

}
export default CharDetailsPage