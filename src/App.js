
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import SearchBar from './components/SearchBar';
import './App.css'; // Importar estilos globales si es necesario

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results); // Inicialmente mostramos todos los personajes
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="App container">
      <h1 className="text-center mt-4 mb-4">Rick and Morty Characters</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Pasar filteredCharacters en lugar de characters */}
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;


