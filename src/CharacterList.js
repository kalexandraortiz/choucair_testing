// List rick and morty characters
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, AppBar, Toolbar, Button, TextField, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import img from './appbar.png'; 

function CharacterList() {
  const [characters, setCharacters] = useState([]); //save characters
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character') //API list characters
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  // Sort characters alphabetically by name
  const sortedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));

  //filter character by
  const filteredCharacters = sortedCharacters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'black'}}>
        <Toolbar>
          <img src={img} alt="Header" style={{ height: 70, marginBottom: 10, marginRight: 30 }} />
          <Typography variant="h6" style={{ color: 'white', marginTop: 10}}>Characters</Typography>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/favorites">Favorites</Button>
          </div>
        </Toolbar>
      </AppBar>
      
      <TextField
        label="Search by name"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ display: 'flex', marginTop: 30, marginBottom: 30, marginLeft: 10, borderRadius: 4, width: 500 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredCharacters.map(character => (
          <Link key={character.id} to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            
            <Card style={{ width: 200, margin: 10 }}>
              <div style={{ position: 'relative' }}>
                <img src={character.image} alt={character.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <Typography variant="body1" sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '2px 5px', borderRadius: 2 }}>
                  {character.species}
                </Typography>
              </div>

              <CardContent style={{ alignItems: 'center' }}>
                <Typography variant="h6">{character.name}</Typography>
              </CardContent>

            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;


