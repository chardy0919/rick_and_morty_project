import { useOutletContext } from "react-router-dom";
import CharCard from "../components/Card";

const FavoritesPage = () => {
  const {setFavorites, favorites} = useOutletContext()

  return (
    <>
      <h2>Favorites</h2>
      {favorites.map((elem, idx) => (
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
    </>
  );
};

export default FavoritesPage