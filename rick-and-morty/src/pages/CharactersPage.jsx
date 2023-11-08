import { useState, useEffect } from "react";
import axios from "axios";
import CharCard from '../components/Card';
import { useOutletContext } from "react-router-dom";


const CharactersPage =() =>{

    const [chars, setChars] = useState([]);
    const [page, setPage] = useState(1);
    const {favorites, setFavorites} = useOutletContext();

    useEffect(() => {
        const getChars = async () => {
          try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            // console.log(response.data.results);
            setChars(response.data.results)
          }
          catch (error) {
            console.error("An error occurred:", error);
          }
        }
        getChars()
      }, [page])


      
    return  (
    <>  

      <div className="card-grid">
        {chars.map((elem, idx) => (
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
  
      <div className="page-buttons">
          <button id="prev-button" onClick={()=> page > 1
              ?
              setPage(page - 1)
              :
              setPage(42)}
          >Prev</button>
          <p className="m-4">Page {page} of 42</p>
          <button id="next-button" onClick={()=> page === 42 
              ? 
              setPage(1)
              :
              setPage(page + 1)}
          >Next</button>
      </div>
    </>
    )
}

export default CharactersPage