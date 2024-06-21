
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../CharacterCard.css'; // Importar estilos personalizados

// Función para obtener la clase CSS basada en la especie
const getSpeciesClass = (species) => {
  let speciesClass = '';
  switch (species) {
    case 'Human':
      speciesClass = 'species-humanoid'; // Cambié a 'species-humanoid' para humanoides (humanos)
      break;
    case 'Alien':
      speciesClass = 'species-alien';
      break;
    default:
      speciesClass = 'species-unknown';
      break;
  }
  return speciesClass;
};

// Función para obtener la clase CSS basada en el género
const getGenderClass = (gender) => {
  let genderClass = '';
  switch (gender) {
    case 'Male':
      genderClass = 'gender-male';
      break;
    case 'Female':
      genderClass = 'gender-female';
      break;
    default:
      genderClass = 'gender-unknown';
      break;
  }
  return genderClass;
};

// Función para obtener la clase CSS basada en el estado
const getStatusClass = (status) => {
  switch (status) {
    case 'Alive':
      return 'status-alive';
    case 'Dead':
      return 'status-dead';
    default:
      return 'status-unknown';
  }
};

const CharacterList = ({ characters }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Characters</h2>
      <div className="character-list">
        {characters.map(character => (
          <Card key={character.id} className="character-card">
            <Card.Img variant="top" src={character.image} className="card-img-top" />
            <Card.Body>
              <Card.Title className="card-title">{character.name}</Card.Title>
              <Card.Text className="card-text">
                <strong>Status:</strong> {' '}
                <span className={`status ${getStatusClass(character.status)}`}>{character.status}</span> <br />
                <br />
                <strong>Species:</strong> {' '}
                <span className={`species ${getSpeciesClass(character.species)}`}>{character.species}</span> <br />
                <br />
                <strong>Gender:</strong> {' '}
                <span className={`gender ${getGenderClass(character.gender)}`}>{character.gender}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;







