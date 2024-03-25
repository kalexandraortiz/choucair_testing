// CharacterDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { ArrowBack, Favorite } from '@mui/icons-material';
import img from './appbar.png'; // Import your header image

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null); //save character

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`) // Api list character detail
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error('Error fetching character:', error));
  }, [id]);

  // Function to add character to favorites
  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(favorite => favorite.id === character.id)) {
      const updatedFavorites = [...favorites, character];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <IconButton>
              <ArrowBack style={{ color: 'white', marginTop: 10}}/>
            </IconButton>
          </Link>
          <img src={img} alt="Header" style={{ height: 70, marginBottom: 10, marginRight: 30 }} />
          <Typography variant="h6" style={{ color: 'white', marginTop: 10}}>Character detail</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {character ? (
            <Card style={{ maxWidth: 600, margin: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <img src={character.image} alt={character.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <Typography variant="body1" sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '2px 5px', borderRadius: 5 }}>
                  {character.species}
                </Typography>
              </div>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5">{character.name}</Typography>
                  <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
                    <Favorite />
                  </IconButton>
                </div>
                <Typography variant="body1">Status: {character.status}</Typography>
                <Typography variant="body1">Gender: {character.gender}</Typography>
                <Typography variant="body1">Type: {character.type}</Typography>
                <Typography variant="body1">Origin: {character.origin.name}</Typography>
                <Typography variant="body1">Location: {character.location.name}</Typography>
              </CardContent>
            </Card>
        ) : (
          <Typography variant="h6"sx={{ position: 'relative', top: 20, left: 20 }}>Loading...</Typography>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
