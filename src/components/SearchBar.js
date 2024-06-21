import React, { useState } from 'react';
import '../SearchBar.css'; // Importar estilos personalizados

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Llamar a la función onSearch con el término de búsqueda
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={handleChange}
        className="form-control search-input"
      />
      <button type="submit" className="btn btn-primary search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

