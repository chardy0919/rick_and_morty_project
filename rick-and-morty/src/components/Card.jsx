import Card from 'react-bootstrap/Card';
import Button from  'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function CharCard({id, name, image, species, status, gender, setFavorites, favorites}) {
  
  const navigate = useNavigate();

  const removeFromFavorites = () => {
    // Filter out the card with the specified ID from the favorites array
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  }

  return (
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Species: {species}<br/>Status: {status}<br/>Gender: {gender}
            </Card.Text>
            <Button variant="primary" onClick={()=> navigate(`/charDetails/${id}/`)}>
              Details
            </Button>
            <Button variant="warning" onClick={()=> favorites.length >= 4 ? alert('Your party is too large.') : setFavorites([...favorites,{'image': image, 'name': name, 'id': id }])}>
              <FaHeart/>
            </Button>
            <Button variant="danger" onClick={removeFromFavorites}>
              <FaRegHeart/>
            </Button>
        </Card.Body>
        </Card>
  );
}

export default CharCard;