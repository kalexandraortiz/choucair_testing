// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import FavoriteCharacters from './FavoriteCharacters'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CharacterList />} />
        <Route path="/favorites" element={<FavoriteCharacters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
